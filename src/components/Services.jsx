import { Typography, Grid, Paper } from "@mui/material";
import GradientSection from "./GradientSection";

const services = [
  {
    title: "Performance Marketing (Google & Meta Ads)",
    desc: "We run data-driven ad campaigns on Google, Facebook, and Instagram to generate high-quality leads and sales while keeping your cost per conversion low.",
  },
  {
    title: "SEO & Organic Growth",
    desc: "Improve your website visibility on Google with on-page SEO, technical optimization, and content strategies for long-term organic traffic.",
  },
  {
    title: "Website & Landing Page Development",
    desc: "High-converting, fast, and mobile-friendly websites designed to turn visitors into customers and support your marketing campaigns.",
  },
  {
    title: "Analytics, Tracking & Conversion Setup",
    desc: "Accurate tracking using GA4, Google Tag Manager, Pixels, and conversion APIs so every click, lead, and sale is properly measured.",
  },
];

export default function Services() {
  return (
    <GradientSection id="services">
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          mb: 2,
          fontSize: { xs: "2.2rem", md: "3rem" },
          lineHeight: 1.2,
          background: "linear-gradient(180deg, #0B5ED7 0%, #FF9800 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Services
      </Typography>

      <Typography
        sx={{
          maxWidth: "700px",
          mb: 5,
          lineHeight: 1.7,
          opacity: 0.9,
          fontSize: "1.10rem",
        }}
      >
        We offer end-to-end digital marketing solutions designed to help
        businesses attract the right audience, convert leads, and grow revenue
        consistently.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 1, mb: 3 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                p: 4,
                borderRadius: 4,
                background: "#ffffff",
                border: "1px solid #eaeaea",
                transition: "all 0.3s ease",
                // cursor: "pointer",

                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 24px 50px rgba(0,0,0,0.15)",
                  borderColor: "#FF9800",
                },
              }}
            >
              {/* TITLE */}
              <Typography
                fontWeight={700}
                sx={{
                  mb: 2,
                  fontSize: "1.15rem",
                  lineHeight: 1.3,
                  background: "linear-gradient(90deg, #0B5ED7, #FF9800)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {service.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  fontSize: "0.98rem",
                  lineHeight: 1.7,
                  color: "#555",
                }}
              >
                {service.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </GradientSection>
  );
}
