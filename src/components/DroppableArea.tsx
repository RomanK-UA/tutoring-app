import { useDroppable } from "@dnd-kit/core";
const DroppableArea = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  return (
    <div ref={setNodeRef} className="flex h-60 border-2 border-red-400">
      {props.children}
    </div>
  );
};

export default DroppableArea;
