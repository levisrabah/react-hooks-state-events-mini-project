import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Header from "./Header";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const filteredTasks =
    category === "All" ? tasks : tasks.filter((task) => task.category === category);

  const handleDeleteTask = (taskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(taskIndex, 1);
    setTasks(updatedTasks);
  };

  const handleFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <h2>My tasks</h2>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleFormSubmit} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
