import Tabs from "./components/Tabs";
import GalleryWidget from "./components/GalleryWidget";

function App() {
  return (
    <div className="min-h-screen bg-[#191B1F] flex justify-center items-center p-8 text-white">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col">
          <Tabs />
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
}

export default App;
