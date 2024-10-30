import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from '@mui/material';
import theme from './config/ThemeConfig';
import MenuBar from './layouts/MenuBar';
import SideBar from './layouts/SideBar';
import clsx from 'clsx';
import Customers from './pages/Customer/Customers';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import { ClientDashboard } from './Client Portal/pages/ClientDashboard';
import { Header } from './Client Portal/layout/Header';
import ClientSidebar from './Client Portal/layout/ClientSidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  // Check if the current path is /login
  const isLoginPage = location.pathname.startsWith('/login');
  const isClientPage = location.pathname.startsWith('/client-dasboard');

  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen mainpage">
        {isClientPage && <Header />}

        {isClientPage && <ClientSidebar open={sidebarOpen} setOpen={setSidebarOpen} />}
        {!isLoginPage && !isClientPage && <SideBar open={sidebarOpen} setOpen={setSidebarOpen} />}

        <div
          style={{
            maxWidth: `calc(100vw - ${isLoginPage ? '0px' : sidebarOpen ? '72px' : '16px'})`,
          }}
          className={clsx(
            'transition-all duration-300 m-0 bg-[#F5F7FA] mainpage h-full',
            isLoginPage ? 'sm:m-0' : sidebarOpen ? 'sm:ml-72' : 'sm:ml-16',
          )}
        >
          {!isLoginPage && !isClientPage && <MenuBar open={sidebarOpen} setOpen={setSidebarOpen} />}
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/forget" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/client-dasboard" element={<ClientDashboard />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
