import React from "react";

const TaskCard = ({ task, index, onDeleteTask }) => {
  return (
    <div>
      <p className="text-gray-50 text-lg">{task}</p>
      <button
        className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-500
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
        onClick={() => onDeleteTask(index)}
      >
        Supprimer
      </button>
    </div>
  );
};

export default TaskCard;
