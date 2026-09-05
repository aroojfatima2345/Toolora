import SEO from "../components/SEO";

function About() {
  return (
    <>
      <SEO
        title="About Toolora - Free Online Tools"
        description="Learn about Toolora, a free online tools platform providing simple and useful tools for images, PDFs, text, calculators and more."
        keywords="about Toolora, free online tools, online tools website, Toolora tools"
        canonical="/about"
      />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">

            <div className="text-center mb-5">
              <h1 className="fw-bold">About Toolora</h1>
              <p className="text-muted mt-3">
                Simple, fast and free online tools for everyday tasks.
              </p>
            </div>

            <section className="mb-4">
              <h2 className="fw-bold mb-3">What is Toolora?</h2>

              <p>
                Toolora is a free online tools platform designed to make
                everyday digital tasks easier. Our goal is to provide simple,
                useful and easy-to-use tools that anyone can access directly
                from their web browser.
              </p>

              <p>
                Toolora provides tools for image processing, PDF files, text,
                calculations, QR codes and other useful online tasks.
              </p>
            </section>

            <section className="mb-4">
              <h2 className="fw-bold mb-3">Our Mission</h2>

              <p>
                Our mission is to provide helpful online tools without making
                users deal with complicated software or unnecessary steps.
                We aim to keep our tools simple, accessible and convenient.
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
              </ul>
            </section>

            <section className="mb-4">
              <h2 className="fw-bold mb-3">Our Tools</h2>

              <p>
                Toolora currently offers a growing collection of online tools,
                including image compressors, image resizers, JPG and PNG
                converters, PDF tools, word counters, QR code generators and
                useful calculators.
              </p>

              <p>
                We plan to continue improving existing tools and adding more
                useful tools based on everyday user needs.
              </p>
            </section>

            <section>
              <h2 className="fw-bold mb-3">Our Commitment</h2>

              <p>
                We are committed to continuously improving Toolora and
                providing a better experience for our visitors. We value
                simplicity, usefulness and accessibility in everything we
                build.
              </p>

              <p>
                Thank you for using Toolora.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}

export default About;

