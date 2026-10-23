
import { Helmet } from "react-helmet-async";

function SEO({
  title = "Free Online Tools",
  description = "Toolora offers free online tools for image compression, PDF conversion, calculators, QR codes, text tools, and more.",
  keywords = "",
  canonical = "/",
  noIndex = false,
}) {
  const siteName = "Toolora";
  const siteUrl = "https://www.toolora.click";

  // Page title
  const fullTitle =
    title === "Free Online Tools"
      ? `${siteName} - ${title}`
      : `${title} | ${siteName}`;

  // Canonical URL
  const canonicalUrl = canonical.startsWith("http")
    ? canonical
    : `${siteUrl}${canonical.startsWith("/") ? canonical : `/${canonical}`}`;

  // Robots
  const robotsContent = noIndex
    ? "noindex, nofollow"
    : "index, follow";

  // Social sharing image
  const ogImageUrl = `${siteUrl}/og-image.png`;

  return (
    <Helmet>
      {/* Page title */}
      <title>{fullTitle}</title>

      {/* Basic SEO */}
      <meta name="description" content={description} />

      {keywords && (
        <meta name="keywords" content={keywords} />
      )}

      <meta name="author" content={siteName} />
      <meta name="application-name" content={siteName} />

      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />

      <meta
        name="referrer"
        content="strict-origin-when-cross-origin"
      />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      <meta property="og:image" content={ogImageUrl} />
      <meta
        property="og:image:alt"
        content={`${siteName} - Free Online Tools`}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta
        name="twitter:image:alt"
        content={`${siteName} - Free Online Tools`}
      />

      {/* Browser theme */}
      <meta name="theme-color" content="#6c5ce7" />
    </Helmet>
  );
}

export default SEO;
