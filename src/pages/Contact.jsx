import { useState } from "react";
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
        description="Contact Toolora for questions, feedback, suggestions or issues related to our free online tools."
        keywords="contact Toolora, Toolora contact, online tools support, Toolora support"
        canonical="/contact"
      />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">

            <div className="text-center mb-5">
              <h1 className="fw-bold">Contact Us</h1>

              <p className="text-muted mt-3">
                Have a question, suggestion or feedback? We'd love to hear
                from you.
              </p>
            </div>

            {submitted && (
              <div className="alert alert-success" role="alert">
                Thank you for contacting us. We have received your message.
              </div>
            )}

            <div className="row g-4">

              {/* Contact Information */}
              <div className="col-md-5">
                <div className="border rounded-4 p-4 h-100">
                  <h2 className="h4 fw-bold mb-4">
                    Get in Touch
                  </h2>

                  <p className="text-muted">
                    If you have questions about Toolora, find an issue with
                    one of our tools, or have an idea for a new tool, feel free
                    to contact us.
                  </p>

                  <div className="mt-4">
                    <h3 className="h6 fw-bold">Email</h3>

                    <p className="text-muted mb-0">
                      support@toolora.com
                    </p>
                  </div>

                  <div className="mt-4">
                    <h3 className="h6 fw-bold">Response Time</h3>

                    <p className="text-muted mb-0">
                      We aim to respond to genuine inquiries as soon as
                      possible.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-md-7">
                <div className="border rounded-4 p-4">
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
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

