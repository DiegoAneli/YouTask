import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Tasks: React.FC = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Your Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
