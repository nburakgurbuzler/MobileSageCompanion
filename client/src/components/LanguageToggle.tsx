
import { useLanguage } from "@/context/LanguageContext";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <div className="flex items-center">
      <span className="text-foreground mr-2 text-lg">
        🇹🇷
      </span>
      <Switch 
        id="language-toggle"
        checked={language === "en"}
        onCheckedChange={toggleLanguage}
      />
      <span className="text-foreground ml-2 text-lg">
        🇺🇸
      </span>
    </div>
  );
}
