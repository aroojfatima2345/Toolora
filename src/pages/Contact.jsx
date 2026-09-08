
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSubmitted(false);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <SEO
        title="Contact Toolora - Get in Touch"
        description="Contact Toolora for questions, feedback, suggestions or issues related to our free online tools for images, PDFs, text, calculators and more."
        keywords="contact Toolora, Toolora contact, Toolora support, online tools support, free online tools support, Toolora feedback"
        canonical="/contact"
      />

      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <article>
              <header className="text-center mb-5">
                <h1 className="fw-bold">Contact Toolora</h1>

                <p className="text-muted mt-3">
                  Have a question, suggestion or feedback? We'd love to hear
                  from you.
                </p>
              </header>

              {submitted && (
                <div
                  className="alert alert-success mb-4"
                  role="status"
                  aria-live="polite"
                >
                  Thank you for your message. Your form has been submitted
                  successfully.
                </div>
              )}

              <div className="row g-4">
                {/* Contact Information */}
                <div className="col-md-5">
                  <section className="border rounded-4 p-4 h-100">
                    <h2 className="h4 fw-bold mb-4">
                      Get in Touch
                    </h2>

                    <p className="text-muted">
                      If you have a question about Toolora, experience an
                      issue with one of our tools, or have an idea for a new
                      tool, we'd be happy to hear your feedback.
                    </p>

                    <div className="mt-4">
                      <h3 className="h6 fw-bold">Email</h3>

                      <p className="mb-0">
                        <a href="mailto:support@toolora.com">
                          support@toolora.com
                        </a>
                      </p>
                    </div>

                    <div className="mt-4">
                      <h3 className="h6 fw-bold">Response Time</h3>

                      <p className="text-muted mb-0">
                        We aim to respond to genuine questions, feedback and
                        support requests as soon as possible.
                      </p>
                    </div>

                    <div className="mt-4">
                      <h3 className="h6 fw-bold">What Can You Contact Us About?</h3>

                      <ul className="text-muted mb-0 ps-3">
                        <li className="mb-2">
                          Questions about Toolora tools
                        </li>

                        <li className="mb-2">
                          Reporting a tool issue
                        </li>

                        <li className="mb-2">
                          Suggestions for new tools
                        </li>

                        <li>
                          General feedback
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>

                {/* Contact Form */}
                <div className="col-md-7">
                  <section className="border rounded-4 p-4">
                    <h2 className="h4 fw-bold mb-4">
                      Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label
                          htmlFor="name"
                          className="form-label fw-semibold"
                        >
                          Name
                        </label>

                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleChange}
                          autoComplete="name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="email"
                          className="form-label fw-semibold"
                        >
                          Email
                        </label>

                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="subject"
                          className="form-label fw-semibold"
                        >
                          Subject
                        </label>

                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          placeholder="Enter subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="message"
                          className="form-label fw-semibold"
                        >
                          Message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          className="form-control"
                          rows="6"
                          placeholder="Write your message..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                      >
                        Send Message
                      </button>
                    </form>
                  </section>
                </div>
              </div>

              <section className="mt-5">
                <h2 className="fw-bold mb-3">
                  Explore Toolora
                </h2>

                <p>
                  Looking for a specific online tool? Explore some of
                  Toolora's free tools:
                </p>

                <ul>
                  <li className="mb-2">
                    <Link to="/image-compressor">
                      Image Compressor
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link to="/pdf-compressor">
                      PDF Compressor
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
                </ul>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;

