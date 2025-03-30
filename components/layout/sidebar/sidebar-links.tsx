import {
  DASHBAORD_ROUTE,
  SEARCH_ROUTE,
  SETTINGS_ROUTE,
  TEAMS_ROUTES,
  TIMELINE_ROUTE,
  USERS_ROUTES,
} from "@/routes";
import { Briefcase, House, Search, Settings, User, Users } from "lucide-react";
import React from "react";
import SidebarLink from "./sidebar-link";

const SidebarLinks = () => {
  const links = [
    {
      label: "Home",
      href: DASHBAORD_ROUTE,
      icon: House,
    },
    {
      label: "Timeline",
      href: TIMELINE_ROUTE,
      icon: Briefcase,
    },
    {
      label: "Search",
      href: SEARCH_ROUTE,
      icon: Search,
    },
    {
      label: "Settings",
      href: SETTINGS_ROUTE,
      icon: Settings,
    },
    {
      label: "Users",
      href: USERS_ROUTES,
      icon: User,
    },
    {
      label: "Teams",
      href: TEAMS_ROUTES,
      icon: Users,
    },
  ];
  return (
    <nav className="z-10 w-full">
      {links.map((l, i) => (
        <SidebarLink key={i} href={l.href} icon={l.icon} label={l.label} />
      ))}
    </nav>
  );
};

export default SidebarLinks;
