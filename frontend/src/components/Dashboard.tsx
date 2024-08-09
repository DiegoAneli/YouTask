'use client';

import React, { useEffect, useState } from 'react';
import api from '../services/api';
import AddProject from './AddProject';
import AddTask from './AddTask';
import Card from './Card';
import Chat from './Chat';
import DocumentUpload from './DocumentUpload';
import VideoConference from './VideoConference';

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsResponse, tasksResponse] = await Promise.all([
          api.get<Project[]>('/projects'),
          api.get<Task[]>('/tasks')
        ]);
        setProjects(projectsResponse.data);
        setTasks(tasksResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Errore nel recupero dei dati');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="flex items-center justify-center h-20 border-b border-gray-700">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-4">
              <a href="#add-project" className="hover:bg-gray-700 p-2 block rounded">Aggiungi Progetto</a>
            </li>
            <li className="mb-4">
              <a href="#add-task" className="hover:bg-gray-700 p-2 block rounded">Aggiungi Attività</a>
            </li>
            <li className="mb-4">
              <a href="#projects" className="hover:bg-gray-700 p-2 block rounded">Progetti</a>
            </li>
            <li className="mb-4">
              <a href="#tasks" className="hover:bg-gray-700 p-2 block rounded">Attività Recenti</a>
            </li>
            <li className="mb-4">
              <a href="#chat" className="hover:bg-gray-700 p-2 block rounded">Chat</a>
            </li>
            <li className="mb-4">
              <a href="#upload" className="hover:bg-gray-700 p-2 block rounded">Carica Documento</a>
            </li>
            <li className="mb-4">
              <a href="#video" className="hover:bg-gray-700 p-2 block rounded">Videoconferenza</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <h1 className="text-4xl font-bold text-center my-8">Dashboard</h1>
        {loading ? (
          <p className="text-center">Caricamento in corso...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <section id="add-project">
              <Card title="Aggiungi Progetto">
                <AddProject />
              </Card>
            </section>
            <section id="add-task">
              <Card title="Aggiungi Attività">
                <AddTask />
              </Card>
            </section>
            <section id="projects">
              <Card title="Progetti">
                <ul>
                  {projects.length > 0 ? (
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
            </section>
            <section id="tasks">
              <Card title="Attivita Recenti">
                <ul>
                  {tasks.length > 0 ? (
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
            </section>
            <section id="chat">
              <Card title="Chat">
                <Chat />
              </Card>
            </section>
            <section id="upload">
              <Card title="Carica Documento">
                <DocumentUpload />
              </Card>
            </section>
            <section id="video">
              <Card title="Videoconferenza">
                <VideoConference />
              </Card>
            </section>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
