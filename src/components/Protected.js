import React from 'react'
import { Navigate } from 'react-router-dom';

function Protected({ children }) {
    const value = window.localStorage.getItem('token');
    if (!value) {
        return <Navigate to="/login" replace />
    }
    return children
}
export default Protected