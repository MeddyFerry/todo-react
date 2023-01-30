import React, { useState } from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import CardLists from "./component/CardLists/CardList";
import FormTodo from "./component/FormTodo/FormTodo";

//import Container from "./component/Container/Container";
function App() {
  const useStateValue = useState([]);
  const tasks = useStateValue[0];
  const setTasks = useStateValue[1];
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };
  return (
    <div className="h-[100vh] bg-slate-900 flex-col">
      <Header />
      <CardLists tasks={tasks} onDeleteTask={handleDeleteTask} />
      <FormTodo onAddTask={handleAddTask} />
      <Footer />
    </div>
  );
}

export default App;
