"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return (
      <Button variant="glassSecondary" size="icon" disabled>
        <div className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="glassSecondary"
      size="icon"
      onClick={toggleTheme}
      className="group relative overflow-hidden hover:scale-[1.03] active:scale-95 transition-transform duration-300"
    >
      <div className="relative z-10">
        {theme === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] group-hover:rotate-180 transition-transform duration-500" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] group-hover:rotate-12 transition-transform duration-300" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
