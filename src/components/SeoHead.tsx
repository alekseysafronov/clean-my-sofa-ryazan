import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SeoHeadProps {
  title: string;
  description: string;
  noindex?: boolean;
  ogImage?: string;
}

const SITE = "https://qweeq.ru";

const DEFAULT_OG_IMAGE = `${SITE}/og-image.jpg`;

const SeoHead = ({ title, description, noindex, ogImage }: SeoHeadProps) => {
  const { pathname } = useLocation();
  const canonical = `${SITE}${pathname === "/" ? "" : pathname}`;
  const fullTitle = pathname === "/" ? title : `${title} | Qweeq`;
  const image = ogImage || DEFAULT_OG_IMAGE;

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
    setMeta("og:image", image, "property");
    setMeta("og:image:width", "1920", "property");
    setMeta("og:image:height", "1080", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

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
  }, [fullTitle, description, canonical, noindex, image]);

  return null;
};

export default SeoHead;
