import { useState } from "react";
const NewTask = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  const handleAddTaskClick = () => {
    if (enteredTask.trim() === "") {
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        type="text"
        value={enteredTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleAddTaskClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};
export default NewTask;
