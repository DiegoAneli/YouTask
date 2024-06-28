'use client';

import React, { useState } from 'react';
import axios from 'axios';

const DocumentUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        await axios.post('/api/documents', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('File uploaded successfully');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Carica Documento</h2>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      {selectedFile && (
        <div>
          <p>File selezionato: {selectedFile.name}</p>
          <button onClick={handleUpload} className="bg-blue-500 text-white p-2 rounded">
            Carica
          </button>
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;
