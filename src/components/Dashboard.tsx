// src/components/Dashboard.tsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Project {
  id: string;
  name: string;
}

interface Task {
  id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectsResponse = await api.get<Project[]>('/projects');
      const tasksResponse = await api.get<Task[]>('/tasks');
      setProjects(projectsResponse.data);
      setTasks(tasksResponse.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Progetti</h2>
        <ul>
          {projects.map(project => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Attività Recenti</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
