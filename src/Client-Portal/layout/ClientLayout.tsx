import React, { ReactNode } from 'react';
import { Header } from './Header';
import ClientSidebar from './ClientSidebar';

interface ClientLayoutProps {
  children: ReactNode;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children, sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="h-screen">
      <Header />
      <ClientSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div
        className={`transition-all duration-300 m-0 bg-[#F5F7FA] mainpage h-full ${
          sidebarOpen ? 'sm:ml-72' : 'sm:ml-16'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default ClientLayout;
