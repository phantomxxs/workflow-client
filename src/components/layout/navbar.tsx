import { AlignJustify, Moon, Search, Settings, Sun, User } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { useUIStore } from "@/store/ui-store";

const Navbar = () => {
  const isDarkMode = useUIStore((state) => state.isDarkMode);
  const isSidebarCollapsed = useUIStore((state) => state.isSidebarCollapsed);
  const setIsDarkMode = useUIStore((state) => state.setIsDarkMode);
  const setIsSidebarCollapsed = useUIStore(
    (state) => state.setIsSidebarCollapsed,
  );

  return (
    <div className="justify-between bg-white flex items-center px-4 py-3 dark:bg-black">
      {/* MENU & SEARCH BAR */}
      <div className="flex items-center gap-8">
        {/*  */}
        {isSidebarCollapsed && (
          <AlignJustify
            className="cursor-pointer hover:opacity-70 dark:text-white"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          />
        )}

        {/* Search bar */}
        <div className="relative flex h-min w-[250px]">
          <Search className="absolute left-[5px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <Input className="pl-8" placeholder="Search..." type="search" />
        </div>
      </div>

      {/* ACTION ICONS */}

      <div className="flex items-center gap-6 text-gray-900 dark:text-white">
        {isDarkMode ? (
          <Sun
            className="cursor-pointer hover:opacity-70"
            onClick={() => setIsDarkMode(false)}
          />
        ) : (
          <Moon
            className="cursor-pointer hover:opacity-70"
            onClick={() => setIsDarkMode(true)}
          />
        )}

        <Settings className="cursor-pointer hover:opacity-70 h-min w-min" />
        <User className="cursor-pointer hover:opacity-70" />
      </div>
    </div>
  );
};

export default Navbar;
