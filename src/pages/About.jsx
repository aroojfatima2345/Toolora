
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function About() {
  return (
    <>
      <SEO
        title="About Toolora - Free Online Tools"
        description="Learn about Toolora, a free online tools platform offering simple and useful tools for images, PDFs, text, calculations, QR codes and more."
        keywords="about Toolora, free online tools, online tools website, Toolora tools, free web tools, online utility tools"
        canonical="/about"
      />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <article>
              <header className="text-center mb-5">
                <h1 className="fw-bold">About Toolora</h1>

                <p className="text-muted mt-3">
                  Simple, fast and free online tools for everyday tasks.
                </p>
              </header>

              <section className="mb-4">
                <h2 className="fw-bold mb-3">What is Toolora?</h2>

                <p>
                  Toolora is a free online tools platform designed to make
                  everyday digital tasks easier. Our goal is to provide
                  simple, useful and easy-to-use tools that anyone can access
                  directly from a modern web browser.
                </p>

                <p>
                  Toolora provides online tools for image processing, PDF
                  files, text, calculations, QR codes and other common
                  digital tasks.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="fw-bold mb-3">Our Mission</h2>

                <p>
                  Our mission is to provide helpful online tools without
                  making users deal with complicated software or unnecessary
                  steps. We aim to keep Toolora simple, accessible, fast and
                  convenient for everyday use.
                </p>
              </section>

              <section className="mb-4">
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
                    Convenient tools available online
                  </li>
                </ul>
              </section>

              <section className="mb-4">
                <h2 className="fw-bold mb-3">Our Tools</h2>

                <p>
                  Toolora offers a growing collection of online tools,
                  including image compressors, image resizers, JPG and PNG
                  converters, PDF tools, word counters, QR code generators
                  and useful calculators.
                </p>

                <p>
                  You can explore some of our tools below:
                </p>

                <ul>
                  <li className="mb-2">
                    <Link to="/image-compressor">
                      Image Compressor
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link to="/image-resizer">
                      Image Resizer
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link to="/pdf-compressor">
                      PDF Compressor
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link to="/jpg-to-png">
                      JPG to PNG Converter
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link to="/word-counter">
                      Word Counter
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link to="/qr-code-generator">
                      QR Code Generator
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link to="/percentage-calculator">
                      Percentage Calculator
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link to="/age-calculator">
                      Age Calculator
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link to="/bmi-calculator">
                      BMI Calculator
                    </Link>
                  </li>
                </ul>

                <p>
                  We plan to continue improving our existing tools and adding
                  more useful online tools based on everyday user needs.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="fw-bold mb-3">
                  Simple and Convenient Online Tools
                </h2>

                <p>
                  Toolora is built with simplicity in mind. Whether you need
                  to compress an image, convert a file, count words,
                  calculate a percentage or generate a QR code, our goal is
                  to make the process quick and straightforward.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="fw-bold mb-3">
                  Browser-Based Tools
                </h2>

                <p>
                  Many Toolora tools are designed to process your files or
                  information directly in your web browser. This helps make
                  everyday tasks convenient without requiring additional
                  software installation.
                </p>
              </section>

              <section>
                <h2 className="fw-bold mb-3">Our Commitment</h2>

                <p>
                  We are committed to continuously improving Toolora and
                  providing a better experience for our visitors. We value
                  simplicity, usefulness, accessibility and convenience in
                  everything we build.
                </p>

                <p>
                  Thank you for using Toolora.
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

