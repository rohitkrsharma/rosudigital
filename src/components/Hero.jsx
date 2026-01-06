import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        pt: { xs: "90px", md: "90px" },
        background: "#0972B9",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">

          {/* LEFT CONTENT */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="overline"
              sx={{
                letterSpacing: 1.5,
                opacity: 0.85,
                fontSize: "0.9rem",
              }}
            >
              DIGITAL MARKETING & BUSINESS GROWTH
            </Typography>

            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                mt: 2,
                mb: 3,
                fontSize: { xs: "2.2rem", md: "3rem" },
                lineHeight: 1.2,
              }}
            >
              We Help Businesses Grow Online & Get Real Customers
            </Typography>

            <Typography
              sx={{
                mb: 4,
                lineHeight: 1.8,
                fontSize: "1.05rem",
                maxWidth: "800px",
              }}
            >
              RosuDigital is a growth-focused digital marketing agency partnering with startups and businesses to drive measurable results. Through strategic planning and data-backed execution, we help brands generate more leads, increase sales, and strengthen their digital presence.
              Because real growth matters more than follower counts.
            </Typography>

            {/* FEATURES */}
            {[
              "Google & Meta Ads to generate quality leads and sales",
              "High-converting landing pages and sales funnels",
              "Accurate tracking setup (GA4, GTM, Pixel, Conversions)",
              "SEO & website optimization for long-term growth",
              "Clear reporting and regular performance improvements",
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1.5,
                  maxWidth: "600px",
                }}
              >
                <CheckCircleIcon sx={{ color: "#4CAF50", mr: 1 }} />
                <Typography sx={{ fontSize: "0.95rem" }}>
                  {item}
                </Typography>
              </Box>
            ))}

            {/* TRUST BADGES */}
            <Grid container spacing={2} sx={{ mt: 4, pb: 3 }}>
              {[
                "Client-Focused Approach",
                "Transparent Pricing",
                "Fast Support & Delivery",
              ].map((badge, i) => (
                <Grid item key={i}>
                  <Paper
                    sx={{
                      px: 3,
                      py: 2,
                      background: "rgba(255,255,255,0.12)",
                      color: "white",
                      borderRadius: 3,
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  >
                    {badge}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
