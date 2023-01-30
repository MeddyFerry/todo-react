// import React, { useState } from "react";
// import CardLists from "../CardLists/CardList";
// import FormTodo from "../FormTodo/FormTodo";

// function Container() {
//   const useStateValue = useState([]);
//   const tasks = useStateValue[0];
//   const setTasks = useStateValue[1];
//   const handleAddTask = (task) => {
//     setTasks([...tasks, task]);
//   };

//   const handleDeleteTask = (index) => {
//     setTasks(tasks.filter((task, i) => i !== index));
//   };
//   return (
//     <div className="">
//       <CardLists tasks={tasks} onDeleteTask={handleDeleteTask} />
//       <FormTodo onAddTask={handleAddTask} />
//     </div>
//   );
// }

// export default Container;
