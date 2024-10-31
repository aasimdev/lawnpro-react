import React, { ReactNode } from 'react';
import SideBar from './SideBar';
import MenuBar from './MenuBar';

interface MainLayoutProps {
  children: ReactNode;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="h-screen">
      <SideBar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div
        className={`transition-all duration-300 m-0 bg-[#F5F7FA] mainpage h-full ${
          sidebarOpen ? 'sm:ml-72' : 'sm:ml-16'
        }`}
      >
        <MenuBar open={sidebarOpen} setOpen={setSidebarOpen} />

        {children}
      </div>
    </div>
  );
};

export default MainLayout;
