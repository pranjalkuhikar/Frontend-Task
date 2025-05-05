import { CirclePlus, Trash2 } from "lucide-react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="font-[Mona_Sans] flex gap-10 h-screen w-screen">
        <Navbar />
        <div className="h-full w-0.5 bg-gray-400"></div>
        <div className="p-10 w-full h-full flex flex-col gap-10">
          <h1 className="text-4xl font-semibold">Todo List</h1>
          <div className="h-0.5 w-full bg-gray-400"></div>
          <div>
            <div className="flex items-center gap-3 px-5 py-2 text-zinc-50 bg-blue-500 w-fit  rounded-4xl cursor-pointer active:scale-95 hover:bg-blue-600">
              <CirclePlus />
              Add Task
            </div>
          </div>
          <div>
            <div className="flex justify-between border-[1px] border-gray-400 px-5 py-5 rounded-xl">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="task-checkbox"
                  className="w-5 h-5 accent-blue-500 rounded cursor-pointer"
                />
                <label htmlFor="task-checkbox" className="cursor-pointer">
                  Finding user onboarding
                </label>
              </div>
              <div className="cursor-pointer px-5 py-2 active:scale-95">
                <Trash2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
