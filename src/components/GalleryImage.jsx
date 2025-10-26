const GalleryImage = ({ src }) => {
  return (
    <div className="min-w-[150px] h-[150px] rounded-xl overflow-hidden shadow-lg">
      <img
        src={src}
        alt="gallery"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default GalleryImage;
