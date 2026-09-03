import { useState, useEffect } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [items, setItems] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setItems([...items, task]);
      setTask('');
    }
  };

  const deleteTask = (indexToDelete) => {
    setItems(items.filter((_, index) => index !== indexToDelete));
  };

  useEffect(() => {
    document.title = `Tasks (${items.length})`;
  }, [items]);

  return (
    <div>
      <h1>My Tasks</h1>

      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;