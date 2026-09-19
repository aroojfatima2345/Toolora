
import { lazy, Suspense, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import SEO from "./components/SEO";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";


// ======================================================
// LAZY LOADED PAGES
// ======================================================

const ImageCompressor = lazy(() => import("./pages/ImageCompressor"));
const ImageResizer = lazy(() => import("./pages/ImageResizer"));
const JpgToPng = lazy(() => import("./pages/JpgToPng"));
const WordCounter = lazy(() => import("./pages/WordCounter"));
const PDFCompressor = lazy(() => import("./pages/PdfCompressor"));
const QRCodeGenerator = lazy(() => import("./pages/QRCodeGenerator"));
const JpgToPdf = lazy(() => import("./pages/JpgToPdf"));
const PdfToJpg = lazy(() => import("./pages/PdfToJpg"));

const PercentageCalculator = lazy(
  () => import("./pages/PercentageCalculator")
);

const AgeCalculator = lazy(() => import("./pages/AgeCalculator"));
const BMICalculator = lazy(() => import("./pages/BMICalculator"));

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));

// ======================================================
// LOADING SCREEN
// ======================================================

function PageLoader() {
  return (
    <main
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="text-center">
        <div
          className="spinner-border text-primary mb-3"
          role="status"
          aria-hidden="true"
        >
          <span className="visually-hidden">Loading...</span>
        </div>

        <p className="text-muted mb-0">Loading...</p>
      </div>
    </main>
  );
}

// ======================================================
// HOME PAGE
// ======================================================

