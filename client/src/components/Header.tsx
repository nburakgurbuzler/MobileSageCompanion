import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { t } = useLanguage();
  
  return (
    <header className="mb-6 relative h-20">
      <div className="flex items-center pt-6">
        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm">
          <i className="fas fa-robot text-xl"></i>
        </div>
        <div className="ml-3">
          <h1 className="text-[52px] font-bold text-foreground tracking-tight leading-none -mt-1 -mb-2">
            {t("AI Hub", "AI Hub")}
          </h1>
        </div>
      </div>
    </header>
  );
}
