import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Project {
  id: string;
  name: string;
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get<Project[]>('/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Errore nel recupero dei progetti:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Progetti</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="border-b p-2">{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
