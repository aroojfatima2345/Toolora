
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function AdPlaceholder({ label = "Advertisement" }) {
  return (
    <div
      className="mx-auto my-4"
      style={{
        width: "100%",
        maxWidth: "970px",
        minHeight: "90px",
        border: "1px dashed #d8d5e8",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#faf9ff",
        color: "#999",
        fontSize: "13px",
        textAlign: "center",
        padding: "15px",
      }}
      aria-label="Advertisement"
    >
      {label}
    </div>
  );
}

const articles = [
  {
    icon: "🖼️",
    category: "Image Tools",
    title: "How to Compress an Image Without Losing Quality",
    description:
      "Learn how image compression works and how to reduce image file size while keeping your images clear and useful.",
    path: "/blog/how-to-compress-an-image",
    relatedTool: "/image-compressor",
    relatedToolText: "Try Image Compressor",
  },
  {
    icon: "🔄",
    category: "Converters",
    title: "JPG vs PNG: Which Image Format Should You Use?",
    description:
      "Understand the difference between JPG and PNG and learn which format is better for photos, graphics, websites, and everyday use.",
    path: "/blog/jpg-vs-png",
    relatedTool: "/jpg-to-png",
    relatedToolText: "Try JPG to PNG",
  },
  {
    icon: "📄",
    category: "PDF Tools",
    title: "How to Reduce PDF File Size Online",
    description:
      "Discover simple ways to compress PDF files and make them easier to upload, share, store, and send.",
    path: "/blog/how-to-reduce-pdf-file-size",
    relatedTool: "/pdf-compressor",
    relatedToolText: "Try PDF Compressor",
  },
  {
    icon: "✂️",
    category: "Image Tools",
    title: "How to Remove Background From an Image",
    description:
      "Learn how background removal works and how you can quickly create clean images with transparent backgrounds.",
    path: "/blog/how-to-remove-image-background",
    relatedTool: "/background-remover",
    relatedToolText: "Try Background Remover",
  },
  {
    icon: "🧮",
    category: "Calculators",
    title: "How to Calculate Percentage Easily",
    description:
      "Learn the basic percentage formula with simple examples for discounts, increases, marks, and everyday calculations.",
    path: "/blog/how-to-calculate-percentage",
    relatedTool: "/percentage-calculator",
    relatedToolText: "Try Percentage Calculator",
  },
  {
    icon: "⚖️",
    category: "Calculators",
    title: "What Is BMI and How Is It Calculated?",
    description:
      "Understand BMI, the basic BMI formula, and how the result is commonly interpreted.",
    path: "/blog/what-is-bmi",
    relatedTool: "/bmi-calculator",
    relatedToolText: "Try BMI Calculator",
  },
];

