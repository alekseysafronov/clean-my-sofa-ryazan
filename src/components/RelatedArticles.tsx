import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RelatedLink {
  href: string;
  title: string;
}

const RelatedArticles = ({ links }: { links: RelatedLink[] }) => (
  <div className="mt-10 pt-8 border-t border-border">
    <h2 className="font-heading font-bold text-xl text-foreground mb-4">Читайте также</h2>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            to={link.href}
            className="group flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default RelatedArticles;
