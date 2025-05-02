import { useEffect, useState } from "react";
import { CalendarDays, Pencil, Plus, Search, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const getCurrentDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date().toLocaleDateString(undefined, options);
};

const App = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [box, setBox] = useState<{ color: string; text: string }[]>([]);
  const [search, setSearch] = useState({ search: "" });
  const [filter, setFilter] = useState<{ color: string; text: string }[]>([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedBoxes = localStorage.getItem("boxes");
    if (savedBoxes) {
      setBox(JSON.parse(savedBoxes));
    }
  }, []);

  // Save data to localStorage whenever `box` changes
  useEffect(() => {
    if (box.length > 0) {
      localStorage.setItem("boxes", JSON.stringify(box));
    }
  }, [box]);

  // Update the filter state whenever the search input changes
  useEffect(() => {
    setFilter(
      box.filter((item) =>
        item.text.toLowerCase().includes(search.search.toLowerCase())
      )
    );
  }, [search, box]);

  const handlerDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const handlerBox = (color: string) => {
    setBox((prev) => [...prev, { color, text: "" }]);
  };

  const handleTextChange = (idx: number, newText: string) => {
    setBox((prev) =>
      prev.map((item, id) => (id === idx ? { ...item, text: newText } : item))
    );
  };

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlerDelete = (idx: number) => {
    const updatedBoxes = box.filter((_, id) => id !== idx);
    setBox(updatedBoxes);
    localStorage.setItem("boxes", JSON.stringify(updatedBoxes));
  };

  return (
    <div className="font-[mona_sans] flex gap-10">
      <div className="flex flex-col p-6 items-center gap-10">
        <h1 className="text-lg font-semibold tracking-tighter">Docket</h1>
        <div className="flex flex-col items-center gap-5">
          <div
            onClick={handlerDropDown}
            className="p-3 bg-[#121212] text-[#fff] cursor-pointer active:scale-95 hover:bg-zinc-800 rounded-full"
          >
            <Plus />
          </div>
          {isDropDown && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-4"
            >
              <div
                onClick={() => handlerBox("bg-red-300")}
                className="cursor-pointer h-5 w-5 bg-red-300 rounded-full"
              ></div>
              <div
                onClick={() => handlerBox("bg-green-300")}
                className="cursor-pointer h-5 w-5 bg-green-300 rounded-full"
              ></div>
              <div
                onClick={() => handlerBox("bg-purple-300")}
                className="cursor-pointer h-5 w-5 bg-purple-300 rounded-full"
              ></div>
              <div
                onClick={() => handlerBox("bg-yellow-300")}
                className="cursor-pointer h-5 w-5 bg-yellow-300 rounded-full"
              ></div>
              <div
                onClick={() => handlerBox("bg-blue-300")}
                className="cursor-pointer h-5 w-5 bg-blue-300 rounded-full"
              ></div>
            </motion.div>
          )}
        </div>
      </div>
      <div className="h-screen w-0.5 bg-gray-400"></div>
      <div className="p-6 flex flex-col gap-12">
        <div className="flex items-center text-gray-400">
          <Search />
          <input
            type="text"
            placeholder="Search"
            className="px-5 py-2 outline-none"
            name="search"
            value={search.search}
            onChange={handlerChange}
          />
        </div>
        <div className="text-6xl tracking-tighter font-semibold">Notes</div>
        <div className="flex flex-wrap gap-5">
          {filter.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              key={idx}
              className={`px-6 py-3 rounded-2xl ${item.color} flex flex-col justify-between min-h-40 w-80`}
            >
              <textarea
                className="text-md outline-none resize-none w-full h-24 p-3 rounded-lg"
                placeholder="Enter Your Notes"
                value={item.text}
                onChange={(e) => handleTextChange(idx, e.target.value)}
              ></textarea>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <CalendarDays /> {getCurrentDate()}
                </div>
                <div
                  onClick={() => handlerDelete(idx)}
                  className="p-3 cursor-pointer hover:bg-red-600 bg-red-500 rounded-full text-[#fff]"
                >
                  <Trash2 />
                </div>
                <div className="p-3 cursor-pointer hover:bg-[#1f1e1e] bg-[#000000] rounded-full text-[#fff]">
                  <Pencil />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
