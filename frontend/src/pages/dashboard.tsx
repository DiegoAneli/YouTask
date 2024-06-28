'use client';

import React from 'react';
import Chat from '../components/Chat';
import DocumentUpload from '../components/DocumentUpload';
import VideoConference from '../components/VideoConference';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Dashboard</h1>
      <div className="flex flex-wrap justify-center">
        <Chat />
        <DocumentUpload />
        <VideoConference />
      </div>
    </div>
  );
};

export default Dashboard;
