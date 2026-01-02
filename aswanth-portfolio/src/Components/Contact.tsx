// src/components/Contact.tsx
import React, { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { LinkedIn, Email, Phone } from "@mui/icons-material";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_gkma8pg", // 👉 replace with your EmailJS Service ID
          "template_kgqli5f", // 👉 replace with your EmailJS Template ID
          formRef.current,
          "9aeq1T4vCokt78cDF" // 👉 replace with your EmailJS Public Key
        )
        .then(
          () => {
            alert("Message sent successfully ✅");
            formRef.current?.reset();
          },
          (error) => {
            console.error("FAILED...", error.text);
            alert("Failed to send message ❌");
          }
        );
    }
  };

  return (
    <Paper
      id="contact"
      elevation={0}
      sx={{
        minHeight: "100vh",
        minWidth: '100vw',
        width: "100%",
        py: 8,
        backgroundColor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 6,
        }}
      >
        {/* Contact Form */}
        <Box
          component="form"
          ref={formRef}
          onSubmit={sendEmail}
          sx={{
            flex: 1,
            minWidth: { xs: "100%", md: 400 },
            p: 5,
            backgroundColor: "background.paper",
            borderRadius: 3,
            boxShadow: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 3, color: "primary.main" }}
          >
            Contact Me
          </Typography>
          <Stack spacing={3}>
            <TextField
              label="Name"
              name="user_name"
              fullWidth
              required
              variant="outlined"
            />
            <TextField
              label="Email"
              name="user_email"
              type="email"
              fullWidth
              required
              variant="outlined"
            />
            <TextField
              label="Phone"
              name="user_phone"
              type="tel"
              fullWidth
              required
              variant="outlined"
            />
            <TextField
              label="Message"
              name="user_message"
              fullWidth
              required
              multiline
              rows={5}
              variant="outlined"
            />
            <Button type="submit" variant="contained" size="large">
              Send Message
            </Button>
          </Stack>
        </Box>

        {/* Contact Info */}
        <Box
          sx={{
            flex: 1,
            minWidth: { xs: "100%", md: 350 },
            p: 4,
            backgroundColor: "background.paper",
            borderRadius: 3,
            boxShadow: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
            mt: { xs: 4, md: 0 },
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}
          >
            Get in Touch
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Email color="primary" />
            <Typography variant="body1"
              component="a"
              href="mailto:aswanthachu1273@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                color: "primary.main",
                fontWeight: 500,
              }}
            >aswanthachu1273@gmail.com</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Phone color="primary" />
            <Typography variant="body1"
              component='a'
              href="tel:+919207094370"
              sx={{
                textDecoration: "none",
                color: "primary.main",
                fontWeight: 500,
              }}
            >+91 92070 94370</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <LinkedIn color="primary" />
            <Typography
              component="a"
              href="https://www.linkedin.com/in/aswanth-t-k-"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: "none",
                color: "primary.main",
                fontWeight: 500,
              }}
            >
              linkedin.com/in/aswanth-t-k-
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Paper>
  );
};

export default Contact;
