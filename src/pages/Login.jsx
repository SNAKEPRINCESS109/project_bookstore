// pages/Login.jsx
import React from 'react';
import AuthForm from '../components/AuthForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Login</h1>
        <AuthForm type="login" onSubmit={data => console.log(data)} />
      </div>
      <Footer />
    </div>
  );
}