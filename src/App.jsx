import React from "react";
import Signup from "./signup-login/Signup";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { Dashboard } from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {

  return (
    <>
      <Dashboard />
    </>
  )
}

export default App
