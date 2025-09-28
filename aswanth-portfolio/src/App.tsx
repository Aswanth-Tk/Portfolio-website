import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Toolbar, Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import darkTheme from "./Components/Tools/Theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        {/* Fixed Navbar */}
        <Navbar />

        {/* Ensure pages start below navbar */}
        <Box component="main">
          <Toolbar /> {/* spacing for fixed navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
