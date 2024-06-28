'use client';

import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Project {
  id: string;
  name: string;
  description?: string;
}

const ProjectDetails: React.FC<{ projectId: string }> = ({ projectId }) => {
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await api.get<Project>(`/projects/${projectId}`);
        setProject(response.data);
      } catch (error) {
        console.error('Errore durante il recupero del progetto:', error);
      }
    };
    fetchProject();
  }, [projectId]);

  return (
    <div>
      <h2>Dettagli del Progetto</h2>
      {project ? (
        <div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  );
};

export default ProjectDetails;
