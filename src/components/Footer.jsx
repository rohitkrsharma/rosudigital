import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "./icons/XIcon";
import rosu from "../assets/rosu.png";

export default function Footer() {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #0B5ED7 0%, #FF9800 100%)",
        color: "white",
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* LOGO & TAGLINE */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={rosu}
              alt="RosuDigital Logo"
              sx={{ height: 70, width: 140, mb: 2, cursor: "pointer" }}
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            />

            <Typography variant="body2" sx={{ maxWidth: 320, mb: 2 }}>
              Your Growth, Our Strategy.
              We help businesses grow with performance-driven digital
              marketing and modern web solutions.
            </Typography>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>

            <Link href="#about" color="inherit" underline="none" display="block">
              About Us
            </Link>
            <Link
              href="#services"
              color="inherit"
              underline="none"
              display="block"
            >
              Services
            </Link>
            <Link
              href="#contact"
              color="inherit"
              underline="none"
              display="block"
            >
              Contact
            </Link>
          </Grid>

          {/* SERVICES (ONLY WHAT YOU OFFER) */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Services
            </Typography>

            <Typography variant="body2">
              Performance Marketing (Meta & Google Ads)
            </Typography>
            <Typography variant="body2">
              Social Media Marketing
            </Typography>
            <Typography variant="body2">
              Website Design & Development
            </Typography>
            <Typography variant="body2">
              Landing Pages & Lead Funnels
            </Typography>
          </Grid>

          {/* SOCIAL ICONS */}
          <Grid item xs={12} md={4}>
            <IconButton
              href="https://www.facebook.com/RosuDigital/"
              target="_blank"
              sx={{ color: "white" }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              href="https://www.instagram.com/rosudigital/"
              target="_blank"
              sx={{ color: "white" }}
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/company/rohit-sharma8986"
              target="_blank"
              sx={{ color: "white" }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://x.com"
              target="_blank"
              sx={{ color: "white" }}
            >
              <XIcon />
            </IconButton>
          </Grid>
        </Grid>

        {/* COPYRIGHT */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.3)",
            mt: 4,
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} RosuDigital. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
