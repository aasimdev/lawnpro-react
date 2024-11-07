import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Customers from '../pages/customer/Customers';
import CustomerEditor from '../pages/customer/CustomerEditor';
import Properties from '../pages/property/Properties';
import Reviews from '../pages/review/Reviews';
import ManageCredit from '../pages/customer/ManageCredit';
import Employees from '../pages/employee/Employees'
import Crews from '../pages/crew/Crews'
import Vendors from '../pages/vendor/Vendors'
import Items_Services from '../pages/items/Items_Services';
import InventoryItems from '../pages/items/InventoryItems';
import Packages from '../pages/items/Packages';
import ItemCategories from '../pages/items/ItemCategories';
import Equipments from '../pages/equipment/Equipments';
import Tags from '../pages/Tags';

const SecureRoutes: React.FC = () => (
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
        <Route path="/resource/items-services" element={<Items_Services />} />
        <Route path="/resource/items-services/inventory-items" element={<InventoryItems />} />
        <Route path="/resource/items-services/packages" element={<Packages />} />
        <Route path="/resource/items-services/categories" element={<ItemCategories />} />
        <Route path="/resource/equipments" element={<Equipments />} />
        <Route path="/resource/tags" element={<Tags />} />
    </Routes>
);

export default SecureRoutes;