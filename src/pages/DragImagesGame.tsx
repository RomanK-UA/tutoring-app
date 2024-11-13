import GameContainer from "../components/GameContainer";
import DroppableArea from "../components/DroppableArea";
import { DraggableItem } from "../components/DraggableItem";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
const DragImagesGame = () => {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <DraggableItem>Drag me</DraggableItem>;
  function handleDragEnd(event) {
    if (event.over && event.over.id === "droppable") {
      setIsDropped(true);
    }
  }
  return (
    <GameContainer flashColor={"red"}>
      <DndContext onDragEnd={handleDragEnd}>
        {!isDropped ? draggableMarkup : null}
        <DroppableArea>
          {isDropped ? draggableMarkup : "Drop here"}
        </DroppableArea>
      </DndContext>
    </GameContainer>
  );
};
export default DragImagesGame;
