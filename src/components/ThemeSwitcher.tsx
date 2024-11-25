"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

export function ThemeSwitcherBase() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 shrink-0" />
      ) : (
        <Moon className="h-4 w-4 shrink-0" />
      )}
    </Button>
  );
}

export const ThemeSwitcher = dynamic(() => Promise.resolve(ThemeSwitcherBase), { ssr: false });
