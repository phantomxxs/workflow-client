import {
  BACKLOG_PRIORITY_LINK,
  HIGH_PRIORITY_LINK,
  LOW_PRIORITY_LINK,
  MEDIUM_PRIORITY_LINK,
  URGENT_PRIORITY_LINK,
} from "@/routes";
import {
  AlertOctagon,
  AlertTriangle,
  CircleAlert,
  Layers3,
  ShieldAlert,
} from "lucide-react";

export const priorityLinks = [
  {
    label: "Urgent",
    href: URGENT_PRIORITY_LINK,
    icon: CircleAlert,
  },
  {
    label: "High",
    href: HIGH_PRIORITY_LINK,
    icon: ShieldAlert,
  },
  {
    label: "Medium",
    href: MEDIUM_PRIORITY_LINK,
    icon: AlertTriangle,
  },
  {
    label: "Low",
    href: LOW_PRIORITY_LINK,
    icon: AlertOctagon,
  },
  {
    label: "Backlog",
    href: BACKLOG_PRIORITY_LINK,
    icon: Layers3,
  },
];
