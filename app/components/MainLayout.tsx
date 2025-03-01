'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import { ResumeProvider } from '../context/ResumeContext';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <ResumeProvider>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className={`flex-1 p-8 transition-all duration-200 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          {children}
        </main>
      </div>
    </ResumeProvider>
  );
}
