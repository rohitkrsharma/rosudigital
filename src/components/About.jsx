import { Box, Typography } from "@mui/material";
import GradientSection from "./GradientSection";

export default function About() {
  return (
    <GradientSection id="about">
      <Box
        sx={{
          minHeight: "75vh",
          pt: { xs: "20px", md: "80px" },
        }}
      >
        <Typography variant="h3"
          fontWeight="bold"
          sx={{
            mt: 4,
            mb: 3,
            fontSize: { xs: "2.2rem", md: "3rem" },
            lineHeight: 1.2,
            background: "linear-gradient(180deg, #0B5ED7 0%, #FF9800 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          About RosuDigital
        </Typography>

        <Typography
          sx={{
            mb: 4,
            lineHeight: 1.8,
            fontSize: "1.10rem",
            maxWidth: "900px",
          }}
        >
          RosuDigital is a results-driven digital agency built to help businesses grow
          smarter in the digital world. We work with startups, small businesses, and
          growing brands to create strong online identities, generate quality leads,
          and increase real revenue.
          <br />
          Our approach is simple — understand your business, identify the right
          opportunities, and execute strategies that deliver measurable results.
          From website development and performance marketing to SEO and brand
          positioning, we focus on solutions that are scalable, reliable, and
          future-ready.
          <br />
          At RosuDigital, we believe in transparency, clear communication, and long-term
          partnerships. We don’t just build digital solutions — we help businesses
          connect with the right audience, build trust, and grow consistently in an
          ever-changing digital landscape.
        </Typography>
      </Box>
    </GradientSection>
  );
}
