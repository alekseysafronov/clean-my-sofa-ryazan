import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "ru" ? "en" : "ru")}
      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors flex items-center gap-1"
      aria-label={lang === "ru" ? "Switch to English" : "Переключить на русский"}
    >
      <Globe className="w-5 h-5" />
      <span className="text-xs font-semibold uppercase">{lang === "ru" ? "EN" : "RU"}</span>
    </button>
  );
};

export default LanguageToggle;
