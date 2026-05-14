import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SeoHeadProps {
  title: string;
  description: string;
  noindex?: boolean;
  ogImage?: string;
  jsonLd?: object | object[];
}

const SITE = "https://qweeq.ru";
const DEFAULT_OG_IMAGE = `${SITE}/og-image.jpg`;

const SeoHead = ({ title, description, noindex, ogImage, jsonLd }: SeoHeadProps) => {
  const { pathname } = useLocation();
  const canonical = `${SITE}${pathname === "/" ? "" : pathname}`;
  const fullTitle = pathname === "/" ? title : `${title} | Qweeq`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default SeoHead;
