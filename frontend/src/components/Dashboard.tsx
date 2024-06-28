'use client';

import React, { useEffect, useState } from 'react';
import api from '../services/api';
import AddProject from './AddProject';
import AddTask from './AddTask';
import Card from './Card';

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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await api.get<Project[]>('/projects');
        const tasksResponse = await api.get<Task[]>('/tasks');
        setProjects(projectsResponse.data);
        setTasks(tasksResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">Dashboard</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="flex flex-wrap justify-center">
        <Card title="Aggiungi Progetto">
          <AddProject />
        </Card>
        <Card title="Aggiungi Attività">
          <AddTask />
        </Card>
      </div>
      <div className="flex flex-wrap justify-center">
        <Card title="Progetti">
          <ul>
            {Array.isArray(projects) ? (
              projects.map((project) => (
                <li key={project.id}>
                  {project.name}
                </li>
              ))
            ) : (
              <li>Nessun progetto disponibile</li>
            )}
          </ul>
        </Card>
        <Card title="Attività Recenti">
          <ul>
            {Array.isArray(tasks) ? (
              tasks.map((task) => (
                <li key={task.id}>
                  {task.name}
                </li>
              ))
            ) : (
              <li>Nessuna attività disponibile</li>
            )}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
