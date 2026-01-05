import { Button } from "@mui/material";

export default function GradientButton({ children, ...props }) {
  return (
    <Button
      {...props}
      sx={{
        background: "linear-gradient(90deg, #0B5ED7, #FF9800)",
        color: "#fff",
        "&:hover": {
          background: "linear-gradient(90deg, #094cb5, #e68900)",
        },
      }}
    >
      {children}
    </Button>
  );
}
