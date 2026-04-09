import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface ConsentCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ConsentCheckbox = ({ id, checked, onChange }: ConsentCheckboxProps) => {
  const { t } = useLanguage();

  return (
    <label htmlFor={id} className="flex items-start gap-2 cursor-pointer text-xs text-muted-foreground">
      <input
        id={id}
        type="checkbox"
        required
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 rounded border-input accent-primary shrink-0"
      />
      <span>
        {t("consent.text")}{" "}
        <Link to="/politika-konfidencialnosti" className="underline underline-offset-2 hover:text-primary transition-colors" target="_blank">
          {t("consent.link")}
        </Link>
      </span>
    </label>
  );
};

export default ConsentCheckbox;
