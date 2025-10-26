import { useState } from "react";
import AddImageButton from "./AddImageButton";
import GalleryImage from "./GalleryImage";

const GalleryWidget = () => {
  const [images, setImages] = useState([
    "/lunacal.jpg",
    "/lunacal.jpg",
    "/lunacal.jpg",
    "/lunacal.jpg",
  ]);

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3; // number of visible images at a time

  const handleAddImage = () => {
    const newImg = prompt("Enter image URL:");
    if (newImg) setImages([...images, newImg]);
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, images.length - visibleCount));
  };

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="bg-[#363C43] text-white p-4 rounded-2xl shadow-xl w-[720px] h-[316px] mt-8 flex flex-col items-center">
      {/* Header */}
      <div
        className="flex justify-between items-center mb-4 px-4"
        style={{ width: "614px", height: "62px", transform: "rotate(0deg)" }}
      >
        <h2 className="text-lg font-semibold bg-[#171717] px-4 py-2 rounded-xl h-[62px] w-[149px] flex items-center justify-center shadow-lg">
          Gallery
        </h2>

        {/* Add Image + Arrows */}
        <div className="flex items-center space-x-3">
          <AddImageButton onClick={handleAddImage} />

          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="p-2 rounded-full bg-[#161718] hover:bg-gray-600 disabled:opacity-40 transition h-[45px] w-[45px]"
          >
            ←
          </button>

          <button
            onClick={handleNext}
            disabled={startIndex >= images.length - visibleCount}
            className="p-2 rounded-full bg-[#161718] hover:bg-gray-600 disabled:opacity-40 transition h-[45px] w-[45px]"
          >
            →
          </button>
        </div>
      </div>

      {/* Image row */}
      <div className="flex justify-center space-x-4 mt-2">
        {visibleImages.map((src, i) => (
          <GalleryImage key={i} src={src} />
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
