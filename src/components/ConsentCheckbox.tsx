import { Link } from "react-router-dom";

interface ConsentCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ConsentCheckbox = ({ id, checked, onChange }: ConsentCheckboxProps) => (
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
      Я даю согласие на{" "}
      <Link to="/politika-konfidencialnosti" className="underline underline-offset-2 hover:text-primary transition-colors" target="_blank">
        обработку персональных данных
      </Link>
    </span>
  </label>
);

export default ConsentCheckbox;
