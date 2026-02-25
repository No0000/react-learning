import { useState } from "react";
import FilterButton from "./FilterButton";

const initialTasks = [
  { id: 1, text: "Read describing the UI", done: true },
  { id: 2, text: "Practice rendering lists", done: false },
  { id: 3, text: "Make components pure", done: false },
];

export default function DashboardApp() {
  return (
    <div style={{ padding: 20 }}>
      <Dashboard />
    </div>
  );
}

function Dashboard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <Header title="Dashboard" />
      <Stats tasks={tasks} />
      <TaskSection
        tasks={tasks}
        setTasks={setTasks}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

function Header({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <OnlineBadge isOnline={true} />
    </>
  );
}

function OnlineBadge({ isOnline }) {
  return (
    <span>
      {isOnline ? "🟢 Online" : "⚪️ Offline"}
    </span>
  );
}

function Stats({ tasks }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      <li>Total : {tasks.length}</li>
      <li>Active : {tasks.filter(task => !task.done).length}</li>
      <li>Done : {tasks.filter(task => task.done).length}</li>
    </ul>
  );
}

function TaskSection({ tasks, setTasks, filter, setFilter }) {
  const [newText, setNewText] = useState("");

  return (
    <div>
      <TaskForm
        tasks={tasks}
        setTasks={setTasks}
        newText={newText}
        setNewText={setNewText}
      />

      <FilterButton filter={filter} setFilter={setFilter} />
      <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />
    </div>
  );
}

function TaskForm({ tasks, setTasks, newText, setNewText }) {
  const maxId =
    tasks.length === 0 ? 0 : Math.max(...tasks.map(task => task.id));

  function handleAdd() {
    if (!newText.trim()) {
      alert("テキスト欄が空白です");
      alert(newText.trim());
      return;
    }

    setTasks([
      ...tasks,
      { id: maxId + 1, text: newText.trim(), done: false }
    ]);

    setNewText("");
  }

  return (
    <>
      <h3>Add Task</h3>
      <input
        value={newText}
        onChange={e => setNewText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

function TaskList({ tasks, setTasks, filter }) {
  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function handleToggle(id) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  }

  const visibleTasks = tasks.filter(task => {
    if (filter === "active") return !task.done;
    if (filter === "done") return task.done;
    return true;
  });

  return (
    <>
      <h3>{filter.toUpperCase()} Tasks</h3>
      <ul>
        {visibleTasks.map(task => (
          <li key={task.id}>
            {task.text}
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => handleToggle(task.id)}
            />
            <button onClick={() => handleDelete(task.id)}>
              Delete
            </button>
            （id:{task.id}）
          </li>
        ))}
      </ul>
    </>
  );
}