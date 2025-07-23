// pages/Register.jsx
import React from 'react';
import AuthForm from '../components/AuthForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Register() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Register</h1>
        <AuthForm type="register" onSubmit={data => console.log(data)} />
      </div>
      <Footer />
    </div>
  );
}