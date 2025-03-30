"use client";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, LockIcon, X } from "lucide-react";
import React, { useState } from "react";
import Image from "../../image";
import { useUIStore } from "@/stores/ui-store";
import SidebarLinks from "./sidebar-links";
import { priorityLinks } from "./priority-links";
import SidebarLink from "./sidebar-link";

const Sidebar = () => {
  const isSidebarCollapsed = useUIStore((state) => state.isSidebarCollapsed);
  const setIsSidebarCollapsed = useUIStore(
    (state) => state.setIsSidebarCollapsed,
  );

  const [showProjects, setShowProjects] = useState(false);
  const [showPriority, setShowPriority] = useState(false);

  const sidebarClassNames = `fixed flex flex-col justify-between h-[100%] shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto w-64`;
  return (
    <>
      {!isSidebarCollapsed && (
        <div className={cn(sidebarClassNames)}>
          <div className="flex flex-col justify-start h-[100%] w-full">
            {/* LOGO */}
            <div className="flex items-center justify-between bg-white dark:bg-black px-6 min-h-[56px]">
              <div className="text-xl font-bold text-gray-800 dark:text-white">
                WORKFLOW
              </div>

              <X
                className="cursor-pointer hover:opacity-70"
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              />
            </div>

            {/* TEAMS */}
            <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
              <Image src="logo.jpg" className="w-10 h-10" alt="logo" />

              <div className="space-y-1">
                <h3 className="text-md font-bold tracking-widestbv dark:text-200">
                  ISVNG TEAM
                </h3>

                <div className="flex items-center gap-1">
                  <LockIcon
                    size={10}
                    className="text-gray-500 dark:text-gray-400"
                  />
                  <p className="text-xs text-gray-500">Private</p>
                </div>
              </div>
            </div>

            {/* LINKS */}
            <SidebarLinks />

            {/* PROJECTS  */}
            <button
              className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
              onClick={() => setShowProjects(!showProjects)}
            >
              <span>Projects</span>
              {showProjects ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {/* PRORITY  */}
            <button
              className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
              onClick={() => setShowPriority(!showPriority)}
            >
              <span>Priority</span>
              {showPriority ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {showPriority && (
              <>
                {priorityLinks.map((l, i) => (
                  <SidebarLink
                    key={i}
                    label={l.label}
                    href={l.href}
                    icon={l.icon}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
