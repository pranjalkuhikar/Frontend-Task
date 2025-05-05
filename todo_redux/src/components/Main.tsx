import { CirclePlus, Trash2 } from "lucide-react";
import Navbar from "./Navbar";
import { useState } from "react";
import { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../features/todoSlice";

const Main = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }

  return (
    <div className="font-[Mona_Sans] flex gap-10 h-screen w-screen">
      <Navbar />
      <div className="h-full w-0.5 bg-gray-400"></div>
      <div className="p-10 w-full h-full flex flex-col gap-10">
        <h1 className="text-4xl font-semibold">Todo List</h1>
        <div className="h-0.5 w-full bg-gray-400"></div>
        <div className="flex gap-10">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new todo"
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div
            onClick={handleAddTodo}
            className="flex items-center gap-3 px-5 py-2 text-zinc-50 bg-blue-500 w-fit  rounded-4xl cursor-pointer active:scale-95 hover:bg-blue-600"
          >
            <CirclePlus />
            Add Task
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {todos.map((todo: Todo) => (
            <div className="flex justify-between border-[1px] border-gray-400 px-5 py-5 rounded-xl">
              <div
                className="flex items-center gap-3"
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                <input
                  type="checkbox"
                  id="task-checkbox"
                  className="w-5 h-5 accent-blue-500 rounded cursor-pointer"
                />
                <label htmlFor="task-checkbox" className="cursor-pointer">
                  {todo.text}
                </label>
              </div>
              <div
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="cursor-pointer px-5 py-2 active:scale-95"
              >
                <Trash2 />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
