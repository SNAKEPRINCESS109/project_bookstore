import React from "react";
import AuthForm from "../components/AuthForm";
import { register } from "../services/authService";
import { useAuth } from "../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      const user = await register(formData);
      login(user);
       navigate("/");
    } catch (err) {
      alert("Registration failed");
      console.log(err);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <h1>Register</h1>
      <AuthForm type="register" onSubmit={handleRegister} />
    </div>
    <Footer/>
    <div style={{height: "5px"}}></div>
    </>
  );
}
