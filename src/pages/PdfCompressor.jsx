import { useState } from "react";
import { Link } from "react-router-dom";
import { PDFDocument } from "pdf-lib";
import SEO from "../components/SEO";

function PdfCompressor() {
  const [file, setFile] = useState(null);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [isCompressing, setIsCompressing] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      alert("Please select a PDF file.");
      return;
    }

    setFile(selectedFile);
    setOriginalSize(selectedFile.size);
    setCompressedSize(0);
    setDownloadUrl("");
  };

  const compressPDF = async () => {
    if (!file) {
      return;
    }

    try {
      setIsCompressing(true);

      const arrayBuffer = await file.arrayBuffer();

      const pdfDoc = await PDFDocument.load(arrayBuffer);

      const compressedPdf = await pdfDoc.save({
        useObjectStreams: true,
      });

      const blob = new Blob(
        [compressedPdf],
        {
          type: "application/pdf",
        }
      );

      const url = URL.createObjectURL(blob);

      setDownloadUrl(url);
      setCompressedSize(blob.size);
      setIsCompressing(false);

    } catch (error) {
      console.error(error);

      alert(
        "Unable to process this PDF. Please try another PDF file."
      );

      setIsCompressing(false);
    }
  };

  const downloadPDF = () => {
    if (!downloadUrl) {
      return;
    }

    const link = document.createElement("a");

    link.href = downloadUrl;
    link.download = "toolora-compressed.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const removeFile = () => {
    setFile(null);
    setOriginalSize(0);
    setCompressedSize(0);
    setDownloadUrl("");
    setIsCompressing(false);
  };

  const savedPercentage =
    originalSize > 0 && compressedSize > 0
      ? (
          ((originalSize - compressedSize) /
            originalSize) *
          100
        ).toFixed(1)
      : 0;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a PDF compressor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A PDF compressor is a tool that processes a PDF document to reduce or optimize its file size while keeping the document usable.",
        },
      },
      {
        "@type": "Question",
        name: "Is Toolora PDF Compressor free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora's PDF compressor is available as a free online PDF processing tool.",
        },
      },
      {
        "@type": "Question",
        name: "Can I compress a large PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can upload a large PDF and try processing it. The amount of size reduction depends on how the original PDF was created and optimized.",
        },
      },
      {
        "@type": "Question",
        name: "Does PDF compression delete pages or text?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Toolora's PDF compression process does not intentionally delete pages or text. It processes the PDF structure to optimize the resulting document.",
        },
      },
      {
        "@type": "Question",
        name: "Will every PDF become smaller after compression?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Some PDFs are already highly optimized, so processing may result in little or no reduction in file size.",
        },
      },
    ],
  };

  return (
    <div className="compressor-page">

      <SEO
        title="PDF Compressor Online - Compress PDF Files Free"
        description="Compress and optimize PDF files online for free. Reduce PDF file size with Toolora's simple browser-based PDF compressor."
        keywords="PDF compressor, compress PDF, compress PDF online, PDF file compressor, reduce PDF size, PDF optimizer, free PDF compressor, compress PDF file"
        canonical="/pdf-compressor"
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="container py-5">

        <header className="text-center mb-5">

          <div className="hero-badge mb-3">
            📄 Free PDF Tool
          </div>

          <h1 className="fw-bold">
            PDF Compressor Online
          </h1>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Compress and optimize PDF files online for free.
            Reduce PDF file size when possible and download
            the processed PDF directly from your browser.
          </p>

        </header>

        <main>

          <section
            className="compressor-box mx-auto"
            aria-label="PDF compressor tool"
          >

            {!file && (
              <label className="upload-area">

                <div className="upload-icon">
                  📄
                </div>

                <h2 className="h4">
                  Upload Your PDF
                </h2>

                <p>
                  Select a PDF file to optimize.
                </p>

                <span className="upload-btn">
                  Choose PDF
                </span>

                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  aria-label="Choose a PDF file to compress"
                  hidden
                />

              </label>
            )}

            {file && (
              <div>

                <div className="file-info">

                  <p>
                    <strong>File:</strong>{" "}
                    {file.name}
                  </p>

                  <p>
                    <strong>Original Size:</strong>{" "}
                    {(originalSize / 1024).toFixed(2)} KB
                  </p>

                  {compressedSize > 0 && (
                    <>
                      <p>
                        <strong>Compressed Size:</strong>{" "}
                        {(compressedSize / 1024).toFixed(2)} KB
                      </p>

                      <p>
                        <strong>Saved:</strong>{" "}
                        {savedPercentage}%
                      </p>
                    </>
                  )}

                </div>

                <div className="d-flex gap-3 justify-content-center flex-wrap">

                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={compressPDF}
                    disabled={isCompressing}
                  >
                    {isCompressing
                      ? "Compressing..."
                      : "Compress PDF"}
                  </button>

                  {downloadUrl && (
                    <button
                      type="button"
                      className="btn btn-success px-4"
                      onClick={downloadPDF}
                    >
                      Download PDF
                    </button>
                  )}

                  <button
                    type="button"
                    className="btn btn-outline-danger px-4"
                    onClick={removeFile}
                  >
                    Remove
                  </button>

                </div>

              </div>
            )}

          </section>

          <article className="tool-information mx-auto mt-5">

            <section>

              <h2>
                Free PDF Compressor Online
              </h2>

              <p>
                Toolora's free PDF compressor lets you process
                PDF documents directly in your browser. The tool
                optimizes the internal PDF structure and creates
                a processed PDF that you can download.
              </p>

              <p>
                Compressing a PDF can be useful when you need
                to upload, email, share or store a document and
                want to reduce its file size where possible.
              </p>

            </section>

            <section className="mt-4">

              <h2>
                How to Compress a PDF Online
              </h2>

              <p>
                Follow these simple steps to compress a PDF:
              </p>

              <ol>

                <li>
                  Click <strong>Choose PDF</strong> and select
                  your PDF document.
                </li>

                <li>
                  Click <strong>Compress PDF</strong>.
                </li>

                <li>
                  Wait while Toolora processes the PDF.
                </li>

                <li>
                  Check the original and processed file sizes.
                </li>

                <li>
                  Click <strong>Download PDF</strong> to save
                  the processed document.
                </li>

              </ol>

            </section>

            <section className="mt-4">

              <h2>
                Why Compress a PDF?
              </h2>

              <p>
                Large PDF files can sometimes be difficult to
                upload, send or store. Reducing the file size
                can make a document more convenient to work with.
              </p>

              <ul>

                <li>
                  Reduce PDF file size when possible.
                </li>

                <li>
                  Make documents easier to upload.
                </li>

                <li>
                  Make PDFs easier to share by email or online.
                </li>

                <li>
                  Help with file-size restrictions on websites
                  and online forms.
                </li>

                <li>
                  Reduce storage requirements when compression
                  is effective.
                </li>

              </ul>

            </section>

            <section className="mt-4">

              <h2>
                Will Every PDF Become Smaller?
              </h2>

              <p>
                Not necessarily. PDF documents can be created
                and optimized in different ways. Some PDFs are
                already highly optimized, so processing them may
                produce little or no reduction in file size.
              </p>

              <p>
                PDFs containing certain types of content,
                especially already-compressed images, may not
                become significantly smaller using structural
                PDF optimization alone.
              </p>

            </section>

            <section className="mt-4">

              <h2>
                How Does Toolora PDF Compression Work?
              </h2>

              <p>
                Toolora uses browser-based PDF processing to
                optimize the internal structure of your PDF.
                The tool creates a processed PDF without
                intentionally removing pages or text.
              </p>

              <p>
                The amount of file-size reduction depends on
                the structure and contents of the original
                document. Some files may show a noticeable
                reduction while others may change very little.
              </p>

            </section>

            <section className="mt-4">

              <h2>
                PDF Compression and Image Quality
              </h2>

              <p>
                PDF compression can work in different ways.
                Some compression tools reduce image resolution
                or re-encode images to achieve a much smaller
                file size.
              </p>

              <p>
                Toolora's current PDF compressor focuses on
                PDF structural optimization rather than
                aggressive image re-encoding. As a result,
                image-heavy PDFs may not receive a large size
                reduction.
              </p>

            </section>

            <section className="mt-4">

              <h2>
                Compress PDF Files in Your Browser
              </h2>

              <p>
                Toolora provides a convenient browser-based
                way to process PDF documents. You can select
                your PDF, start the compression process and
                download the resulting file without installing
                a separate PDF compression application.
              </p>

              <p>
                A modern browser with JavaScript enabled is
                required to use the online PDF compressor.
              </p>

            </section>

            <section className="mt-4">

              <h2>
                Is Toolora PDF Compressor Free?
              </h2>

              <p>
                Yes. Toolora's PDF compressor is available as
                a free online tool. Upload a PDF, process it
                and download the resulting document.
              </p>

            </section>

            <section className="mt-5">

              <h2>
                Frequently Asked Questions
              </h2>

              <h3 className="mt-4">
                What is a PDF compressor?
              </h3>

              <p>
                A PDF compressor is a tool that processes a PDF
                document to reduce or optimize its file size
                while keeping the document usable.
              </p>

              <h3 className="mt-4">
                Is Toolora PDF Compressor free?
              </h3>

              <p>
                Yes. Toolora's PDF compressor is available as
                a free online PDF processing tool.
              </p>

              <h3 className="mt-4">
                Can I compress a large PDF?
              </h3>

              <p>
                You can upload a large PDF and try processing
                it. The amount of size reduction depends on
                how the original PDF was created and optimized.
              </p>

              <h3 className="mt-4">
                Does PDF compression delete pages or text?
              </h3>

              <p>
                Toolora's compression process does not
                intentionally delete pages or text from your
                PDF. Its purpose is to optimize the PDF
                structure.
              </p>

              <h3 className="mt-4">
                Will every PDF become smaller?
              </h3>

              <p>
                No. Some PDFs are already highly optimized,
                so processing may result in little or no
                reduction in file size.
              </p>

            </section>

            <section className="mt-5">

              <h2>
                Related PDF & Image Tools
              </h2>

              <p>
                Try these other free Toolora tools for working
                with PDF and image files:
              </p>

              <div className="d-flex flex-wrap gap-3 mt-3">

                <Link
                  to="/jpg-to-pdf"
                  className="btn btn-outline-primary"
                >
                  JPG to PDF →
                </Link>

                <Link
                  to="/pdf-to-jpg"
                  className="btn btn-outline-primary"
                >
                  PDF to JPG →
                </Link>

                <Link
                  to="/image-compressor"
                  className="btn btn-outline-primary"
                >
                  Image Compressor →
                </Link>

                <Link
                  to="/image-resizer"
                  className="btn btn-outline-primary"
                >
                  Image Resizer →
                </Link>

              </div>

            </section>

          </article>

        </main>

      </div>

    </div>
  );
}

export default PdfCompressor;

