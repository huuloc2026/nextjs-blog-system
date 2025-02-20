import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import React from "react";

const HeaderSession = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
      {/* Left-side Mode Toggle */}
      <div className="flex items-center space-x-4">
        <ModeToggle />
      </div>

      {/* Navigation links */}
      <nav className="space-x-6">
        <Link
          href="/logout"
          className="text-lg font-medium hover:text-blue-400 transition-colors"
        >
          Logout 
        </Link>
       
      </nav>
    </header>
  );
};

export default HeaderSession;
