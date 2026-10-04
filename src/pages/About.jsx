
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

function About() {
  return (
    <>
      <SEO
        title="About Toolora - Free Online Tools"
        description="Learn about Toolora, a free online tools platform offering simple and useful tools for images, PDFs, text, calculations, QR codes and more."
        keywords="about Toolora, free online tools, online tools website, Toolora tools, free web tools, online utility tools, free online utilities"
        canonical="/about"
      />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <article>
              {/* Header */}
              <header className="text-center mb-5">
                <h1 className="fw-bold">About Toolora</h1>

                <p className="text-muted mt-3 mb-0">
                  Simple, fast and free online tools for everyday digital
                  tasks.
                </p>
              </header>

              {/* Ad 1 */}
              <AdPlaceholder />

              {/* What is Toolora */}
              <section className="mb-5">
                <h2 className="fw-bold mb-3">What is Toolora?</h2>

                <p>
                  Toolora is a free online tools platform created to make
                  everyday digital tasks easier, faster and more convenient.
                  Our goal is to provide simple and useful tools that anyone
                  can access directly from a modern web browser.
                </p>

                <p>
                  Toolora offers online tools for working with images, PDF
                  files, text, calculations, QR codes and other common digital
                  tasks. We focus on keeping our tools easy to understand so
                  users can complete common tasks without complicated software
                  or unnecessary steps.
                </p>
              </section>

              {/* Mission */}
              <section className="mb-5">
                <h2 className="fw-bold mb-3">Our Mission</h2>

                <p>
                  Our mission is to provide helpful online utilities that are
                  simple, accessible and convenient. We want Toolora to be a
                  useful destination for people who need quick solutions for
                  everyday digital tasks.
                </p>

                <p>
                  Instead of installing separate applications for simple
                  tasks, users can access many useful utilities directly
                  through Toolora.
                </p>
              </section>

              {/* Why Toolora */}
              <section className="mb-5">
                <h2 className="fw-bold mb-3">Why Use Toolora?</h2>

                <ul>
                  <li className="mb-2">
                    Free and easy-to-use online tools
                  </li>

                  <li className="mb-2">
                    No complicated software installation
                  </li>

                  <li className="mb-2">
                    Simple and user-friendly interface
                  </li>

                  <li className="mb-2">
                    Useful tools for everyday digital tasks
                  </li>

                  <li className="mb-2">
                    Accessible from modern web browsers
                  </li>

                  <li className="mb-2">
                    A growing collection of practical online utilities
                  </li>
                </ul>
              </section>

              {/* Tools */}
              <section className="mb-5">
                <h2 className="fw-bold mb-3">Our Online Tools</h2>

                <p>
                  Toolora provides a growing collection of free online tools
                  covering several common categories, including image tools,
                  PDF tools, text utilities, converters, QR code tools and
                  calculators.
                </p>

                <p>
                  Explore some of our most useful tools below:
                </p>

                <ul>
                  <li className="mb-2">
                    <Link to="/image-compressor">
                      Image Compressor
                    </Link>{" "}
                    – reduce image file size while keeping images useful for
                    everyday sharing and websites.
                  </li>

                  <li className="mb-2">
                    <Link to="/image-resizer">
                      Image Resizer
                    </Link>{" "}
                    – resize JPG, PNG and WebP images to the dimensions you
                    need.
                  </li>

                  <li className="mb-2">
                    <Link to="/background-remover">
                      Background Remover
                    </Link>{" "}
                    – remove image backgrounds online and create transparent
                    images.
                  </li>

                  <li className="mb-2">
                    <Link to="/pdf-compressor">
                      PDF Compressor
                    </Link>{" "}
                    – reduce PDF file size for easier sharing and storage.
                  </li>

                  <li className="mb-2">
                    <Link to="/jpg-to-png">
                      JPG to PNG Converter
                    </Link>{" "}
                    – convert JPG and JPEG images to PNG format.
                  </li>

                  <li className="mb-2">
                    <Link to="/jpg-to-pdf">
                      JPG to PDF Converter
                    </Link>{" "}
                    – convert one or multiple JPG images into a PDF.
                  </li>

                  <li className="mb-2">
                    <Link to="/pdf-to-jpg">
                      PDF to JPG Converter
                    </Link>{" "}
                    – convert PDF pages into JPG images.
                  </li>

                  <li className="mb-2">
                    <Link to="/word-counter">
                      Word Counter
                    </Link>{" "}
                    – count words, characters, sentences and paragraphs.
                  </li>

                  <li className="mb-2">
                    <Link to="/qr-code-generator">
                      QR Code Generator
                    </Link>{" "}
                    – create downloadable QR codes for URLs, text and other
                    information.
                  </li>

                  <li className="mb-2">
                    <Link to="/percentage-calculator">
                      Percentage Calculator
                    </Link>{" "}
                    – calculate percentages, increases and decreases.
                  </li>

                  <li className="mb-2">
                    <Link to="/age-calculator">
                      Age Calculator
                    </Link>{" "}
                    – calculate your age in years, months and days.
                  </li>

                  <li className="mb-2">
                    <Link to="/bmi-calculator">
                      BMI Calculator
                    </Link>{" "}
                    – calculate Body Mass Index using height and weight.
                  </li>
                </ul>

                <p>
                  We plan to continue improving our existing tools and adding
                  more useful online utilities based on everyday user needs.
                </p>
              </section>

              {/* Ad 2 */}
              <AdPlaceholder />

              {/* Simple and Convenient */}
              <section className="mb-5">
                <h2 className="fw-bold mb-3">
                  Simple and Convenient Online Tools
                </h2>

                <p>
                  Toolora is built with simplicity in mind. Whether you need
                  to compress an image, resize a photo, convert a file, count
                  words, calculate a percentage or generate a QR code, our
                  goal is to make the process quick and straightforward.
                </p>

                <p>
                  We focus on clear interfaces and practical features so users
                  can find what they need without dealing with unnecessary
                  complexity.
                </p>
              </section>

              {/* Browser Based */}
              <section className="mb-5">
                <h2 className="fw-bold mb-3">Browser-Based Tools</h2>

                <p>
                  Many Toolora tools are designed to work directly in your web
                  browser. This makes common digital tasks convenient without
                  requiring users to install additional software.
                </p>

                <p>
                  Depending on the tool, processing may happen directly in the
                  browser. This can make simple tasks faster and more
                  convenient while keeping the user experience straightforward.
                </p>
              </section>

              {/* Growing Platform */}
              <section className="mb-5">
                <h2 className="fw-bold mb-3">
                  A Growing Collection of Free Tools
                </h2>

                <p>
                  Toolora is continuously evolving. We are working to expand
                  the platform with more useful tools for images, documents,
                  text, calculations, conversions and other everyday digital
                  needs.
                </p>

                <p>
                  Our aim is to build a practical collection of free online
                  utilities that people can return to whenever they need a
                  quick digital solution.
                </p>
              </section>

              {/* Commitment */}
              <section>
                <h2 className="fw-bold mb-3">Our Commitment</h2>

                <p>
                  We are committed to continuously improving Toolora and
                  providing a better experience for our visitors. We value
                  simplicity, usefulness, accessibility and convenience in
                  everything we build.
                </p>

                <p>
                  Thank you for using Toolora and being part of our growing
                  platform.
                </p>
              </section>

              {/* Ad 3 */}
              <AdPlaceholder />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

