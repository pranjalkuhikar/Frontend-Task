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

  const { bgColor, textColor } = randomColor();

  return (
    <>
      <div className="flex flex-col gap-5 h-screen w-screen p-20 font-[Helvetica_Now_Display]">
        <div className="text-4xl tracking-tighter">To-Do</div>
        <div className="bg-gray-300 w-full h-0.5 rounded-full"></div>
        <div className="px-5 py-2 bg-blue-600 text-zinc-100 font-semibold rounded-md max-w-fit cursor-pointer active:scale-95 hover:bg-blue-500">
          Add to Task
        </div>
        <div className="border border-gray-300 rounded-md px-5 py-2">
          <div className="flex gap-4">
            <div>
              <input type="checkbox" name="" id="" />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="font-bold text-lg">Cricket</div>
              <div className="text-gray-500 font-semibold text-sm">
                📅 Jan 8, 2024
              </div>
              <div
                style={{
                  backgroundColor: bgColor,
                  color: textColor,
                }}
                className="text-sm p-1 rounded-full flex items-center justify-center gap-2"
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
      </div>
    </>
  );
};

export default App;
