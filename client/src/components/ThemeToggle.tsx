import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center">
      <span className="text-foreground mr-2 text-lg">
        ☀️
      </span>
      <Switch 
        id="theme-toggle"
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
      />
      <span className="text-foreground ml-2 text-lg">
        🌙
      </span>
    </div>
  );
}
