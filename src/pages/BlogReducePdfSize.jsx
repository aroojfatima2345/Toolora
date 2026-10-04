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

function BlogReducePdfSize() {
  return (
    <>
      <SEO
        title="How to Reduce PDF File Size Online"
        description="Learn how to reduce PDF file size online, why PDFs become large, and simple ways to compress PDFs for email, websites, applications, and sharing."
        keywords="reduce PDF file size, compress PDF, PDF compressor, how to compress PDF, smaller PDF, PDF compression online"
        canonical="/blog/how-to-reduce-pdf-file-size"
      />

      <div className="container py-4">
        {/* Top Advertisement */}
        <AdPlaceholder />

        {/* Back to Blog */}
        <div className="mb-4">
          <Link
            to="/blog"
            className="text-decoration-none"
            style={{
              color: "#6c5ce7",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            ← Back to Blog
          </Link>
        </div>

        <article
          className="mx-auto"
          style={{
            maxWidth: "900px",
          }}
        >
          {/* Header */}
          <header className="text-center mb-5">
            <span
              className="d-inline-block mb-3 px-3 py-1 rounded-pill"
              style={{
                background: "#f0eeff",
                color: "#6c5ce7",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              PDF Tools
            </span>

            <h1
              className="fw-bold mb-3"
              style={{
                color: "#172033",
                fontSize: "clamp(30px, 5vw, 48px)",
                lineHeight: "1.2",
              }}
            >
              How to Reduce PDF File Size Online
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
              Learn why PDF files can become large and how to reduce their
              size for easier uploading, sharing, emailing, and storage.
            </p>
          </header>

          {/* Introduction */}
          <section className="mb-5">
            <h2
              className="fw-bold mb-3"
              style={{ color: "#172033" }}
            >
              Why Do PDF Files Become Large?
            </h2>

            <p
              style={{
                color: "#667085",
                lineHeight: "1.9",
              }}
            >
              PDF files can contain much more than simple text. A document may
              include high-resolution images, scanned pages, embedded fonts,
              graphics, forms, and other data. All of these elements can
              increase the final file size.
            </p>

            <p
              style={{
                color: "#667085",
                lineHeight: "1.9",
              }}
            >
              A large PDF can be difficult to upload to websites, attach to
              emails, send through messaging applications, or store when
              storage space is limited.
            </p>
          </section>

          {/* Reasons */}
          <section className="mb-5">
            <h2
              className="fw-bold mb-3"
              style={{ color: "#172033" }}
            >
              Common Reasons for a Large PDF
            </h2>

            <ul
              style={{
                color: "#667085",
                lineHeight: "2",
              }}
            >
              <li>High-resolution photographs inside the PDF</li>
              <li>Scanned documents saved at high quality</li>
              <li>Large graphics or illustrations</li>
              <li>Embedded fonts and other document resources</li>
              <li>Multiple pages containing images</li>
              <li>Repeatedly edited or exported documents</li>
            </ul>
          </section>

          {/* Middle Advertisement */}
          <AdPlaceholder />

          {/* How to Compress */}
          <section className="mb-5">
            <h2
              className="fw-bold mb-3"
              style={{ color: "#172033" }}
            >
              How to Reduce PDF File Size
            </h2>

            <p
              style={{
                color: "#667085",
                lineHeight: "1.9",
              }}
            >
              The easiest approach for most users is to use a PDF compression
              tool. The tool processes the document and attempts to reduce
              unnecessary file data while keeping the document usable.
            </p>

            <h3
              className="fw-bold mt-4 mb-3"
              style={{
                color: "#172033",
                fontSize: "22px",
              }}
            >
              Step 1: Select Your PDF
            </h3>

            <p
              style={{
                color: "#667085",
                lineHeight: "1.9",
              }}
            >
              Start with the original PDF file. If possible, keep a backup of
              the original document before compression.
            </p>

            <h3
              className="fw-bold mt-4 mb-3"
              style={{
                color: "#172033",
                fontSize: "22px",
              }}
            >
              Step 2: Upload the PDF
            </h3>

            <p
              style={{
                color: "#667085",
                lineHeight: "1.9",
              }}
            >
              Upload the document to a PDF compression tool. The compression
              process may reduce image data and other elements that contribute
              to the file size.
            </p>

            <h3
              className="fw-bold mt-4 mb-3"
              style={{
                color: "#172033",
                fontSize: "22px",
              }}
            >
              Step 3: Download the Compressed PDF
            </h3>

            <p
              style={{
                color: "#667085",
                lineHeight: "1.9",
              }}
            >
              After compression, download the new PDF and check important
              pages, images, text, links, and formatting before sharing it.
            </p>
          </section>

          {/* Tool CTA */}
          <section
            className="rounded-4 p-4 p-md-5 mb-5"
            style={{
              background: "#f7f6ff",
              border: "1px solid #eceaf5",
            }}
          >
            <h2
              className="fw-bold mb-3"
              style={{ color: "#172033" }}
            >
              Compress Your PDF With Toolora
            </h2>

            <p
              className="mb-4"
              style={{
                color: "#667085",
                lineHeight: "1.8",
              }}
            >
              Toolora's PDF Compressor provides a simple way to reduce PDF
              file size directly from your browser.
            </p>

            <Link
              to="/pdf-compressor"
              className="btn px-4 py-2 rounded-pill fw-semibold"
              style={{
                background: "#6c5ce7",
                color: "#fff",
                border: "none",
              }}
            >
              Try PDF Compressor →
            </Link>
          </section>

          {/* Benefits */}
          <section className="mb-5">
            <h2
              className="fw-bold mb-3"
              style={{ color: "#172033" }}
            >
              Benefits of Compressing a PDF
            </h2>

            <div className="row g-4 mt-2">
              <div className="col-md-6">
                <div
                  className="h-100 rounded-4 p-4"
                  style={{
                    background: "#f7f6ff",
                    border: "1px solid #eceaf5",
                  }}
                >
                  <h3
                    className="fw-bold mb-2"
                    style={{
                      color: "#172033",
                      fontSize: "20px",
                    }}
                  >
                    Faster Uploads
                  </h3>

                  <p
                    className="mb-0"
                    style={{
                      color: "#667085",
                      lineHeight: "1.8",
                    }}
                  >
                    Smaller files can be uploaded more quickly when submitting
                    documents to websites and online forms.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="h-100 rounded-4 p-4"
                  style={{
                    background: "#f7f6ff",
                    border: "1px solid #eceaf5",
                  }}
                >
                  <h3
                    className="fw-bold mb-2"
                    style={{
                      color: "#172033",
                      fontSize: "20px",
                    }}
                  >
                    Easier Sharing
                  </h3>

                  <p
                    className="mb-0"
                    style={{
                      color: "#667085",
                      lineHeight: "1.8",
                    }}
                  >
                    Smaller PDFs are easier to send through email and
                    messaging platforms.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="h-100 rounded-4 p-4"
                  style={{
                    background: "#f7f6ff",
                    border: "1px solid #eceaf5",
                  }}
                >
                  <h3
                    className="fw-bold mb-2"
                    style={{
                      color: "#172033",
                      fontSize: "20px",
                    }}
                  >
                    Less Storage
                  </h3>

                  <p
                    className="mb-0"
                    style={{
                      color: "#667085",
                      lineHeight: "1.8",
                    }}
                  >
                    Reducing file size can help save storage space when you
                    keep many documents.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="h-100 rounded-4 p-4"
                  style={{
                    background: "#f7f6ff",
                    border: "1px solid #eceaf5",
                  }}
                >
                  <h3
                    className="fw-bold mb-2"
                    style={{
                      color: "#172033",
                      fontSize: "20px",
                    }}
                  >
                    Easier Emailing
                  </h3>

                  <p
                    className="mb-0"
                    style={{
                      color: "#667085",
                      lineHeight: "1.8",
                    }}
                  >
                    A smaller document can make it easier to stay within
                    attachment size limits.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Quality */}
          <section className="mb-5">
            <h2
              className="fw-bold mb-3"
              style={{ color: "#172033" }}
            >
              Does PDF Compression Reduce Quality?
            </h2>

            <p
              style={{
                color: "#667085",
                lineHeight: "1.9",
              }}
            >
              It can, depending on how aggressively the PDF is compressed.
              Image-heavy PDFs may show some changes when their embedded
              images are reduced in quality.
            </p>

            <p
              style={{
                color: "#667085",
                lineHeight: "1.9",
              }}
            >
              For important documents, always open and review the compressed
              PDF before deleting or replacing your original file.
            </p>
          </section>

          {/* Tips */}
          <section className="mb-5">
            <h2
              className="fw-bold mb-3"
              style={{ color: "#172033" }}
            >
              Tips for Better PDF Compression
            </h2>

            <ul
              style={{
                color: "#667085",
                lineHeight: "2",
              }}
            >
              <li>Keep a copy of the original PDF.</li>
              <li>Check important images after compression.</li>
              <li>Review text and page formatting.</li>
              <li>Make sure forms and links still work if they are important.</li>
              <li>Use moderate compression when document quality matters.</li>
              <li>Compress image-heavy PDFs when file size is the main issue.</li>
            </ul>
          </section>

          {/* When to Compress */}
          <section className="mb-5">
            <h2
              className="fw-bold mb-3"
              style={{ color: "#172033" }}
            >
              When Should You Compress a PDF?
            </h2>

            <p
              style={{
                color: "#667085",
                lineHeight: "1.9",
              }}
            >
              PDF compression is particularly useful when a website has a
              maximum upload size, when an email attachment is too large, or
              when you need to share a document quickly.
            </p>

            <div
              className="table-responsive mt-4"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #eceaf5",
              }}
            >
              <table className="table mb-0 align-middle">
                <thead style={{ background: "#f7f6ff" }}>
                  <tr>
                    <th>Situation</th>
                    <th>Why Compress?</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Online Application</td>
                    <td>Meet the website's file-size limit</td>
                  </tr>

                  <tr>
                    <td>Email</td>
                    <td>Make attachments easier to send</td>
                  </tr>

                  <tr>
                    <td>Website Upload</td>
                    <td>Reduce upload time</td>
                  </tr>

                  <tr>
                    <td>Cloud Storage</td>
                    <td>Save storage space</td>
                  </tr>

                  <tr>
                    <td>Messaging</td>
                    <td>Make sharing easier</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-5">
            <h2
              className="fw-bold mb-4"
              style={{ color: "#172033" }}
            >
              Frequently Asked Questions
            </h2>

            <div className="mb-4">
              <h3
                className="fw-bold mb-2"
                style={{
                  color: "#172033",
                  fontSize: "20px",
                }}
              >
                How can I make a PDF smaller?
              </h3>

              <p
                style={{
                  color: "#667085",
                  lineHeight: "1.8",
                }}
              >
                You can use a PDF compression tool to reduce unnecessary data
                and make the document smaller. Image-heavy PDFs often benefit
                significantly from compression.
              </p>
            </div>

            <div className="mb-4">
              <h3
                className="fw-bold mb-2"
                style={{
                  color: "#172033",
                  fontSize: "20px",
                }}
              >
                Will compressing a PDF delete my content?
              </h3>

              <p
                style={{
                  color: "#667085",
                  lineHeight: "1.8",
                }}
              >
                A properly designed compression process should preserve the
                document's main content, but some compression methods can
                affect image quality or certain document features. Always
                review the result before using it for important purposes.
              </p>
            </div>

            <div className="mb-4">
              <h3
                className="fw-bold mb-2"
                style={{
                  color: "#172033",
                  fontSize: "20px",
                }}
              >
                Can I compress a PDF without installing software?
              </h3>

              <p
                style={{
                  color: "#667085",
                  lineHeight: "1.8",
                }}
              >
                Yes. Browser-based PDF compression tools can be used without
                installing desktop software.
              </p>
            </div>
          </section>

          {/* Bottom Advertisement */}
          <AdPlaceholder />

          {/* Related Guides */}
          <section className="py-4">
            <h2
              className="fw-bold mb-4"
              style={{ color: "#172033" }}
            >
              Related Toolora Guides
            </h2>

            <div className="row g-3">
              <div className="col-md-6">
                <Link
                  to="/blog/how-to-compress-an-image"
                  className="text-decoration-none"
                >
                  <div
                    className="p-4 rounded-4 h-100"
                    style={{
                      background: "#f7f6ff",
                      border: "1px solid #eceaf5",
                    }}
                  >
                    <h3
                      className="fw-bold mb-2"
                      style={{
                        color: "#172033",
                        fontSize: "18px",
                      }}
                    >
                      How to Compress an Image
                    </h3>

                    <p
                      className="mb-0"
                      style={{
                        color: "#667085",
                        fontSize: "14px",
                        lineHeight: "1.7",
                      }}
                    >
                      Learn how to reduce image file size while keeping good
                      visual quality.
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col-md-6">
                <Link
                  to="/blog/jpg-vs-png"
                  className="text-decoration-none"
                >
                  <div
                    className="p-4 rounded-4 h-100"
                    style={{
                      background: "#f7f6ff",
                      border: "1px solid #eceaf5",
                    }}
                  >
                    <h3
                      className="fw-bold mb-2"
                      style={{
                        color: "#172033",
                        fontSize: "18px",
                      }}
                    >
                      JPG vs PNG
                    </h3>

                    <p
                      className="mb-0"
                      style={{
                        color: "#667085",
                        fontSize: "14px",
                        lineHeight: "1.7",
                      }}
                    >
                      Understand the difference between JPG and PNG and when
                      to use each format.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Back to Blog */}
          <div className="text-center py-4">
            <Link
              to="/blog"
              className="btn btn-outline-secondary px-4 py-2 rounded-pill fw-semibold"
            >
              ← Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}

export default BlogReducePdfSize;

