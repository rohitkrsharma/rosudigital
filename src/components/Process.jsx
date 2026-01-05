import { Typography, Paper, Grid } from "@mui/material";
import GradientSection from "./GradientSection";

const processSteps = [
  {
    step: "01",
    title: "Audit & Goal Setting",
    desc: "We review your ads, tracking, and landing pages to identify gaps, quick wins, and define clear KPIs for success.",
    points: [
      "Account & funnel audit",
      "KPI clarity (CPL, CAC, ROAS)",
      "Quick improvement opportunities",
    ],
  },
  {
    step: "02",
    title: "Tracking & Conversion Setup",
    desc: "We fix analytics and tracking so every lead and sale is accurately measured.",
    points: [
      "GA4, GTM, Pixel & CAPI setup",
      "Event & conversion tracking",
      "UTM and naming conventions",
    ],
  },
  {
    step: "03",
    title: "Campaign Structure & Targeting",
    desc: "Campaigns are rebuilt into a clean funnel with the right audiences, budgets, and bidding strategy.",
    points: [
      "TOF / MOF / BOF funnel setup",
      "Campaign & ad structure",
      "Budget and bid planning",
    ],
  },
  {
    step: "04",
    title: "Creatives & Landing Page Optimization",
    desc: "We improve hooks, messaging, and landing pages to increase conversion rate and lead quality.",
    points: [
      "Creative angles & iterations",
      "Landing page copy & form fixes",
      "Offer positioning support",
    ],
  },
  {
    step: "05",
    title: "Launch, Test & Optimize",
    desc: "We launch campaigns, cut waste, and scale what works through continuous testing.",
    points: [
      "Weekly optimization cadence",
      "Scaling winners & cutting losers",
      "Experiment roadmap",
    ],
  },
  {
    step: "06",
    title: "Reporting & Growth Plan",
    desc: "Clear reporting, insights, and a structured plan to scale profitably.",
    points: [
      "Simple weekly reports",
      "What worked & what didn’t",
      "Next-step scale plan",
    ],
  },
];

export default function Process() {
  return (
    <GradientSection id="process">
      {/* SECTION HEADING */}
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
        Our Digital Marketing Process
      </Typography>

      <Typography
        sx={{
          maxWidth: 700,
          mb: 6,
          fontSize: "1rem",
          lineHeight: 1.7,
          color: "#555",
        }}
      >
        A simple, repeatable system designed to improve performance and scale
        results step by step.
      </Typography>

      {/* PROCESS CARDS */}
      <Grid container spacing={3}>
        {processSteps.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                p: 3,
                borderRadius: 4,
                background: "#ffffff",
                border: "1px solid #eee",
                transition: "all 0.35s ease",
                cursor: "pointer",

                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "#FF9800",
                  boxShadow: "0 20px 40px rgba(11, 94, 215, 0.15)",
                },
              }}
            >
              {/* STEP NUMBER */}
              <Typography
                fontWeight="bold"
                sx={{
                  fontSize: "2.4rem",
                  mb: 1,
                  background: "linear-gradient(180deg, #0B5ED7, #FF9800)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.step}
              </Typography>

              {/* TITLE */}
              <Typography
                fontWeight="bold"
                sx={{
                  mb: 1, fontSize: "1.15rem",
                  lineHeight: 1.3,
                  background: "linear-gradient(90deg, #0B5ED7, #FF9800)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.title}
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  mb: 2,
                  fontSize: "0.98rem",
                  lineHeight: 1.7,
                  color: "#555",
                }}
              >
                {item.desc}
              </Typography>

              {/* POINTS */}
              {item.points.map((point, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontSize: "0.9rem",
                    color: "#666",
                    mb: 0.6,
                  }}
                >
                  • {point}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </GradientSection>
  );
}
