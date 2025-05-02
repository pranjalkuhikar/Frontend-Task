import { CalendarDays, Pencil, Plus, Search, Trash2 } from "lucide-react";

const getCurrentDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date().toLocaleDateString(undefined, options);
};

const App = () => {
  return (
    <div className="font-[mona_sans] flex gap-10">
      <div className="flex flex-col  p-6  items-center gap-10 ">
        <h1 className="text-lg font-semibold tracking-tighter">Docket</h1>
        <p className="p-3 bg-[#121212] text-[#fff] rounded-full ">
          <Plus />
        </p>
      </div>
      <div className="h-screen w-0.5 bg-gray-400"></div>
      <div className="p-6 flex flex-col gap-12">
        <div className="flex items-center text-gray-400">
          <Search />
          <input
            type="text"
            placeholder="Search"
            className="px-5 py-2 outline-none"
          />
        </div>
        <div className="text-6xl tracking-tighter font-semibold">Notes</div>
        <div className="flex flex-wrap gap-5">
          <div className="px-6 py-3 rounded-2xl bg-green-400 flex flex-col justify-between min-h-40 w-80">
            <div className="text-md ">Hello How are you lorem500</div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <CalendarDays /> {getCurrentDate()}
              </div>
              <div className="p-3 cursor-pointer hover:bg-red-600 bg-red-500 rounded-full text-[#fff]">
                <Trash2 />
              </div>
              <div className="p-3 cursor-pointer hover:bg-[#1f1e1e] bg-[#000000] rounded-full text-[#fff]">
                <Pencil />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
