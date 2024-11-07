
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';

const AuthRoutes: React.FC = () => (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login/forget" element={<ForgotPassword />} />
    </Routes>
);

export default AuthRoutes;