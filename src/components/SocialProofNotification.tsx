import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";

const notifications = [
  { district: "Дашково-Песочня", service: "химчистку дивана", time: "15 минут назад" },
  { district: "Канищево", service: "чистку ковра", time: "32 минуты назад" },
  { district: "Центр", service: "химчистку кресла", time: "1 час назад" },
  { district: "Приокский", service: "чистку матраса", time: "2 часа назад" },
  { district: "Московский", service: "химчистку дивана", time: "3 часа назад" },
  { district: "Борки", service: "чистку автосалона", time: "4 часа назад" },
];

const SocialProofNotification = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show first notification after 8 seconds
    const initialTimeout = setTimeout(() => {
      setVisible(true);
    }, 8000);

    return () => clearTimeout(initialTimeout);
  }, [dismissed]);

  useEffect(() => {
    if (!visible || dismissed) return;

    // Auto-hide after 5 seconds, then show next after 15 seconds
    const hideTimeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 15000);
    }, 5000);

    return () => clearTimeout(hideTimeout);
  }, [visible, index, dismissed]);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
  };

  const notification = notifications[index];

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          className="fixed bottom-20 left-4 z-40 max-w-xs bg-card border border-border rounded-xl shadow-lg p-4 pr-8"
        >
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
            aria-label="Закрыть"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Заказали {notification.service}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                р-н {notification.district} · {notification.time}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofNotification;
