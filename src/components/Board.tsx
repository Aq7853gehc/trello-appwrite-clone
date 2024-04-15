"use client";
import { useBoardStore } from "@/store/Boardstore";
import { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import Column from "./Column";

type Props = {};

const Board = (props: Props) => {
  const [board, getBoard, setBoardState,updateTodoInDB] = useBoardStore((state) => [
    state.board,
    state.getBoard,
    state.setBoardState,
    state.updateTodoInDB
  ]);
  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;
    // Hndel out of the box

    if (!destination) return;

    if (type === "column") {
      const entries = Array.from(board.columns.entries());
      const [remove] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, remove);
      const rearrangedColumns = new Map(entries);

      setBoardState({
        ...board,
        columns: rearrangedColumns,
      });
    }

    const column = Array.from(board.columns);
    const startColIndex = column[Number(source.droppableId)];
    let endColIndex = column[Number(destination.droppableId)];

    const startCol: Column = {
      id: startColIndex[0],
      todos: startColIndex[1].todos,
    };

    const endCol: Column = {
      id: endColIndex[0],
      todos: endColIndex[1].todos,
    };

    if (!startCol || !endCol) return;

    if (source.index === destination.index && startCol === endCol) return;

    const newTodos = startCol.todos;
    const [todoMove] = newTodos.splice(source.index, 1);

    if (startCol.id === endCol.id) {
      // same columns
      newTodos.splice(destination.index, 0, todoMove);
      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };

      const newColumn = new Map(board.columns);
      newColumn.set(startCol.id, newCol);

      setBoardState({
        ...board,
        columns: newColumn,
      });
    } else {
      // dragging to another
      const finishedTodo = Array.from(endCol.todos);
      finishedTodo.splice(destination.index, 0, todoMove);
      const newColumns = new Map(board.columns);
      const newCol = {
        id: startCol.id,
        todos: newTodos,
      };
      newColumns.set(startCol.id, newCol);
      newColumns.set(endCol.id, {
        id: endCol.id,
        todos: finishedTodo,
      });

      // update to DB
      updateTodoInDB(todoMove, endCol.id)

      setBoardState({
        ...board,
        columns: newColumns,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" type="column" direction="horizontal">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Array.from(board.columns.entries()).map(([id, col], index) => (
              <Column key={id} id={id} todo={col.todos} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
