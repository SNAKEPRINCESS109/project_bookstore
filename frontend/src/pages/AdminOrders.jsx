// pages/AdminOrders.jsx
import React, { useEffect, useState } from "react";
import { fetchOrders, deleteOrder } from "../services/orderService";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';


export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.token) {
      fetchOrders(user.token)
        .then(setOrders)
        .catch(() => alert("Failed to load orders"));
    }
  }, [user]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this order?")) return;
    try {
      await deleteOrder(id, user.token);
      setOrders((prev) => prev.filter((o) => o._id !== id));
    } catch (err) {
      alert("Failed to delete order");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Manage Orders</h1>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <table className="order-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>User</th>
                <th>Total</th>
                <th>Date</th>
                <th>Books</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user?.name || "Guest"}</td>
                  <td>₹{order.totalAmount}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                  <td>
                    <ul>
                      {order.items.map((item, idx) => (
                        <li key={idx}>
                          {item.title} × {item.quantity}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(order._id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </div>
  );
}
