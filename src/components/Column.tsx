import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

type Props = {
  id: TypedColumn;
  todo: Todo[];
  index: number;
};

const Column = ({ id, todo, index }: Props) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/*  */}
        <Droppable droppableId={index.toString()} type="card">
            {(provided,snapshots)=>(
              <div
              >{
                  // rendering the todos
                  "gonojoo"
                }</div>
            )}
        </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
