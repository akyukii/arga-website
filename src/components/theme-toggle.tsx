import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/theme-provider";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  const ariaLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={ariaLabel}
      className={cn("text-inherit hover:bg-black/10 hover:text-inherit focus-visible:ring-ring/30", className)}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}


