import React from 'react'
import { Navigate } from 'react-router-dom';

function Public({ children }) {
    const value = window.localStorage.getItem('token');
    if (value) {
        return <Navigate to="/dashboard" replace />
    }
    return children
}
export default Public