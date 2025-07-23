// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Books from '../pages/Books';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import BookDetails from '../pages/BookDetail';
import AdminDashboard from '../pages/AdminDashboard';

import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/book/:bookId" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<Books />} />

        {/* Protected User Routes */}
        <Route element={<ProtectedRoute />}>
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          {/* Add more admin routes here */}
        </Route>

        {/* Catch-all */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;