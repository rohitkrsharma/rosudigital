import { Box, Container } from "@mui/material";

export default function GradientSection({ id, children }) {
  return (
    <Box
      id={id}
      sx={{
        minHeight: "50vh",
        // background: "linear-gradient(90deg, #0B5ED7 0%, #FF9800 100%)",
        // marginTop: "30px",
        background: "white",
        display: "flex",
        alignItems: "center",
        color: "#0865f1",
        scrollMarginTop: "90px", // navbar offset
      }}
    >
      <Container maxWidth="lg">
        {children}
      </Container>
    </Box>
  );
}
