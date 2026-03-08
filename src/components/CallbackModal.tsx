import { useState } from "react";
import { Phone } from "lucide-react";
import { applyPhoneMask, isPhoneComplete } from "@/lib/phoneMask";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface CallbackModalProps {
  serviceName: string;
  trigger?: React.ReactNode;
}

const CallbackModal = ({ serviceName, trigger }: CallbackModalProps) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !isPhoneComplete(phone)) return;

    setLoading(true);
    // Simulate send — can be wired to edge function later
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setOpen(false);
    setName("");
    setPhone("");
    toast({
      title: "Заявка отправлена!",
      description: `Мы перезвоним вам по услуге «${serviceName}» в ближайшее время.`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="sm" variant="outline" className="gap-1.5 text-xs">
            <Phone className="w-3.5 h-3.5" />
            Заказать звонок
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading">Заказать звонок</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Оставьте заявку — перезвоним за 15 минут и расскажем про услугу «{serviceName}»
          </p>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="cb-name">Имя</Label>
            <Input
              id="cb-name"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cb-phone">Телефон</Label>
            <Input
              id="cb-phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={(e) => setPhone(applyPhoneMask(e.target.value))}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={loading || !name.trim() || !isPhoneComplete(phone)}
          >
            {loading ? "Отправляем..." : "Перезвоните мне"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CallbackModal;
