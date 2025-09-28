// src/components/Projects.tsx
import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Chip,
  Stack,
  Paper,
  Box,
} from "@mui/material";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

const personalProjects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built with React, TypeScript, and Material-UI showcasing my projects and skills.",
    tech: ["React", "TypeScript", "Material-UI"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "Task Manager",
    description:
      "A task management web app with CRUD operations, built with React and Firebase.",
    tech: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/yourusername/task-manager",
    live: "https://yourportfolio.com",
  },
  {
    title: "Weather App",
    description:
      "Weather forecasting app using OpenWeatherMap API with geolocation support.",
    tech: ["React", "API", "Bootstrap"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://yourportfolio.com",
  },
  {
    title: "Calculator App",
    description: "A simple calculator web app built with React and Material-UI.",
    tech: ["React", "Material-UI"],
    github: "https://github.com/yourusername/calculator-app",
    live: "https://yourportfolio.com",
  },
  {
    title: "Todo App",
    description: "Manage tasks with this easy-to-use todo application.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/yourusername/todo-app",
    live: "https://yourportfolio.com",
  },
];

const companyProjects: Project[] = [
  {
    title: "Healthcare Appointment System",
    description:
      "Developed scheduling and patient management features for a healthcare web application.",
    tech: ["React", "TypeScript", "Material-UI", "Node.js"],
    live: "https://yourportfolio.com",
  },
];

const Projects: React.FC = () => {
  const renderProjects = (projects: Project[]) => (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={3}
    >
      {projects.map((project, index) => (
        <Card
          key={index}
          sx={{
            width: 300,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "background.paper",
            transition: "transform 0.2s",
            "&:hover": { transform: "translateY(-5px)" },
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "primary.main", mb: 1 }}
            >
              {project.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {project.description}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {project.tech.map((t) => (
                <Chip key={t} label={t} color="primary" size="small" />
              ))}
            </Stack>
          </CardContent>
          {(project.github || project.live) && (
            <CardActions>
              {project.github && (
                <Button
                  size="small"
                  color="primary"
                  href={project.github}
                  target="_blank"
                >
                  GitHub
                </Button>
              )}
              {project.live && (
                <Button
                  size="small"
                  color="primary"
                  href={project.live}
                  target="_blank"
                >
                  Live Demo
                </Button>
              )}
            </CardActions>
          )}
        </Card>
      ))}
    </Box>
  );

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        py: 6,
        backgroundColor: "background.default",
        display: "flex",
        justifyContent: "center", // ✅ center everything horizontally
        alignItems: "flex-start",
      }}
    >
      <Container maxWidth="lg">
        {/* Personal Projects */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mb: 4,
              textAlign: "center",
            }}
          >
            Personal Projects
          </Typography>
          {renderProjects(personalProjects)}
        </Box>

        {/* Company Projects */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              mb: 4,
              textAlign: "center",
            }}
          >
            Professional Projects
          </Typography>
          {renderProjects(companyProjects)}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
