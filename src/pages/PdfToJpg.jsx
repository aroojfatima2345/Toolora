import { useState } from "react";
import { Link } from "react-router-dom";
import * as pdfjsLib from "pdfjs-dist";
import { GlobalWorkerOptions } from "pdfjs-dist";

import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import SEO from "../components/SEO";

GlobalWorkerOptions.workerSrc = workerSrc;

function PdfToJpg() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState([]);
  const [isConverting, setIsConverting] = useState(false);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a PDF to JPG converter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A PDF to JPG converter turns PDF pages into JPG image files. Each PDF page can be converted into a separate JPG image.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Toolora PDF to JPG converter free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora's PDF to JPG converter is free to use online.",
        },
      },
      {
        "@type": "Question",
        name: "Can I convert all PDF pages to JPG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora converts the pages of the selected PDF into separate JPG images that you can download individually or together.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download individual PDF pages as JPG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. After conversion, you can download each PDF page as an individual JPG image.",
        },
      },
      {
        "@type": "Question",
        name: "Are my PDF files uploaded to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The conversion is performed in your browser using the web application. The selected PDF is used by the browser to render its pages as JPG images.",
        },
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Toolora PDF to JPG Converter",
    url: "https://toolora-inky.vercel.app/pdf-to-jpg",
    description:
      "Free online PDF to JPG converter for converting PDF pages into JPG images directly in your browser.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements:
      "Requires JavaScript and a modern web browser.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      alert("Please select a PDF file.");
      event.target.value = "";
      return;
    }

    setFile(selectedFile);
    setImages([]);
  };

  const convertPdfToJpg = async () => {
    if (!file) {
      return;
    }

    try {
      setIsConverting(true);

      const arrayBuffer = await file.arrayBuffer();

      const pdf = await pdfjsLib.getDocument({
        data: arrayBuffer,
      }).promise;

      const convertedImages = [];

      for (
        let pageNumber = 1;
        pageNumber <= pdf.numPages;
        pageNumber++
      ) {
        const page = await pdf.getPage(pageNumber);

        const scale = 1.5;

        const viewport = page.getViewport({
          scale,
        });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        if (!context) {
          throw new Error("Unable to create canvas context.");
        }

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: context,
          viewport,
        }).promise;

        const imageUrl = canvas.toDataURL(
          "image/jpeg",
          0.9
        );

        convertedImages.push({
          page: pageNumber,
          url: imageUrl,
        });

        // Release canvas memory after generating the image.
        canvas.width = 0;
        canvas.height = 0;
      }

      setImages(convertedImages);
    } catch (error) {
      console.error(error);

      alert(
        "Unable to convert this PDF. Please try another PDF file."
      );
    } finally {
      setIsConverting(false);
    }
  };

  const downloadImage = (image, pageNumber) => {
    const link = document.createElement("a");

    link.href = image.url;
    link.download = `toolora-page-${pageNumber}.jpg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAllImages = () => {
    if (images.length === 0) {
      return;
    }

    images.forEach((image, index) => {
      setTimeout(() => {
        downloadImage(image, index + 1);
      }, index * 300);
    });
  };

  const removeFile = () => {
    setFile(null);
    setImages([]);
    setIsConverting(false);
  };

  return (
    <div className="compressor-page">
      <SEO
        title="PDF to JPG Converter Online - Convert PDF Pages to JPG"
        description="Convert PDF pages to JPG images online for free with Toolora. Turn every PDF page into a JPG image, preview the results, and download pages individually or together."
        keywords="PDF to JPG, PDF to JPG converter, convert PDF to JPG, PDF to image, PDF page to JPG, PDF pages to JPG, free PDF to JPG, online PDF to JPG converter, convert PDF pages to JPG"
        canonical="/pdf-to-jpg"
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(webAppSchema)}
      </script>

      <div className="container py-5">
        <header className="text-center mb-5">
          <div className="hero-badge mb-3">
            🖼️ Free Converter Tool
          </div>

          <h1 className="fw-bold">
            PDF to JPG Converter Online
          </h1>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Convert PDF pages into JPG images online for
            free. Preview your converted pages and download
            individual JPG files or all pages.
          </p>
        </header>

        <main>
          <section
            className="compressor-box mx-auto"
            aria-label="PDF to JPG converter tool"
          >
            {!file && (
              <label
                className="upload-area"
                htmlFor="pdf-jpg-upload"
              >
                <div
                  className="upload-icon"
                  aria-hidden="true"
                >
                  📄
                </div>

                <h2 className="h4">
                  Upload Your PDF
                </h2>

                <p>
                  Select a PDF file to convert its pages
                  into JPG images.
                </p>

                <span className="upload-btn">
                  Choose PDF
                </span>

                <input
                  id="pdf-jpg-upload"
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  aria-label="Choose a PDF file to convert to JPG"
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
                    <strong>Size:</strong>{" "}
                    {(file.size / 1024).toFixed(2)} KB
                  </p>

                  <p>
                    <strong>Output:</strong>{" "}
                    JPG images
                  </p>
                </div>

                <div
                  className="d-flex gap-3 justify-content-center flex-wrap mb-4"
                  aria-live="polite"
                >
                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={convertPdfToJpg}
                    disabled={isConverting}
                    aria-label={
                      isConverting
                        ? "Converting PDF to JPG"
                        : "Convert PDF to JPG"
                    }
                  >
                    {isConverting
                      ? "Converting..."
                      : "Convert to JPG"}
                  </button>

                  {images.length > 0 && (
                    <button
                      type="button"
                      className="btn btn-success px-4"
                      onClick={downloadAllImages}
                      aria-label="Download all converted JPG images"
                    >
                      Download All JPGs
                    </button>
                  )}

                  <button
                    type="button"
                    className="btn btn-outline-danger px-4"
                    onClick={removeFile}
                    disabled={isConverting}
                  >
                    Remove
                  </button>
                </div>

                {images.length > 0 && (
                  <div
                    className="row g-4"
                    aria-live="polite"
                    aria-label={`Converted ${images.length} PDF pages`}
                  >
                    {images.map((image) => (
                      <div
                        className="col-12 col-md-6"
                        key={image.page}
                      >
                        <div className="preview-area">
                          <img
                            src={image.url}
                            alt={`Converted PDF page ${image.page} as JPG`}
                            className="preview-image"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>

                        <div className="text-center mt-2">
                          <p className="fw-semibold">
                            Page {image.page}
                          </p>

                          <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() =>
                              downloadImage(
                                image,
                                image.page
                              )
                            }
                            aria-label={`Download page ${image.page} as JPG`}
                          >
                            Download JPG
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {images.length > 0 && (
                  <p className="text-center text-muted mt-4 mb-0">
                    {images.length}{" "}
                    {images.length === 1
                      ? "PDF page has"
                      : "PDF pages have"}{" "}
                    been converted to JPG.
                  </p>
                )}
              </div>
            )}
          </section>
        </main>

        <article className="tool-information mx-auto mt-5">
          <section>
            <h2>Free PDF to JPG Converter Online</h2>

            <p>
              Toolora's free PDF to JPG converter lets you
              turn PDF pages into JPG images directly in your
              browser. Each page of the PDF is converted into
              a separate JPG image that you can preview and
              download.
            </p>

            <p>
              This tool is useful when you need to extract
              pages from a PDF as images for sharing, editing,
              presentations, websites, or other digital
              projects.
            </p>
          </section>

          <section className="mt-4">
            <h2>How to Convert PDF to JPG Online</h2>

            <p>
              Follow these simple steps to convert PDF pages
              to JPG images:
            </p>

            <ol>
              <li>
                Click <strong>Choose PDF</strong>.
              </li>

              <li>
                Select the PDF file you want to convert.
              </li>

              <li>
                Click <strong>Convert to JPG</strong>.
              </li>

              <li>
                Wait while the PDF pages are converted.
              </li>

              <li>
                Preview the converted JPG images.
              </li>

              <li>
                Download individual JPG files or click
                <strong> Download All JPGs </strong>
                to download all converted pages.
              </li>
            </ol>
          </section>

          <section className="mt-4">
            <h2>Convert Every PDF Page to JPG</h2>

            <p>
              Toolora processes the pages in your selected PDF
              and converts them into separate JPG images. If
              your PDF contains multiple pages, each page is
              displayed as its own image after conversion.
            </p>
          </section>

          <section className="mt-4">
            <h2>Why Convert PDF Pages to JPG?</h2>

            <ul>
              <li>
                Turn PDF pages into common JPG image files.
              </li>

              <li>
                Extract individual pages as images.
              </li>

              <li>
                Share PDF content as image files.
              </li>

              <li>
                Use PDF pages in presentations or websites.
              </li>

              <li>
                Preview and download converted pages easily.
              </li>

              <li>
                Convert PDF pages without installing desktop
                software.
              </li>
            </ul>
          </section>

          <section className="mt-4">
            <h2>PDF vs JPG: What's the Difference?</h2>

            <p>
              PDF is a document format commonly used for
              sharing documents, while JPG is an image format
              commonly used for photographs and digital
              pictures.
            </p>

            <p>
              Converting a PDF page to JPG can be useful when
              you specifically need the page as an image rather
              than as a document.
            </p>
          </section>

          <section className="mt-4">
            <h2>
              Can I Download Individual PDF Pages as JPG?
            </h2>

            <p>
              Yes. After conversion, every PDF page is shown
              separately. You can click the
              <strong> Download JPG </strong>
              button below any page to save that individual
              page as a JPG image.
            </p>
          </section>

          <section className="mt-4">
            <h2>
              Can I Download All Converted JPG Images?
            </h2>

            <p>
              Yes. Once the PDF has been converted, click
              <strong> Download All JPGs </strong>
              to start downloading the converted pages.
            </p>

            <p>
              Your browser may ask for permission when a page
              starts multiple downloads. This behavior depends
              on your browser's download settings.
            </p>
          </section>

          <section className="mt-4">
            <h2>Are My PDF Files Uploaded?</h2>

            <p>
              The conversion is performed in your browser using
              the web application. The selected PDF is used by
              the browser to render its pages as JPG images.
            </p>
          </section>

          <section className="mt-4">
            <h2>Is Toolora PDF to JPG Converter Free?</h2>

            <p>
              Yes. Toolora's PDF to JPG converter is free to
              use online. You can convert PDF pages to JPG
              without installing additional desktop software.
            </p>
          </section>

          <section className="mt-5">
            <h2>Frequently Asked Questions</h2>

            <h3 className="mt-3">
              What is a PDF to JPG converter?
            </h3>

            <p>
              A PDF to JPG converter turns PDF pages into JPG
              image files. Each PDF page can be converted into
              a separate JPG image.
            </p>

            <h3 className="mt-3">
              Is the Toolora PDF to JPG converter free?
            </h3>

            <p>
              Yes. Toolora's PDF to JPG converter is free to
              use online.
            </p>

            <h3 className="mt-3">
              Can I convert all PDF pages to JPG?
            </h3>

            <p>
              Yes. Toolora converts the pages of the selected
              PDF into separate JPG images.
            </p>

            <h3 className="mt-3">
              Can I download individual PDF pages as JPG?
            </h3>

            <p>
              Yes. Each converted PDF page has its own
              <strong> Download JPG </strong>
              button.
            </p>

            <h3 className="mt-3">
              Are my PDF files uploaded to a server?
            </h3>

            <p>
              The conversion is performed in your browser. The
              selected PDF is used locally by the browser to
              create the JPG images.
            </p>
          </section>

          <section className="mt-5">
            <h2>Try Our Other Free Tools</h2>

            <p>
              Need to convert, compress, or resize other files?
              Try these free Toolora tools:
            </p>

            <div className="d-flex flex-wrap gap-3 mt-3">
              <Link
                to="/jpg-to-pdf"
                className="btn btn-outline-primary"
              >
                JPG to PDF →
              </Link>

              <Link
                to="/pdf-compressor"
                className="btn btn-outline-primary"
              >
                PDF Compressor →
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

              <Link
                to="/jpg-to-png"
                className="btn btn-outline-primary"
              >
                JPG to PNG →
              </Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}

export default PdfToJpg;

