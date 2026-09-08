
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function PrivacyPolicy() {
  return (
    <main className="compressor-page">
      <SEO
        title="Privacy Policy - Toolora"
        description="Read Toolora's Privacy Policy to understand how information may be collected, used and protected when you use our free online tools."
        keywords="Toolora privacy policy, Toolora privacy, online tools privacy policy, free online tools privacy, data privacy"
        canonical="/privacy-policy"
      />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <article>
              <header className="text-center mb-5">
                <h1 className="fw-bold">
                  Privacy Policy
                </h1>

                <p className="text-muted mt-3">
                  Your privacy is important to us.
                </p>
              </header>

              <section className="mb-4">
                <h2 className="h4 fw-bold mb-3">
                  Introduction
                </h2>

                <p>
                  Welcome to Toolora. This Privacy Policy explains how
                  information may be collected, used and protected when you
                  visit and use our website and online tools.
                </p>

                <p>
                  We aim to keep data collection as limited as reasonably
                  possible while providing useful, reliable and convenient
                  online tools.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 fw-bold mb-3">
                  Information We Collect
                </h2>

                <p>
                  Toolora is designed to provide useful online tools with
                  minimal data collection. Some tools may process files or
                  information that you voluntarily provide in order to perform
                  the requested task.
                </p>

                <p>
                  Depending on how the website and its services are configured,
                  we may receive basic technical information such as browser
                  type, device type, IP address, approximate location, pages
                  visited and general usage information through standard
                  website technologies and third-party services.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 fw-bold mb-3">
                  How We Use Information
                </h2>

                <p>
                  Information may be used for purposes such as:
                </p>

                <ul>
                  <li className="mb-2">
                    Providing and operating our online tools.
                  </li>

                  <li className="mb-2">
                    Improving website performance and user experience.
                  </li>

                  <li className="mb-2">
                    Understanding how visitors use our website.
                  </li>

                  <li className="mb-2">
                    Identifying and resolving technical problems.
                  </li>

                  <li className="mb-2">
                    Protecting the website against abuse and security threats.
                  </li>
                </ul>
              </section>

              <section className="mb-4">
                <h2 className="h4 fw-bold mb-3">
                  Files and User Content
                </h2>

                <p>
                  Some Toolora tools allow users to provide files, such as
                  images or PDF documents, for processing.
                </p>

                <p>
                  Where a tool performs processing directly in the user's
                  browser, the selected file may be processed locally without
                  intentionally being uploaded to Toolora's servers.
                </p>

                <p>
                  However, users should review the behavior of the specific
                  tool before submitting sensitive, confidential or important
                  files.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 fw-bold mb-3">
                  Cookies and Similar Technologies
                </h2>

                <p>
                  Toolora or third-party services used on the website may use
                  cookies and similar technologies to provide functionality,
                  understand website usage, remember preferences or support
                  advertising.
                </p>

                <p>
                  You can manage or disable cookies through your browser
                  settings. Disabling certain cookies may affect some website
                  functionality.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 fw-bold mb-3">
                  Third-Party Services
                </h2>

                <p>
                  Toolora may use third-party services for purposes such as
                  hosting, analytics, advertising, security or other website
                  functionality.
                </p>

                <p>
                  These third-party providers may collect or process
                  information according to their own privacy policies and
                  terms. We recommend reviewing the privacy policies of any
                  third-party services you interact with through Toolora.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 fw-bold mb-3">
                  Advertising
                </h2>

                <p>
                  Toolora may display advertisements from third-party
                  advertising providers in the future. Advertising providers
                  may use cookies or similar technologies to provide, measure
                  and improve advertisements.
                </p>

                <p>
                  When advertising services are enabled on Toolora, additional
                  information about applicable advertising providers and their
                  privacy practices may be provided where required.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 fw-bold mb-3">
                  Data Security
                </h2>

                <p>
                  We take reasonable measures to help protect information
                  associated with the website. However, no method of
                  transmission over the internet or electronic storage can be
                  guaranteed to be completely secure.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 fw-bold mb-3">
                  Children's Privacy
                </h2>

                <p>
                  Toolora is not specifically directed toward children under
                  the age of 13. We do not knowingly collect personal
                  information from children in circumstances where applicable
                  laws require parental consent or prohibit such collection.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 fw-bold mb-3">
                  External Links
                </h2>

                <p>
                  Toolora may contain links to external websites or services.
                  We are not responsible for the privacy practices, content or
                  security of third-party websites.
                </p>

                <p>
                  We recommend reviewing the privacy policy of any external
                  website before providing personal information.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 fw-bold mb-3">
                  Changes to This Privacy Policy
                </h2>

                <p>
                  We may update this Privacy Policy from time to time to
                  reflect changes to our website, services, technology or
                  applicable legal requirements.
                </p>

                <p>
                  Any updates will be published on this page. We recommend
                  reviewing this page periodically for the latest information.
                </p>
              </section>

              <section>
                <h2 className="h4 fw-bold mb-3">
                  Contact Us
                </h2>

                <p>
                  If you have questions about this Privacy Policy, you can
                  contact us through our{" "}
                  <Link to="/contact">
                    Contact Us
                  </Link>{" "}
                  page.
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;

