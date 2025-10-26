const AddImageButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-600  hover:bg-[#161718] disabled:opacity-40 transition px-4 py-2 rounded-xl shadow-md flex items-center space-x-2 shadow-lg "
    >
      <span>+ Add Image</span>
    </button>
  );
};

export default AddImageButton;
