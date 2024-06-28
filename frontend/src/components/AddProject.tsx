'use client';

import React, { useState } from 'react';
import api from '../services/api';

const AddProject: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post('/projects', { name, description });
      setMessage('Progetto aggiunto con successo');
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Errore durante l\'aggiunta del progetto:', error);
      setMessage('Errore durante l\'aggiunta del progetto');
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Aggiungi Progetto</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full mb-4"
          type="text"
          placeholder="Nome del progetto"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4"
          type="text"
          placeholder="Descrizione"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">Aggiungi</button>
      </form>
    </div>
  );
};

export default AddProject;
