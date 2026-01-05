import { Typography } from "@mui/material";
import GradientSection from "./GradientSection";

export default function WhyUs() {
  return (
    <GradientSection id="whyus" >
      {/* SMALL TAG */}
      <Typography
        sx={{
          mt: 4,
          mb: 1,
          fontWeight: 600,
          letterSpacing: 1,
          background: "linear-gradient(180deg, #0B5ED7 0%, #FF9800 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textTransform: "uppercase",
          fontSize: "2rem"
        }}
      >
        RosuDigital
      </Typography>

      {/* MAIN HEADING */}
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          mb: 4,
          fontSize: { xs: "2.2rem", md: "3rem" },
          lineHeight: 1.2,
          background: "linear-gradient(180deg, #0B5ED7 0%, #FF9800 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Why Choose RosuDigital as Your Digital Marketing Partner?
      </Typography>

      {/* PARAGRAPH 1 */}
      <Typography
        sx={{
          mb: 3,
          maxWidth: 900,
          lineHeight: 1.8,
          fontSize: "1rem",
          color: "#444",
        }}
      >
        Growing a business online is challenging—especially in today’s highly
        competitive digital space. Many brands invest in ads and marketing
        without clear strategy, proper tracking, or measurable results. That’s
        where RosuDigital comes in.
      </Typography>

      {/* PARAGRAPH 2 */}
      <Typography
        sx={{
          mb: 3,
          maxWidth: 900,
          lineHeight: 1.8,
          fontSize: "1rem",
          color: "#444",
        }}
      >
        At RosuDigital, we help businesses attract the right audience, convert
        visitors into customers, and scale profitably using performance-driven
        digital marketing. From Google Ads and Meta Ads to landing pages and
        analytics, every decision we make is backed by data—not guesswork.
      </Typography>

      {/* PARAGRAPH 3 */}
      <Typography
        sx={{
          mb: 3,
          maxWidth: 900,
          lineHeight: 1.8,
          fontSize: "1rem",
          color: "#444",
        }}
      >
        We believe digital marketing should be transparent, measurable, and
        focused on real business outcomes. Our structured approach, honest
        communication, and continuous optimization ensure your marketing spend
        delivers long-term value—not just short-term clicks.
      </Typography>

      {/* PARAGRAPH 4 */}
      <Typography
        sx={{
          maxWidth: 900,
          lineHeight: 1.8,
          fontSize: "1rem",
          color: "#444",
        }}
      >
        Whether you’re a startup, D2C brand, or growing business, RosuDigital
        works as your growth partner—helping you build a strong online presence,
        generate consistent leads, and scale with confidence.
      </Typography>
    </GradientSection>
  );
}
