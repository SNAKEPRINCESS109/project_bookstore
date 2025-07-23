// pages/AdminDashboard.jsx
import React from 'react';
import AdminBookForm from '../components/AdminBookForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AdminDashboard() {
  const stats = { users: 120, orders: 340, books: 58 };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Admin Dashboard</h1>
        <div className="grid grid-3">
          <div><strong>Users:</strong> {stats.users}</div>
          <div><strong>Orders:</strong> {stats.orders}</div>
          <div><strong>Books:</strong> {stats.books}</div>
        </div>
        <AdminBookForm onSubmit={book => console.log('Save book:', book)} />
      </div>
      <Footer />
    </div>
  );
}
