import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  // State to manage tasks
  const [tasks, setTasks] = useState(TASKS);

  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle task deletion
  function handleDeleteTask(taskToDelete) {
    setTasks(tasks.filter((task) => task.text !== taskToDelete.text));
  }

  // Function to handle category selection
  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  // Function to handle form submission (adding new task)
  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Filter tasks based on selected category
  const tasksToDisplay =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
