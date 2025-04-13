"use client";
import React, { useEffect } from "react";
import Sidebar from "./sidebar/sidebar";
import Navbar from "./navbar";
import { useUIStore } from "@/store/ui-store";
import { cn } from "@/lib/utils";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useUIStore((state) => state.isDarkMode);
  const isSidebarCollapsed = useUIStore((state) => state.isSidebarCollapsed);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex min-h-screen w-full bg-gray-500 text-gray-900">
      {/* SIDEBAR */}
      <Sidebar />

      <main
        className={cn(
          "flex w-full flex-col bg-gray-50 dark:bg-dark-bg",
          !isSidebarCollapsed && "md:pl-64",
        )}
      >
        {/* NAVBAR */}
        <Navbar />

        {children}
      </main>
    </div>
  );
};

export default AppLayout;
