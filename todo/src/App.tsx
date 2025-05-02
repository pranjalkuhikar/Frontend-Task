import { CirclePlus, Trash2 } from "lucide-react";
import { ChangeEvent, useState } from "react";

const App = () => {
  const randomColor = () => {
    const r = Math.floor(Math.random() * 156) + 200;
    const g = Math.floor(Math.random() * 156) + 200;
    const b = Math.floor(Math.random() * 156) + 200;

    return {
      bgColor: `rgb(${r}, ${g}, ${b})`,
      textColor: `rgb(${Math.max(r - 150, 0)}, ${Math.max(
        g - 150,
        0
      )}, ${Math.max(b - 150, 0)})`,
    };
  };

  const date = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return today.toLocaleDateString("en-US", options); // Example: "May 2, 2025"
  };

  const { bgColor, textColor } = randomColor();
  const [task, setTask] = useState<{ task: string }>({ task: "" });
  const [data, setData] = useState<{ task: string }[]>([]);
  const [complete, setComplete] = useState<boolean[]>([]);

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handlerClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    if (task.task.trim() !== "") {
      setData([...data, { ...task }]);
      setTask({ task: "" });
    }
  };

  const handlerComplete = (idx: number) => {
    setComplete((prev) => {
      const update = [...prev];
      update[idx] = !update[idx];
      return update;
    });
  };

  const handlerDelete = (idx: number) => {
    setData(data.filter((_, id) => id != idx));
  };

  return (
    <>
      <div className="flex flex-col gap-5 h-screen w-screen p-20 font-[Helvetica_Now_Display]">
        <div className="text-4xl tracking-tighter">To-Do</div>
        <div className="bg-gray-300 w-full h-0.5 rounded-full"></div>
        <div onClick={handlerClick} className="flex items-center gap-5">
          <input
            type="text"
            placeholder="Add a new task..."
            name="task"
            value={task.task}
            onChange={handlerChange}
            className="border-b-2 border-gray-300 outline-none "
          />
          <button className="flex gap-2 px-5 py-2 bg-blue-600 text-zinc-100 font-semibold rounded-md max-w-fit cursor-pointer active:scale-95 hover:bg-blue-500">
            <CirclePlus /> Add Task
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-md px-5 py-2 shadow-2xs"
            >
              <div className="flex gap-4 justify-between">
                <div
                  className={`flex items-start gap-4 ${
                    complete[idx] ? "line-through text-gray-500" : ""
                  } `}
                >
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={complete[idx] || false}
                    onChange={() => handlerComplete(idx)}
                    className="mt-1.5 h-5 w-5 text-green-600 focus:ring-green-500"
                  />
                  <div className="flex flex-col gap-1.5">
                    <div className="font-bold text-lg">{item.task}</div>
                    <div className="text-gray-500 font-semibold text-sm">
                      📅 {date()}
                    </div>
                    <div className="flex items-center gap-4">
                      <div
                        style={{
                          backgroundColor: bgColor,
                          color: textColor,
                        }}
                        className="text-sm px-5 py-1 rounded-full flex items-center justify-center gap-2"
                      >
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor: textColor,
                            boxShadow: `0 0 8px ${textColor}, 0 0 12px ${textColor}`,
                          }}
                        ></span>
                        Project
                      </div>
                      <div
                        style={{
                          backgroundColor: bgColor,
                          color: textColor,
                        }}
                        className="text-sm px-5 py-1 rounded-full flex items-center justify-center gap-2"
                      >
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor: textColor,
                            boxShadow: `0 0 8px ${textColor}, 0 0 12px ${textColor}`,
                          }}
                        ></span>
                        Project
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => handlerDelete(idx)}
                  className="hover:text-red-600 hover:rounded-full cursor-pointer active:scale-95 active:text-red-500"
                >
                  <Trash2 />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
