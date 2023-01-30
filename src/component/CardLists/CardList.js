import React from "react";
import TaskCard from "../Tascard/Tascard";

const CardLists = ({ tasks, onDeleteTask }) => {
  return (
    <div className="w-full p-6 m-auto bg-slate-800 rounded-md shadow-xl shadow-gray-50/40 ring-2 ring-indigo-400 lg:max-w-xl">
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          index={index}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};
export default CardLists;
