import React from "react";
import { login } from "../services/authService";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
// This is the line that was missing!
import Footer from "../components/Footer";
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';


export default function Login() {
  const { login: loginUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const user = await login(formData);
      loginUser(user);
      navigate("/")
    } catch (err) {
      alert("Invalid credentials");
      console.log("Error", err);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <h1>Login</h1>
      <LoginForm type="login" onSubmit={handleLogin} />
    </div>
    <Footer/>
    <div style={{height: "5px"}}></div>
    </>
  );
}
