import React from "react";
import TaskCard from "../TaskCard/Tascard";

const CardLists = ({ tasks, onDeleteTask }) => {
  return (
    <div className="w-full p-6 m-auto bg-slate-800 rounded-md shadow-xl shadow-gray-50/40 ring-2 ring-indigo-400 lg:max-w-xl">
      <h1 className=" text-center tpt-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-purple-400 font-bold text-lg ">
        LISTE
      </h1>{" "}
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
