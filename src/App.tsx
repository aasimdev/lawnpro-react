import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from '@mui/material';
import theme from './config/ThemeConfig';
import MainLayout from './layouts/MainLayout';
import Customers from './pages/Customer/Customers';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import { ClientDashboard } from './Client Portal/pages/ClientDashboard';
import ClientLayout from './Client Portal/layout/ClientLayout';

const clientRoutes = ['/client-dashboard']; // Add more client routes as needed

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const location = useLocation();

  // Check if the current path is for the login page
  const isLoginPage = location.pathname.startsWith('/login');

  // Check if the current path matches any of the client routes
  const isClientPage = clientRoutes.some((route) => location.pathname.startsWith(route));

  // Layout conditionals
  const isMainLayout = !isLoginPage && !isClientPage;

  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen mainpage">
        {/* Render appropriate layout based on the current page */}
        {isClientPage ? (
          <ClientLayout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <Routes>
              <Route path="/client-dashboard" element={<ClientDashboard />} />
              {/* Add more client routes here */}
            </Routes>
          </ClientLayout>
        ) : isMainLayout ? (
          <MainLayout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              {/* Add more main app routes here */}
            </Routes>
          </MainLayout>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/login/forget" element={<ForgotPassword />} />
          </Routes>
        )}
      </div>
    </ThemeProvider>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
