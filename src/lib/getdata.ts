import { databases } from "@/appwrite";

export const getdata = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_COLLECTION_ID!
  );

  const todo = data.documents;
  const columns = todo.reduce((acc, todo) => {
    if (!acc.get(todo.status)) {
      acc.set(todo.status, {
        id: todo.status,
        todos: [],
      });
    }

    acc.get(todo.status)!.todos.push({
      $id: todo.$id,
      $createdAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      ...(todo.image && { image: JSON.parse(todo.image) }),
    });
    return acc;
  }, new Map<TypedColumn, Column>());

  // if columns don't have inprogress, todo , done, add them an empty todos

  const colmnsTypes: TypedColumn[] = ["todo", "inprogress", "done"];

  for (const columnsTypes of colmnsTypes) {
    if (!columns.get(columnsTypes)) {
      columns.set(columnsTypes, {
        id: columnsTypes,
        todos: [],
      });
    }
  }

  console.log(columns);

  const sortColums = new Map(
    Array.from(columns.entries()).sort(
      (a, b) => colmnsTypes.indexOf(a[0]) - colmnsTypes.indexOf(b[0])
    )
  );

  const board: Board = {columns:sortColums};

  return board;
};
