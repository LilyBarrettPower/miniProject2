import React from 'react';
import {Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import ProfilePage from '../pages/ProfilePage';
import ProtectedRoute from './ProtectedRoute';

function AppRoutes() {
    return (
        <Routes>
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />}/>
            <Route path="/profile" element={<ProtectedRoute />} >
                <Route index element={<ProfilePage />} />
                </Route>
            <Route index element={<Navigate to="/login" />} />
        </Routes>
    );
}

export default AppRoutes;