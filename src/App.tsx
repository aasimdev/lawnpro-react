import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from '@mui/material';
import theme from './config/ThemeConfig';
import Customers from './pages/Customer/Customers';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import { ClientDashboard } from './Client-Portal/pages/ClientDashboard';
import ClientLayout from './Client-Portal/layout/ClientLayout';
import { Invoices } from './Client-Portal/pages/Invoices';
import { ViewInvoice } from './Client-Portal/components/finance/invoice/ViewInvoice';
import { Estimates } from './Client-Portal/pages/Estimates';
import { ViewEstimate } from './Client-Portal/components/finance/estimate/ViewEstimate';
import MainLayout from './layouts/MainLayout';
import CustomerEditor from './pages/Customer/CustomerEditor';
import { Payments } from './Client-Portal/pages/Payments';

const clientRoutes = [
  '/client-dashboard',
  '/finance/invoices',
  '/finance/invoices/invoice-details',
  '/finance/estimates',
  '/finance/estimates/estimate-details',
  '/finance/payments',
]; // Add more client routes as needed

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
              <Route path="/finance/invoices" element={<Invoices />} />
              <Route path="/finance/estimates" element={<Estimates />} />
              <Route path="/finance/payments" element={<Payments />} />
              <Route path="/finance/invoices/invoice-details" element={<ViewInvoice />} />
              <Route path="/finance/estimates/estimate-details" element={<ViewEstimate />} />
              {/* Add more client routes here */}
            </Routes>
          </ClientLayout>
        ) : isMainLayout ? (
          <MainLayout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/customers/add" element={<CustomerEditor isNew={true} />} />
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
