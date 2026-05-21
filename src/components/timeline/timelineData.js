import {
  CheckCircle2,
  Clock3,
  Layers3,
  Rocket,
} from "lucide-react";

export const timeline = [
  {
    phase: "Phase 01",
    title: "Planning & Research",
    description:
      "Gathering parish requirements, user workflows, and defining the overall system architecture.",
    status: "Completed",
    icon: CheckCircle2,
  },

  {
    phase: "Phase 02",
    title: "UI/UX Design",
    description:
      "Designing the modern interface, responsive layouts, branding, and user experience flows.",
    status: "Completed",
    icon: Layers3,
  },

  {
    phase: "Phase 03",
    title: "Core Development",
    description:
      "Building authentication, sacramental records, dashboards, cloud infrastructure, and APIs.",
    status: "In Progress",
    icon: Clock3,
  },

  {
    phase: "Phase 04",
    title: "Testing & Optimization",
    description:
      "Improving performance, responsiveness, security, and preparing the platform for deployment.",
    status: "Upcoming",
    icon: Rocket,
  },
];