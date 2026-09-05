import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Disclaimer() {
  return (
    <main className="compressor-page">

      <SEO
        title="Disclaimer - Toolora"
        description="Read Toolora's disclaimer to understand the limitations and proper use of our free online tools, calculators and converters."
        keywords="Toolora disclaimer, online tools disclaimer, calculator disclaimer, Toolora terms"
        canonical="/disclaimer"
      />

      <div className="container py-5">

        {/* Page Header */}
        <header className="text-center mb-5">

          <div className="hero-badge mb-3">
            📋 Legal Information
          </div>

          <h1 className="fw-bold">
            Disclaimer
          </h1>

          <p className="text-muted">
            Important information about using Toolora's online tools.
          </p>

        </header>


        {/* Disclaimer Content */}
        <article className="tool-information mx-auto">

          <h2>
            General Information
          </h2>

          <p>
            The information and tools provided on Toolora are
            intended for general informational and practical
            purposes only. While we aim to provide useful,
            accurate and reliable tools, we do not guarantee
            that every result or piece of information will be
            completely accurate, current or suitable for every
            individual situation.
          </p>


          <h2>
            Use of Our Online Tools
          </h2>

          <p>
            Toolora provides free online calculators, converters,
            generators and other digital tools. You are responsible
            for reviewing and verifying any result before using it
            for important decisions, official applications,
            financial matters, business purposes or other
            situations where accuracy is critical.
          </p>


          <h2>
            Calculator Disclaimer
          </h2>

          <p>
            Toolora's calculators are designed to provide general
            estimates based on the information entered by the user.
            Calculator results should not be considered professional
            advice or an official determination.
          </p>

          <p>
            In particular, health-related calculators such as the
            BMI Calculator are intended for general informational
            purposes and should not be used as a substitute for
            professional medical advice, diagnosis or treatment.
          </p>


          <h2>
            File and Conversion Tools
          </h2>

          <p>
            Toolora provides tools for tasks such as image
            compression, image conversion and PDF conversion.
            Results can vary depending on the original file,
            browser, file format and other technical factors.
          </p>

          <p>
            Users should keep their own backup copies of important
            files before processing them with any online tool.
          </p>


          <h2>
            No Professional Advice
          </h2>

          <p>
            Nothing on Toolora should be interpreted as legal,
            financial, medical, tax, investment or other
            professional advice.
          </p>

          <p>
            If you require professional advice, you should consult
            a qualified professional who can evaluate your specific
            circumstances.
          </p>


          <h2>
            Third-Party Websites
          </h2>

          <p>
            Toolora may contain links to third-party websites or
            services. These external websites are not controlled
            by Toolora, and we are not responsible for their
            content, availability, privacy practices or policies.
          </p>

          <p>
            You should review the terms and privacy policies of
            third-party websites before using them.
          </p>


          <h2>
            Advertising and External Services
          </h2>

          <p>
            Toolora may display advertisements or use third-party
            services in the future to support the operation and
            maintenance of the website.
          </p>

          <p>
            The presence of an advertisement or third-party service
            does not necessarily mean that Toolora endorses or
            guarantees the advertised product or service.
          </p>


          <h2>
            Limitation of Liability
          </h2>

          <p>
            To the extent permitted by applicable law, Toolora is
            not responsible for any loss, damage or inconvenience
            resulting from the use of, or reliance on, information,
            calculations, conversions or other results provided
            through the website.
          </p>


          <h2>
            Changes to This Disclaimer
          </h2>

          <p>
            Toolora may update or modify this Disclaimer from time
            to time. Any changes will be reflected on this page.
            We recommend reviewing this page periodically for the
            latest information.
          </p>


          <h2>
            Contact Us
          </h2>

          <p>
            If you have questions about this Disclaimer, you can
            contact us through our{" "}
            <Link to="/contact">
              Contact page
            </Link>.
          </p>


          {/* Related Legal Pages */}
          <h2>
            Related Pages
          </h2>

          <ul>

            <li>
              <Link to="/about">
                About Toolora
              </Link>
            </li>

            <li>
              <Link to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact Us
              </Link>
            </li>

          </ul>

        </article>

      </div>

    </main>
  );
}

export default Disclaimer;

