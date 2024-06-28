'use client';

import React, { useEffect, useState } from 'react';
import api from '../services/api';

interface Task {
  id: string;
  name: string;
  projectId: string;
  assignedTo: string;
  status: string;
  startDate: string;
  dueDate: string;
}

const TaskDetails: React.FC<{ taskId: string }> = ({ taskId }) => {
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await api.get<Task>(`/tasks/${taskId}`);
        setTask(response.data);
      } catch (error) {
        console.error('Errore durante il recupero dell\'attività:', error);
      }
    };
    fetchTask();
  }, [taskId]);

  return (
    <div>
      <h2>Dettagli dell'Attività</h2>
      {task ? (
        <div>
          <h3>{task.name}</h3>
          <p>Assegnato a: {task.assignedTo}</p>
          <p>Stato: {task.status}</p>
          <p>Data di inizio: {task.startDate}</p>
          <p>Data di scadenza: {task.dueDate}</p>
        </div>
      ) : (
        <p>Caricamento...</p>
      )}
    </div>
  );
};

export default TaskDetails;
