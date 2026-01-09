"use client";

import {
  CalendarCheck,
  Clock,
  Hotel,
  MapPinned,
  Ticket,
  Van,
} from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState("tour");

  const tabs = [
    {
      title: "tour",
      icon: MapPinned,
      searchItems: [
        {
          title: "destination",
          icon: MapPinned,
          list: ["Accra", "Kumasi", "Takoradi"],
        },
        {
          title: "tour type",
          icon: MapPinned,
          list: ["Accra", "Kumasi", "Takoradi"],
        },
        {
          title: "when",
          icon: MapPinned,
          list: ["Accra", "Kumasi", "Takoradi"],
        },
        {
          title: "tour duration",
          icon: MapPinned,
          list: ["Accra", "Kumasi", "Takoradi"],
        },
      ],
    },
    {
      title: "hotel",
      icon: Hotel,
      searchItems: [
        {
          title: "destination",
          icon: MapPinned,
          list: ["Accra", "Kumasi", "Takoradi"],
        },
        {
          title: "tour type",
          icon: MapPinned,
          list: ["Accra", "Kumasi", "Takoradi"],
        },
        {
          title: "when",
          icon: MapPinned,
          list: ["Accra", "Kumasi", "Takoradi"],
        },
        {
          title: "tour duration",
          icon: MapPinned,
          list: ["Accra", "Kumasi", "Takoradi"],
        },
      ],
    },
    {
      title: "visa",
      icon: Ticket,
      searchItems: [
        {
          title: "destination",
          icon: MapPinned,
          list: ["kumasi", "Kumasi", "Takoradi"],
        },
        {
          title: "tour type",
          icon: MapPinned,
          list: ["Accra", "Kumasi", "Takoradi"],
        },
        {
          title: "when",
          icon: Clock,
          list: ["Accra", "Kumasi", "Takoradi"],
        },
        {
          title: "tour duration",
          icon: MapPinned,
          list: ["Accra", "Kumasi", "Takoradi"],
        },
      ],
    },
  ];
  // const searchItems = [
  //   {
  //     title: "destination",
  //     icon: MapPinned,
  //     list: ["Accra", "Kumasi", "Takoradi"],
  //   },
  //   {
  //     title: "tour type",
  //     icon: MapPinned,
  //     list: ["Accra", "Kumasi", "Takoradi"],
  //   },
  //   {
  //     title: "when",
  //     icon: MapPinned,
  //     list: ["Accra", "Kumasi", "Takoradi"],
  //   },
  //   {
  //     title: "tour duration",
  //     icon: MapPinned,
  //     list: ["Accra", "Kumasi", "Takoradi"],
  //   },
  // ];

  return (
    <div className="hidden md:block w-full max-w-6xl mx-auto">
      <div className="max-w-[70%] mx-auto rounded-t-xl border border-white/70 border-b-0 grid grid-cols-3 ">
        {tabs.map((filter) => (
          <div
            onClick={() => setActiveTab(filter.title)}
            key={filter.title}
            className={`ilter_type flex px-2 py-4 border-r border-white/70 last-of-type:border-r-0 last-of-type:rounded-tr-xl first-of-type:rounded-tl-xl items-center cursor-pointer ease-in duration-300 justify-center gap-1 ${
              activeTab === filter.title
                ? "bg-primary"
                : "bg-none  hover:opacity-80 "
            }`}
          >
            <span>
              <filter.icon size={19} />
            </span>
            <p className="capitalize text-[.85rem] text-white">
              {filter.title}
            </p>
          </div>
        ))}
      </div>
      <div className="filter_options w-full grid grid-cols-9 rounded-4xl pl-7 border border-white/70">
        {activeTab === "tour" &&
          tabs[0].searchItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-2 py-3 col-span-2"
            >
              <span>
                <item.icon size={34} className="text-white" />
              </span>
              <div className="flex flex-col">
                <span className="text-[.75rem] capitalize text-white">
                  {item.title}
                </span>
                <select name="destinations" className="text-sm text-white">
                  <option value="default" defaultValue={"default"}>
                    --select--
                  </option>
                  {item.list.map((listItem) => (
                    <option value={listItem} key={listItem}>
                      {listItem}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}

        {activeTab === "hotel" &&
          tabs[1].searchItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-2 py-3 col-span-2"
            >
              <span>
                <item.icon size={34} className="text-white" />
              </span>
              <div className="flex flex-col">
                <span className="text-[.75rem] capitalize text-white">
                  {item.title}
                </span>
                <select name="destinations" className="text-sm text-white">
                  <option value="default" defaultValue={"default"}>
                    --select--
                  </option>
                  {item.list.map((listItem) => (
                    <option value={listItem}>{listItem}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}

        {activeTab === "visa" &&
          tabs[2].searchItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-2 py-3 col-span-2"
            >
              <span>
                <item.icon size={34} className="text-white" />
              </span>
              <div className="flex flex-col">
                <span className="text-[.75rem] capitalize text-white">
                  {item.title}
                </span>
                <select name="destinations" className="text-sm text-white">
                  <option value="default" defaultValue={"default"}>
                    --select--
                  </option>
                  {item.list.map((listItem) => (
                    <option value={listItem}>{listItem}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}

        <button className="bg-white rounded-r-4xl">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
