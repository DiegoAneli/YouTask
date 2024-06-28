'use client';

import React, { useState } from 'react';
import api from '../services/api';

const AddTask: React.FC = () => {
  const [name, setName] = useState('');
  const [projectId, setProjectId] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/tasks', {
        name,
        projectId,
        assignedTo,
        status,
        startDate,
        dueDate,
      });
      setMessage('Attività aggiunta con successo');
      setName('');
      setProjectId('');
      setAssignedTo('');
      setStatus('');
      setStartDate('');
      setDueDate('');
    } catch (error) {
      console.error('Errore durante l\'aggiunta dell\'attività:', error);
      setMessage('Errore durante l\'aggiunta dell\'attività');
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Aggiungi Attività</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full mb-4"
          type="text"
          placeholder="Nome dell'attività"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4"
          type="text"
          placeholder="ID del progetto"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4"
          type="text"
          placeholder="Assegnato a"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4"
          type="text"
          placeholder="Stato"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4"
          type="date"
          placeholder="Data di inizio"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4"
          type="date"
          placeholder="Data di scadenza"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">Aggiungi</button>
      </form>
    </div>
  );
};

export default AddTask;
