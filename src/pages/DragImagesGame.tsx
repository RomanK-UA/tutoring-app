import GameContainer from "../components/GameContainer";
import DroppableArea from "../components/DroppableArea";
import { DraggableItem } from "../components/DraggableItem";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
const DragImagesGame = () => {
  const [images, setImages] = useState([]);
  const [imageSrc] = useState("/flower.webp "); // Placeholder image
  const handleDrop = (event) => {
    // When an image is dropped, add another copy of the image in the box
    setImages((prevImages) => [...prevImages, imageSrc]);
  };

  return (
    <GameContainer flashColor={"red"}>
      <DndContext>
        <h3>Drag this image</h3>
        <DraggableItem src={imageSrc} />
        <h3>Drop the image here</h3>
        <DroppableArea onDrop={handleDrop} />
        <div>
          {images.map((src, index) => (
            <img key={index} src={src} alt="Dropped" />
          ))}
        </div>
      </DndContext>
    </GameContainer>
  );
};
export default DragImagesGame;
