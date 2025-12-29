// src/components/HomePage.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Box
  id="home"
  sx={{
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    px: 2,

    backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.7),
        rgba(0,0,0,0.7)
      ),
      url('/bg-image.jpg')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      {/* Greeting */}
      <Typography variant="h4" color="text.secondary" gutterBottom>
        Hi, I am
      </Typography>

      {/* Name */}
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", color: "primary.main" }}
        gutterBottom
      >
        ASWANTH TK
      </Typography>

      {/* Role */}
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ mb: 4, maxWidth: "600px" }}
      >
        Front-End Developer | React & TypeScript Enthusiast
      </Typography>

      {/* Buttons */}
      <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/projects"
          sx={{ px: 4, py: 1.2 }}
        >
          View Projects
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/contact"
          sx={{ px: 4, py: 1.2 }}
        >
          Contact Me
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
