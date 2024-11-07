import React, { useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import SecureRoutes from './routes/SecureRoutes'
import AuthRoutes from './routes/AuthRoutes'
import ClientRoutes from './routes/ClientRoutes'
import { ThemeProvider } from '@mui/material';
import theme from './config/ThemeConfig';
import ClientLayout from './layouts/ClientLayout';
import MainLayout from './layouts/MainLayout';

const clientRoutes = [
  '/client-dashboard',
  '/finance/invoices',
  '/finance/invoices/invoice-details',
  '/finance/estimates',
  '/finance/estimates/estimate-details',
  '/finance/payments',
  '/finance/documents',
  '/finance/documents/document-details',
  '/pictures',
  '/work-request',
  '/rate-us',
  '/profile',
]; // Add more client routes as needed

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const location = useLocation();

  // Check if the current path is for the login page
  const isLoginPage = location.pathname.startsWith('/login');

  // Check if the current path matches any of the client routes
  const isClientPage = clientRoutes.some((route) => location.pathname.startsWith(route));

  // Layout conditionals
  const isSecureLayout = !isLoginPage && !isClientPage;

  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen mainpage">
        {/* Render appropriate layout based on the current page */}
        {isClientPage ? (
          <ClientLayout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <ClientRoutes />
          </ClientLayout>
        ) : isSecureLayout ? (
          <MainLayout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <SecureRoutes />
          </MainLayout>
        ) : (
          <AuthRoutes />
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
