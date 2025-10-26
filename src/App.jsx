import Tabs from "./components/Tabs";
import GalleryWidget from "./components/GalleryWidget";

function App() {
  return (
     <div className="min-h-screen bg-[#191B1F] flex text-white">
      {/* Left half - Empty */}
      <div className="w-1/2 hidden lg:block"></div>
      
      {/* Right half - Components */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
        <div className="flex flex-col gap-8">
          <Tabs />
          <GalleryWidget />
        </div>
      </div>
    </div>
  );
}

export default App;
