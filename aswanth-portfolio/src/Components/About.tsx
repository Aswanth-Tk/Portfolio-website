// src/components/About.tsx
import React from "react";
import { Box, Typography, Container, Button, Chip, Stack } from "@mui/material";
import { Grid } from "@mui/material";

const About: React.FC = () => {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Material-UI",
    "Bootstrap",
    "GitHub",
  ];

  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        {/* Grid container */}
        <Grid container spacing={4}>
          {/* Left Column: About Me */}
          <Box >
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", color: "primary.main", mb: 2 }}
            >
              About Me
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              I am Aswanth, a passionate React.js developer who specializes in building
              dynamic, responsive, and visually appealing web applications. I combine
              creativity with technical expertise to deliver seamless user experiences
              while maintaining high code quality using TypeScript and modern frontend
              technologies.
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={2}>
              <Button
                variant="contained"
                color="primary"
                href="#projects"
                sx={{ px: 4, py: 1.2 }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="#contact"
                sx={{ px: 4, py: 1.2 }}
              >
                Contact Me
              </Button>
            </Box>
          </Box>

          {/* Right Column: Education + Skills */}
          <Box >
            {/* Education */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "primary.main", mb: 2 }}
              >
                Education
              </Typography>
              <Typography color="text.secondary">
                B.Sc Mathematics, Calicut University (2017-2020)
              </Typography>
              <Typography color="text.secondary">
                Higher Secondary, IHSS Iringannur (2015 – 2017)
              </Typography>
            </Box>

            {/* Skills */}
            <Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: "primary.main", mb: 2 }}
              >
                Skills
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="flex-start"
                flexWrap="wrap"
              >
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    color="primary"
                    sx={{ mb: 1 }}
                  />
                ))}
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
