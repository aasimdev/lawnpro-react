import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from '@mui/material';
import theme from './config/ThemeConfig';
import Customers from './pages/customer/Customers';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './layouts/MainLayout';
import CustomerEditor from './pages/customer/CustomerEditor';
import Properties from './pages/property/Properties';
import { Pictures } from './pages/client-portal/Pictures';
import Reviews from './pages/review/Reviews';
import ManageCredit from './pages/customer/ManageCredit';
import ClientLayout from './layouts/ClientLayout';
import { ClientDashboard } from './pages/client-portal/ClientDashboard';
import { Invoices } from './pages/client-portal/Invoices';
import { Estimates } from './pages/client-portal/Estimates';
import { Documents } from './pages/client-portal/Documents';
import { WorkRequest } from './pages/client-portal/WorkRequest';
import { ViewInvoice } from './components/client-portal/finance/ViewInvoice';
import { ViewEstimate } from './components/client-portal/finance/ViewEstimate';
import { ViewDocument } from './components/client-portal/finance/ViewDocument';
import { Payments } from './pages/client-portal/Payments';
import Employees from './pages/employee/Employees';
import Crews from './pages/crew/Crews';
import Vendors from './pages/vendor/Vendors';
import { RateUs } from './pages/client-portal/RateUs';
import { MyProfile } from './pages/client-portal/MyProfile';

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
              <Route path="/finance/documents" element={<Documents />} />
              <Route path="/finance/payments" element={<Payments />} />
              <Route path="/pictures" element={<Pictures />} />
              <Route path="/work-request" element={<WorkRequest />} />
              <Route path="/rate-us" element={<RateUs />} />
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/finance/invoices/invoice-details" element={<ViewInvoice />} />
              <Route path="/finance/estimates/estimate-details" element={<ViewEstimate />} />
              <Route path="/finance/documents/document-details" element={<ViewDocument />} />
              {/* Add more client routes here */}
            </Routes>
          </ClientLayout>
        ) : isMainLayout ? (
          <MainLayout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/customers/add" element={<CustomerEditor isNew={true} />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/customers/manage-cards" element={<ManageCredit />} />
              <Route path="/resource/employees" element={<Employees />} />
              <Route path="/resource/crews" element={<Crews />} />
              <Route path="/resource/vendors-suppliers" element={<Vendors />} />
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
