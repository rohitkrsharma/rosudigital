import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import rosu from "../assets/rosudigital.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    setOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar position="fixed" color="default" elevation={2} sx={{ px: { md: 15 } }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>

          {/* LOGO */}
          <Box
            component="img"
            src={rosu}
            alt="RosuDigital Logo"
            sx={{ height: 95, cursor: "pointer", width: 160 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => handleScroll("about")}
              sx={{
                fontWeight: 600,
                background: "linear-gradient(90deg, #0B5ED7, #FF9800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textTransform: "none",
                fontSize: "1.10rem",
                "&:hover": {
                  opacity: 0.85,
                  background: "linear-gradient(90deg, #0B5ED7, #FF9800)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
            >
              About
            </Button>
            <Button onClick={() => handleScroll("services")}
              sx={{
                fontWeight: 600,
                background: "linear-gradient(90deg, #0B5ED7, #FF9800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textTransform: "none",
                fontSize: "1.10rem",
                "&:hover": {
                  opacity: 0.85,
                  background: "linear-gradient(90deg, #0B5ED7, #FF9800)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
            >Services</Button>
            <Button onClick={() => handleScroll("contact")}
              sx={{
                fontWeight: 600,
                background: "linear-gradient(90deg, #0B5ED7, #FF9800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textTransform: "none",
                fontSize: "1.10rem",
                "&:hover": {
                  opacity: 0.85,
                  background: "linear-gradient(90deg, #0B5ED7, #FF9800)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
            >Contact</Button>
          </Box>

          {/* MOBILE HAMBURGER */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, mt: 2 }}>
          <List>
            <ListItem button onClick={() => handleScroll("about")}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={() => handleScroll("services")}>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button onClick={() => handleScroll("contact")}>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
