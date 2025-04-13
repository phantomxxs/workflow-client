import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  icon?: LucideIcon;
  label: string;
  // isCollapsed: boolean;
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  // isCollapsed,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href} className="w-full">
      <div
        className={cn(
          "relative flex items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 cursor-pointer px-8 py-3",
          isActive && "bg-gray-100 dark:bg-gray-600 text-white",
        )}
      >
        {isActive && (
          <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200"></div>
        )}
        {Icon && <Icon className="text-gray-800 dark:text-gray-100" />}
        <span className="font-medium text-gray-800 dark:text-gray-100">
          {label}
        </span>
      </div>
    </Link>
  );
};

export default SidebarLink;