function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  // ======================================================
  // TOOLS
  // ======================================================

  const tools = [
    {
      icon: "🖼️",
      title: "Image Compressor",
      description: "Compress JPG, PNG and WebP images online.",
      path: "/image-compressor",
      category: "Image Tools",
    },
    {
      icon: "📐",
      title: "Image Resizer",
      description: "Resize your images to any dimension.",
      path: "/image-resizer",
      category: "Image Tools",
    },
    {
      icon: "🔄",
      title: "JPG to PNG",
      description: "Convert JPG images to PNG format.",
      path: "/jpg-to-png",
      category: "Converters",
    },
    {
      icon: "📄",
      title: "PDF Compressor",
      description: "Reduce PDF file size quickly and easily.",
      path: "/pdf-compressor",
      category: "PDF Tools",
    },
    {
      icon: "📝",
      title: "Word Counter",
      description: "Count words and characters instantly.",
      path: "/word-counter",
      category: "Text Tools",
    },
    {
      icon: "🔗",
      title: "QR Code Generator",
      description: "Create QR codes for links and text.",
      path: "/qr-code-generator",
      category: "Developer Tools",
    },
    {
      icon: "📄",
      title: "JPG to PDF",
      description: "Convert JPG images into PDF documents.",
      path: "/jpg-to-pdf",
      category: "Converters",
    },
    {
      icon: "🖼️",
      title: "PDF to JPG",
      description: "Convert PDF pages into JPG images.",
      path: "/pdf-to-jpg",
      category: "Converters",
    },
    {
      icon: "🧮",
      title: "Percentage Calculator",
      description: "Calculate percentages quickly and easily.",
      path: "/percentage-calculator",
      category: "Calculators",
    },
    {
      icon: "🎂",
      title: "Age Calculator",
      description:
        "Calculate your exact age in years, months and days.",
      path: "/age-calculator",
      category: "Calculators",
    },
    {
      icon: "⚖️",
      title: "BMI Calculator",
      description:
        "Calculate your BMI based on your height and weight.",
      path: "/bmi-calculator",
      category: "Calculators",
    },
  ];

  // ======================================================
  // CATEGORIES
  // ======================================================

  const categories = [
    {
      icon: "🖼️",
      title: "Image Tools",
    },
    {
      icon: "📄",
      title: "PDF Tools",
    },
    {
      icon: "📝",
      title: "Text Tools",
    },
    {
      icon: "🧮",
      title: "Calculators",
    },
    {
      icon: "💻",
      title: "Developer Tools",
    },
    {
      icon: "🔄",
      title: "Converters",
    },
  ];

  // ======================================================
  // FILTER TOOLS
  // ======================================================

  const searchTerm = search.toLowerCase().trim();

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.title.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm) ||
      tool.category.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "All" ||
      tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // ======================================================
  // CLEAR FILTERS
  // ======================================================

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("All");
  };

  // ======================================================
  // SCROLL TO SECTION
  // ======================================================

  const scrollToSection = (id) => {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  // ======================================================
  // HOME
  // ======================================================

  const goHome = () => {
    clearFilters();

    navigate("/");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ======================================================
  // ALL TOOLS
  // ======================================================

  const showAllTools = () => {
    clearFilters();

    navigate("/");

    scrollToSection("tools");
  };

  // ======================================================
  // CATEGORY CLICK
  // ======================================================

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearch("");

    navigate("/");

    scrollToSection("tools");
  };

  return (
    <>
      {/* ==================================================
          HOME SEO
      ================================================== */}

      <SEO
        title="Free Online Tools"
        description="Toolora provides free online tools for image compression, PDF tools, image conversion, calculators, QR codes, word counting and more."
        keywords="free online tools, image compressor, image resizer, PDF compressor, JPG to PNG, JPG to PDF, PDF to JPG, QR code generator, word counter, percentage calculator, age calculator, BMI calculator"
        canonical="/"
      />

      {/* ==================================================
          NAVBAR
      ================================================== */}
        
      <nav
        className="navbar navbar-expand-lg bg-white border-bottom"
        aria-label="Main navigation"
      >
        <div className="container py-2">
          <Link
            className="navbar-brand fw-bold fs-3 text-decoration-none"
            to="/"
            onClick={goHome}
            aria-label="Toolora Home"
          >
            Tool<span>ora</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              {/* HOME */}

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  onClick={goHome}
                >
                  Home
                </Link>
              </li>

              {/* ALL TOOLS */}

              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link btn btn-link border-0"
                  onClick={showAllTools}
                >
                  All Tools
                </button>
              </li>

              {/* CATEGORIES */}

              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link btn btn-link border-0"
                  onClick={() => {
                    navigate("/");
                    scrollToSection("categories");
                  }}
                >
                  Categories
                </button>
              </li>

              {/* BLOG */}

              <li className="nav-item">
                <span
                  className="nav-link text-muted"
                  style={{ cursor: "default" }}
                >
                  Blog
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <main>
        {/* ==================================================
            HERO
        ================================================== */}

        <section
          className="hero-section"
          aria-labelledby="hero-heading"
        >
          <div className="container text-center">
            <div
              className="hero-badge mb-3"
              aria-hidden="true"
            >
              ✨ Simple. Fast. Free.
            </div>

            <h1
              id="hero-heading"
              className="hero-title"
            >
              Free Online Tools
              <br />
              <span>Made Simple</span>
            </h1>

            <p className="hero-text">
              Compress, convert, calculate and generate
              with our collection of simple online tools.
            </p>

            {/* SEARCH */}

            <div className="search-box mx-auto">
              <span aria-hidden="true">🔍</span>

              <label
                htmlFor="tool-search"
                className="visually-hidden"
              >
                Search Toolora tools
              </label>

              <input
                id="tool-search"
                type="text"
                placeholder="Search for a tool..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                autoComplete="off"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear tool search"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </section>

        {/* ==================================================
            TOOLS
        ================================================== */}

        <section
          className="py-5"
          id="tools"
          aria-labelledby="tools-heading"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <h2 id="tools-heading">
                  {selectedCategory !== "All"
                    ? selectedCategory
                    : search
                      ? "Search Results"
                      : "Popular Tools"}
                </h2>

                <p>
                  {selectedCategory !== "All"
                    ? `${filteredTools.length} tools available`
                    : search
                      ? `${filteredTools.length} tool${
                          filteredTools.length !== 1
                            ? "s"
                            : ""
                        } found`
                      : "Useful tools you can use for free."}
                </p>
              </div>

              {(search || selectedCategory !== "All") && (
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={clearFilters}
                >
                  View All Tools
                </button>
              )}
            </div>

            {/* TOOLS GRID */}

            {filteredTools.length > 0 ? (
              <div className="row g-4">
                {filteredTools.map((tool) => (
                  <div
                    className="col-md-6 col-lg-4"
                    key={tool.path}
                  >
                    <Link
                      to={tool.path}
                      className="tool-card text-decoration-none d-block"
                    >
                      <div
                        className="tool-icon"
                        aria-hidden="true"
                      >
                        {tool.icon}
                      </div>

                      <h3>{tool.title}</h3>

                      <p>{tool.description}</p>

                      <span className="use-tool-btn">
                        Use Tool →
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5">
                <div
                  style={{
                    fontSize: "50px",
                    marginBottom: "15px",
                  }}
                  aria-hidden="true"
                >
                  🔍
                </div>

                <h3>No tools found</h3>

                <p className="text-muted">
                  We couldn't find any tools matching your
                  search.
                </p>

                <button
                  type="button"
                  className="btn btn-primary px-4"
                  onClick={clearFilters}
                >
                  View All Tools
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ==================================================
            CATEGORIES
        ================================================== */}

        <section
          className="categories-section py-5"
          id="categories"
          aria-labelledby="categories-heading"
        >
          <div className="container">
            <div className="text-center mb-5">
              <h2 id="categories-heading">
                Explore Categories
              </h2>

              <p>Find the right tool for your task.</p>
            </div>

            <div className="row g-4">
              {categories.map((category) => (
                <div
                  className="col-6 col-md-4 col-lg-2"
                  key={category.title}
                >
                  <button
                    type="button"
                    className={`category-card w-100 border-0 ${
                      selectedCategory === category.title
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      handleCategoryClick(
                        category.title
                      )
                    }
                    aria-pressed={
                      selectedCategory === category.title
                    }
                    aria-label={`Show ${category.title}`}
                  >
                    <div aria-hidden="true">
                      {category.icon}
                    </div>

                    {/* FIXED HEADING HIERARCHY */}
                    <h3 className="h6 mb-1">
                      {category.title}
                    </h3>

                    <small>
                      {
                        tools.filter(
                          (tool) =>
                            tool.category ===
                            category.title
                        ).length
                      }{" "}
                      Tools
                    </small>
                  </button>
                </div>
              ))}
            </div>

            {selectedCategory !== "All" && (
              <div className="text-center mt-4">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={clearFilters}
                >
                  Show All Categories
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

// ======================================================
// GLOBAL FOOTER
// ======================================================

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4 text-center text-md-start">
          {/* BRAND */}

          <div className="col-md-5">
            <h2>Toolora</h2>

            <p>
              Free, simple and useful online tools for
              everyday tasks. Compress, convert,
              calculate and generate without installing
              unnecessary software.
            </p>
          </div>

          {/* POPULAR TOOLS */}

          <div className="col-6 col-md-3">
            <h3>Popular Tools</h3>

            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/image-compressor">
                  Image Compressor
                </Link>
              </li>

              <li>
                <Link to="/pdf-compressor">
                  PDF Compressor
                </Link>
              </li>

              <li>
                <Link to="/jpg-to-png">
                  JPG to PNG
                </Link>
              </li>

              <li>
                <Link to="/word-counter">
                  Word Counter
                </Link>
              </li>

              <li>
                <Link to="/qr-code-generator">
                  QR Code Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* CALCULATORS */}

          <div className="col-6 col-md-2">
            <h3>Calculators</h3>

            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/percentage-calculator">
                  Percentage
                </Link>
              </li>

              <li>
                <Link to="/age-calculator">
                  Age Calculator
                </Link>
              </li>

              <li>
                <Link to="/bmi-calculator">
                  BMI Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY / LEGAL */}

          <div className="col-md-2">
            <h3>Company</h3>

            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <li>
                <Link to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/disclaimer">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* FOOTER BOTTOM */}

        <div className="border-top mt-4 pt-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <small>
                © {new Date().getFullYear()} Toolora.
                All rights reserved.
              </small>
            </div>

            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
              <small>Free Tools, Made Simple.</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ======================================================
// 404 PAGE
// ======================================================

function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for could not be found on Toolora."
        canonical="/404"
        noIndex={true}
      />

      <main className="container py-5 text-center">
        <h1 className="fw-bold">404</h1>

        <h2>Page Not Found</h2>

        <p className="text-muted">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="btn btn-primary px-4"
        >
          Back to Home
        </Link>
      </main>
    </>
  );
}

// ======================================================
// APP ROUTES
// ======================================================

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}

        <Route path="/" element={<Home />} />

        {/* IMAGE TOOLS */}

        <Route
          path="/image-compressor"
          element={
            <Suspense fallback={<PageLoader />}>
              <ImageCompressor />
            </Suspense>
          }
        />

        <Route
          path="/image-resizer"
          element={
            <Suspense fallback={<PageLoader />}>
              <ImageResizer />
            </Suspense>
          }
        />

        {/* CONVERTERS */}

        <Route
          path="/jpg-to-png"
          element={
            <Suspense fallback={<PageLoader />}>
              <JpgToPng />
            </Suspense>
          }
        />

        <Route
          path="/jpg-to-pdf"
          element={
            <Suspense fallback={<PageLoader />}>
              <JpgToPdf />
            </Suspense>
          }
        />

        <Route
          path="/pdf-to-jpg"
          element={
            <Suspense fallback={<PageLoader />}>
              <PdfToJpg />
            </Suspense>
          }
        />

        {/* PDF */}

        <Route
          path="/pdf-compressor"
          element={
            <Suspense fallback={<PageLoader />}>
              <PDFCompressor />
            </Suspense>
          }
        />

        {/* TEXT */}

        <Route
          path="/word-counter"
          element={
            <Suspense fallback={<PageLoader />}>
              <WordCounter />
            </Suspense>
          }
        />

        {/* DEVELOPER */}

        <Route
          path="/qr-code-generator"
          element={
            <Suspense fallback={<PageLoader />}>
              <QRCodeGenerator />
            </Suspense>
          }
        />

        {/* CALCULATORS */}

        <Route
          path="/percentage-calculator"
          element={
            <Suspense fallback={<PageLoader />}>
              <PercentageCalculator />
            </Suspense>
          }
        />

        <Route
          path="/age-calculator"
          element={
            <Suspense fallback={<PageLoader />}>
              <AgeCalculator />
            </Suspense>
          }
        />

        <Route
          path="/bmi-calculator"
          element={
            <Suspense fallback={<PageLoader />}>
              <BMICalculator />
            </Suspense>
          }
        />

        {/* COMPANY / LEGAL */}

        <Route
          path="/about"
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          }
        />

        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={<PageLoader />}>
              <PrivacyPolicy />
            </Suspense>
          }
        />

        <Route
          path="/disclaimer"
          element={
            <Suspense fallback={<PageLoader />}>
              <Disclaimer />
            </Suspense>
          }
        />

        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      {/* GLOBAL FOOTER */}

      <Footer />
    </BrowserRouter>
  );
}

export default App;

