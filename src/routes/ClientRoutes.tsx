import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ClientDashboard } from '../pages/client-portal/ClientDashboard';
import { Invoices } from '../pages/client-portal/Invoices';
import { Estimates } from '../pages/client-portal/Estimates';
import { Documents } from '../pages/client-portal/Documents';
import { WorkRequest } from '../pages/client-portal/WorkRequest';
import { ViewInvoice } from '../components/client-portal/finance/ViewInvoice';
import { ViewEstimate } from '../components/client-portal/finance/ViewEstimate';
import { ViewDocument } from '../components/client-portal/finance/ViewDocument';
import { Payments } from '../pages/client-portal/Payments';
import { RateUs } from '../pages/client-portal/RateUs';
import { MyProfile } from '../pages/client-portal/MyProfile';
import { Pictures } from '../pages/client-portal/Pictures';

const ClientRoutes: React.FC = () => (

    <Routes>
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/finance/invoices" element={<Invoices />} />
        <Route path="/finance/estimates" element={<Estimates />} />
        <Route path="/finance/documents" element={<Documents />} />
        <Route path="/finance/payments" element={<Payments />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/work-request" element={<WorkRequest />} />
        <Route path="/finance/invoices/invoice-details" element={<ViewInvoice />} />
        <Route path="/finance/estimates/estimate-details" element={<ViewEstimate />} />
        <Route path="/finance/documents/document-details" element={<ViewDocument />} />
        <Route path="/rate-us" element={<RateUs />} />
        <Route path="/profile" element={<MyProfile />} />
    </Routes>
);

export default ClientRoutes;