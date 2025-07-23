// src/routes/AdminRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return user?.role === 'admin' ? <Outlet /> : <Navigate to="/unauthorized" replace />;
};

export default AdminRoute;
