import { ID, databases, storage } from "@/appwrite";
import { getdata } from "@/lib/getdata";
import uploadImage from "@/lib/uploadImage";
import { todo } from "node:test";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoInDB: (todo: Todo, columnId: TypedColumn) => void;
  newTaskInput: string;
  setNewTaskInput: (newTaskInput: string) => void;
  searchString: string;
  setSearchString: (searchString: string) => void;
  addTask: (todo: string, columnId: TypedColumn, image: File | null) => void;
  deletTask: (taskIndex: number, todoId: Todo, id: TypedColumn) => void;
  newTaskType: TypedColumn;
  setNewTaskType: (columnId: TypedColumn) => void;
  image: File | null;
  setImage: (image: File | null) => void;
}

export const useBoardStore = create<BoardState>((set, get) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  searchString: "",
  newTaskInput: "",
  setNewTaskInput: (newTaskInput) => set({ newTaskInput }),
  setSearchString: (searchString) => set({ searchString }),

  newTaskType: "todo",
  image: null,

  setNewTaskType: (columnId) => set({ newTaskType: columnId }),

  getBoard: async () => {
    const board = await getdata();
    set({ board });
  },
  setBoardState: (board) => set({ board }),
  setImage: (image: File | null) => set({ image }),

  deletTask: async (taskIndex: number, todo: Todo, id: TypedColumn) => {
    const newColumn = new Map(get().board.columns);
    newColumn.get(id)?.todos.splice(taskIndex, 1);
    set({ board: { columns: newColumn } });

    if (todo.image) {
      await storage.deleteFile(todo.image.bucketID, todo.image.fileId);
    }
    await databases.deleteDocument(
      "65ebdb723ca867b5c0d2"!,
      "65ebdba6a6003d194eb7"!,
      todo.$id
    );
  },

  updateTodoInDB: async (todo, columnId) => {
    await databases.updateDocument(
      "65ebdb723ca867b5c0d2"!,
      "65ebdba6a6003d194eb7"!,
      todo.$id,
      {
        title: todo.title,
        status: columnId,
      }
    );
  },
  addTask: async (todo: string, columnId: TypedColumn, image?: File | null) => {
    let file: Image | undefined;

    if (image) {
      const fileUpload = await uploadImage(image);
      if (fileUpload) {
        file = {
          bucketID: fileUpload.bucketId,
          fileId: fileUpload.$id,
        };
      }
    }

    const { $id } = await databases.createDocument(
      "65ebdb723ca867b5c0d2"!,
      "65ebdba6a6003d194eb7"!,
      ID.unique(),
      {
        title: todo,
        status: columnId,

        ...(file && { image: JSON.stringify(file) }),
      }
    );

    set({ newTaskInput: "" });

    set((state) => {
      const newColumn = new Map(state.board.columns);

      const newTodo: Todo = {
        $id,
        $createdAt: new Date().toISOString(),
        title: todo.toString(),
        status: columnId,
        ...(file && { image: file }),
      };

      const column = newColumn.get(columnId);

      if (!column) {
        newColumn.set(columnId, {
          id: columnId,
          todos: [newTodo],
        });
      } else {
        newColumn.get(columnId)?.todos.push(newTodo);
      }

      return {
        board: {
          columns: newColumn,
        },
      };
    });
  },
}));
