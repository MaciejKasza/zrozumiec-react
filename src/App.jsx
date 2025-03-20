import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Form from "./components/form/Form";
import ListItem from "./components/listItem/ListItem";

const initialTasks = [
  { id: 1, label: "Wyrzuciś śmieci", done: false },
  { id: 2, label: "Zrobic zakupy śmieci", done: true },
];

function App() {
  const [tasksList, setTasksList] = useState(initialTasks);
  const [showNewTaskForm, setShowNewTaskForm] = useState(false);

  const onFormSubmit = (task) => {
    const maxID = Math.max(...tasksList.map((i) => i.id));

    setTasksList((prev) => [
      {
        id: maxID + 1,
        label: task,
        done: false,
      },
      ...prev,
    ]);
  };

  const onTaskDone = (id) => {
    setTasksList((prev) =>
      prev.map((item) => {
        if (id === item.id) return { ...item, done: true };
        return item;
      })
    );
  };

  const onTaskDelete = (id) => {
    setTasksList((prev) => prev.filter((item) => id !== item.id));
  };

  const getSubHeader = (taskCount) => {
    let result = taskCount + " ";
    switch (true) {
      case taskCount === 0:
        return result + "zadań";
      case taskCount === 1:
        return result + "zadanie";
      case taskCount === 2:
        return result + "zadania";
      case taskCount <= 4:
        return result + "zadania";
      case taskCount > 4:
        return result + "zadań";
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className="info">
          <h1>Do zrobienia</h1>
          <h2>{getSubHeader(tasksList.length)} </h2>
        </div>
        {!showNewTaskForm && (
          <button
            className={styles.button}
            onClick={() => setShowNewTaskForm(true)}
          >
            +
          </button>
        )}
      </header>
      {showNewTaskForm && (
        <Form
          onSubmit={onFormSubmit}
          onClose={() => setShowNewTaskForm(false)}
        />
      )}
      <ul>
        {tasksList.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            label={item.label}
            done={item.done}
            onDone={onTaskDone}
            onDelete={onTaskDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
