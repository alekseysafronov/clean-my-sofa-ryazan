import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SeoHeadProps {
  title: string;
  description: string;
  noindex?: boolean;
}

const SITE = "https://qweeq.ru";

const SeoHead = ({ title, description, noindex }: SeoHeadProps) => {
  const { pathname } = useLocation();
  const canonical = `${SITE}${pathname === "/" ? "" : pathname}`;
  const fullTitle = pathname === "/" ? title : `${title} | Qweeq`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    // Robots
    if (noindex) {
      let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        document.head.appendChild(robots);
      }
      robots.content = "noindex, nofollow";
      return () => {
        robots?.remove();
      };
    } else {
      document.querySelector('meta[name="robots"][content*="noindex"]')?.remove();
    }
  }, [fullTitle, description, canonical, noindex]);

  return null;
};

export default SeoHead;
