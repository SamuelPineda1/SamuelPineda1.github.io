import React from "react";
import { Box, Typography } from "@mui/material";
import { useScrollSpy } from "../hooks/useScrollSpy";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const RightNav: React.FC = () => {
  const activeId = useScrollSpy(sections.map((s) => s.id));

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        right: { xs: "-999px", md: "32px" },   // hidden on mobile
        top: "40%",
        transform: "translateY(-40%)",
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
        zIndex: 10,
      }}
    >
      {sections.map((section) => {
        const isActive = activeId === section.id;

        return (
          <Typography
            key={section.id}
            onClick={() => scrollTo(section.id)}
            sx={{
              cursor: "pointer",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              userSelect: "none",
              fontSize: "1.5rem",
              letterSpacing: "0.1em",
              color: isActive ? "primary.main" : "text.secondary",
              transition: "color 0.2s ease",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            {section.label}
          </Typography>
        );
      })}
    </Box>
  );
};
