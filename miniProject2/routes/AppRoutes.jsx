import React from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

function AppRoutes() {
    return (
        <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/home" element={<HomePage />} />
                <Route index element={<Navigate to="/login"/>} />
        </Routes>
    );
}

export default AppRoutes;