function Blog() {
  return (
    <>
      <SEO
        title="Toolora Blog - Online Tools, Tips & Guides"
        description="Read Toolora's helpful guides and articles about image compression, PDF tools, file conversion, calculators, online tools and everyday digital tasks."
        keywords="Toolora blog, online tools blog, image compression tips, PDF tips, JPG PNG guide, online tools guides, image tools tips, calculator guides"
        canonical="/blog"
      />

      <div className="container py-4">
        {/* Top Advertisement */}
        <AdPlaceholder />

        {/* Hero Section */}
        <section
          className="text-center py-5 px-3 rounded-4"
          style={{
            background: "#f7f6ff",
          }}
        >
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{
              width: "64px",
              height: "64px",
              background: "#6c5ce7",
              color: "#fff",
              fontSize: "28px",
            }}
          >
            📝
          </div>

          <h1
            className="fw-bold mb-3"
            style={{
              color: "#172033",
              fontSize: "clamp(30px, 5vw, 48px)",
            }}
          >
            Toolora Blog
          </h1>

          <p
            className="mx-auto mb-0"
            style={{
              maxWidth: "720px",
              color: "#667085",
              fontSize: "17px",
              lineHeight: "1.8",
            }}
          >
            Helpful guides, tips, and simple explanations for online tools,
            image editing, PDF files, calculators, conversions, and everyday
            digital tasks.
          </p>
        </section>

        {/* Middle Advertisement */}
        <AdPlaceholder />

        {/* Latest Guides */}
        <section className="py-4">
          <div className="text-center mb-5">
            <h2
              className="fw-bold mb-2"
              style={{
                color: "#172033",
              }}
            >
              Latest Guides
            </h2>

            <p
              className="mb-0"
              style={{
                color: "#667085",
              }}
            >
              Explore practical guides and learn how to get more from
              Toolora's free online tools.
            </p>
          </div>

          <div className="row g-4">
            {articles.map((article) => (
              <div className="col-md-6 col-lg-4" key={article.path}>
                <article
                  className="h-100 bg-white rounded-4 p-4"
                  style={{
                    border: "1px solid #eceaf5",
                    boxShadow: "0 8px 30px rgba(23, 32, 51, 0.05)",
                    transition: "all 0.25s ease",
                  }}
                >
                  {/* Clickable Article Area */}
                  <Link
                    to={article.path}
                    className="text-decoration-none d-block"
                    style={{
                      color: "inherit",
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-4 mb-4"
                      style={{
                        width: "64px",
                        height: "64px",
                        background: "#f0eeff",
                        fontSize: "30px",
                      }}
                    >
                      {article.icon}
                    </div>

                    <span
                      className="d-inline-block mb-3 px-3 py-1 rounded-pill"
                      style={{
                        background: "#f0eeff",
                        color: "#6c5ce7",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      {article.category}
                    </span>

                    <h3
                      className="fw-bold mb-3"
                      style={{
                        color: "#172033",
                        fontSize: "21px",
                        lineHeight: "1.4",
                      }}
                    >
                      {article.title}
                    </h3>

                    <p
                      className="mb-3"
                      style={{
                        color: "#667085",
                        lineHeight: "1.7",
                        fontSize: "14px",
                      }}
                    >
                      {article.description}
                    </p>

                    <span
                      className="fw-semibold"
                      style={{
                        color: "#6c5ce7",
                        fontSize: "14px",
                      }}
                    >
                      Read Article →
                    </span>
                  </Link>

                  {/* Related Tool */}
                  <div
                    className="mt-4 pt-3"
                    style={{
                      borderTop: "1px solid #eeeef5",
                    }}
                  >
                    <Link
                      to={article.relatedTool}
                      className="text-decoration-none fw-semibold"
                      style={{
                        color: "#172033",
                        fontSize: "13px",
                      }}
                    >
                      🔧 {article.relatedToolText}
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Advertisement */}
        <AdPlaceholder />

        {/* Explore Tools */}
        <section
          className="text-center rounded-4 p-4 p-md-5 mt-4"
          style={{
            background: "#172033",
          }}
        >
          <h2
            className="fw-bold text-white mb-3"
            style={{
              fontSize: "28px",
            }}
          >
            Explore Free Tools
          </h2>

          <p
            className="mx-auto mb-4"
            style={{
              maxWidth: "650px",
              color: "#c7ccd8",
              lineHeight: "1.7",
            }}
          >
            Ready to try something? Explore Toolora's collection of free
            online tools for images, PDFs, text, calculators, and more.
          </p>

          <Link
            to="/"
            className="btn px-4 py-2 rounded-pill fw-semibold"
            style={{
              background: "#6c5ce7",
              color: "#fff",
              border: "none",
            }}
          >
            Explore Tools
          </Link>
        </section>

        {/* SEO Content */}
        <section className="py-5">
          <div className="mx-auto" style={{ maxWidth: "850px" }}>
            <h2
              className="fw-bold mb-3"
              style={{
                color: "#172033",
              }}
            >
              Helpful Online Tool Guides
            </h2>

            <p
              style={{
                color: "#667085",
                lineHeight: "1.8",
              }}
            >
              The Toolora blog provides simple and practical information about
              online tools and everyday digital tasks. Whether you want to
              compress an image, reduce a PDF file size, convert an image,
              calculate a percentage, or understand BMI, our guides are
              designed to make these tasks easier.
            </p>

            <p
              style={{
                color: "#667085",
                lineHeight: "1.8",
              }}
            >
              Our goal is to explain technical topics in a straightforward way
              so that beginners and everyday users can understand the process
              without unnecessary complexity.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Blog;

