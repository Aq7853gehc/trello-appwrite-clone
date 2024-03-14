"use client";
import { useBoardStore } from "@/store/Boardstore";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

type Props = {};

const Board = (props: Props) => {
  const getBoard = useBoardStore((state) => state.getBoard);
  useEffect(() => {
    getBoard();
  }, [getBoard]);

  return (
    <h1>HEllo</h1>
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => <div></div>}
    //   </Droppable>

    // </DragDropContext>
  );
};

export default Board;
