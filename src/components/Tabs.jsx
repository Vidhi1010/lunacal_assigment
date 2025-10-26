import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experiences" },
    { id: "recommended", label: "Recommended" },
  ];

  return (
    <div className="bg-[#363C43] text-white pt-4 pl-8 pr-8 pb-4 rounded-2xl shadow-xl w-[720px] h-[316px] mt-8 flex flex-col items-center">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #363C43;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #888989 0%, #4A4E54 100%);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #999999 0%, #5A5E64 100%);
        }
      `}</style>
      
      {/* Tabs container */}
      <div className="flex justify-between items-center mb-4 bg-[#171717] rounded-[23px] opacity-100 px-4 w-[614px] h-[62px] rotate-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
            font-medium transition-all duration-200
            w-[195px] h-[49px] rounded-[16px] opacity-100
            flex items-center justify-center gap-[10px] 
            px-[24px] py-[10px]
            ${activeTab === tab.id ? "bg-[#363C43] shadow-lg" : "bg-[#171717]"}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="text-gray-300 overflow-y-auto custom-scrollbar px-4 w-[611px] h-[175px] font-sans font-normal text-[20px] leading-[100%] tracking-[0%]">
        {activeTab === "about" && (
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
            <br />
            <br />I was born and raised in Albany, NY& have been living in Santa
            Carla for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a.

            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
            <br />
            <br />I was born and raised in Albany, NY& have been living in Santa
            Carla for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a.
          </p>
        )}
        {activeTab === "experience" && (
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
            <br />
            <br />I was born and raised in Albany, NY& have been living in Santa
            Carla for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a.
          </p>
        )}
        {activeTab === "recommended" && (
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
            <br />
            <br />I was born and raised in Albany, NY& have been living in Santa
            Carla for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a.
          </p>
        )}
      </div>
    </div>
  );
};

export default Tabs;