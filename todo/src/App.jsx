import React, { useState, useEffect } from "react";

const App = () => {
  const [formValue, setFormValue] = useState({ task: "" });
  const [data, setData] = useState([]);
  const [complete, setComplete] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("tasks")) || [];
    const storedComplete = JSON.parse(localStorage.getItem("complete")) || [];
    setData(storedData);
    setComplete(storedComplete);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
    localStorage.setItem("complete", JSON.stringify(complete));
  }, [data, complete]);

  const handlerChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (formValue.task.trim() === "") return;
    setData([...data, formValue]);
    setComplete([...complete, false]);
    setFormValue({ task: "" });
  };

  const HandlerComplete = (idx) => {
    setComplete((prev) =>
      prev.map((status, index) => (index === idx ? !status : status))
    );
  };

  return (
    <>
      <div>
        <form onSubmit={handlerSubmit}>
          <input
            type="text"
            placeholder="Enter the task"
            name="task"
            value={formValue.task}
            onChange={handlerChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        {data.map((item, idx) => (
          <div key={idx} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={complete[idx] || false}
              onChange={() => HandlerComplete(idx)}
            />
            <div
              style={{
                marginLeft: "10px",
                textDecoration: complete[idx] ? "line-through" : "none",
              }}
            >
              {item.task}
            </div>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => {
                setData(data.filter((_, index) => index !== idx));
                setComplete(complete.filter((_, index) => index !== idx));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
