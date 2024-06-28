import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../context/AuthContext';

const Projects: React.FC = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  return (
    <ProtectedRoute>
      <div>
        <h1>Your Projects</h1>
        <ul>
          {projects.map((project) => (
            <li key={project._id}>{project.name}</li>
          ))}
        </ul>
      </div>
    </ProtectedRoute>
  );
};

export default Projects;
