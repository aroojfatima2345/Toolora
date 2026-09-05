import { Helmet } from "react-helmet-async";

function SEO({
  title = "Free Online Tools",
  description = "Toolora offers free online tools for image compression, PDF conversion, calculators, QR codes, text tools, and more.",
  keywords = "",
  canonical = "/",
  noIndex = false,
}) {
  const siteName = "Toolora";

  // Current live domain
  const siteUrl = "https://toolora-inky.vercel.app";

  const fullTitle =
    title === "Free Online Tools"
      ? `${siteName} - ${title}`
      : `${title} | ${siteName}`;

  const canonicalUrl = canonical.startsWith("http")
    ? canonical
    : `${siteUrl}${
        canonical.startsWith("/") ? canonical : `/${canonical}`
      }`;

  const robotsContent = noIndex
    ? "noindex, nofollow"
    : "index, follow";

  const ogImageUrl = `${siteUrl}/og-image.png`;

  return (
    <Helmet>
      {/* =========================
          BASIC SEO
      ========================= */}

      <html lang="en" />

      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      <meta
        name="robots"
        content={robotsContent}
      />

      <meta
        name="googlebot"
        content={robotsContent}
      />

      <meta
        name="author"
        content={siteName}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* =========================
          OPEN GRAPH / FACEBOOK
      ========================= */}

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:site_name"
        content={siteName}
      />

      <meta
        property="og:locale"
        content="en_US"
      />

      <meta
        property="og:image"
        content={ogImageUrl}
      />

      <meta
        property="og:image:alt"
        content={`${siteName} - Free Online Tools`}
      />

      <meta
        property="og:image:type"
        content="image/png"
      />

      <meta
        property="og:image:width"
        content="1200"
      />

      <meta
        property="og:image:height"
        content="630"
      />

      {/* =========================
          TWITTER / X
      ========================= */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={ogImageUrl}
      />

      <meta
        name="twitter:image:alt"
        content={`${siteName} - Free Online Tools`}
      />

      {/* =========================
          WEBSITE / BROWSER
      ========================= */}

      <meta
        name="theme-color"
        content="#6c5ce7"
      />
    </Helmet>
  );
}

export default SEO;