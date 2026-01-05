import {
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Stack,
} from "@mui/material";
import GradientSection from "./GradientSection";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await axios.post("http://localhost:5000/api/contact", form);
      setSuccess("Thanks! We’ll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GradientSection id="contact">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 6, md: 8 },
          maxWidth: 1100,
          mx: "auto",
          mt: 3
        }}
      >
        {/* LEFT CONTENT */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              mb: 2,
              fontSize: { xs: "2.2rem", md: "3rem" },
              background: "linear-gradient(90deg, #0B5ED7, #FF9800)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let’s Talk About Your Growth
          </Typography>

          <Typography
            sx={{
              lineHeight: 1.8,
              opacity: 0.9,
              maxWidth: 480,
            }}
          >
            Tell us about your business, challenges, and goals.
            Our experts will connect with you and craft a strategy that
            drives real, measurable growth.
          </Typography>
        </Box>

        {/* RIGHT FORM */}
        <Paper
          elevation={0}
          sx={{
            flex: 1,
            maxWidth: 520,
            width: "100%",
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                label="How can we help you?"
                name="message"
                value={form.message}
                onChange={handleChange}
                multiline
                rows={4}
                required
              />

              <Button
                type="submit"
                size="large"
                disabled={loading}
                sx={{
                  py: 1.4,
                  fontWeight: 600,
                  background:
                    "linear-gradient(90deg, #0B5ED7 0%, #FF9800 100%)",
                  color: "#fff",
                  borderRadius: 3,
                  textTransform: "none",
                  "&:hover": { opacity: 0.9 },
                }}
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </Button>

              {success && (
                <Typography
                  sx={{ textAlign: "center", color: "#4CAF50" }}
                >
                  {success}
                </Typography>
              )}
            </Stack>
          </Box>
        </Paper>
      </Box>
    </GradientSection>
  );
}
