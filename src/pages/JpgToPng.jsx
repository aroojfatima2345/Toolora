
import { useEffect, useState } from "react";
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

function JpgToPng() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [pngUrl, setPngUrl] = useState("");

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }

      if (pngUrl) {
        URL.revokeObjectURL(pngUrl);
      }
    };
  }, [preview, pngUrl]);

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const isJpg =
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      /\.jpe?g$/i.test(file.name);

    if (!isJpg) {
      alert("Please select a JPG/JPEG image.");
      event.target.value = "";
      return;
    }

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    if (pngUrl) {
      URL.revokeObjectURL(pngUrl);
    }

    const url = URL.createObjectURL(file);

    setImage(file);
    setPreview(url);
    setPngUrl("");

    event.target.value = "";
  };

  const convertToPng = () => {
    if (!image || !preview) {
      return;
    }

    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) {
        alert("Unable to process this image.");
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;

      context.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            alert("Unable to create the PNG image.");
            return;
          }

          if (pngUrl) {
            URL.revokeObjectURL(pngUrl);
          }

          const url = URL.createObjectURL(blob);
          setPngUrl(url);
        },
        "image/png"
      );
    };

    img.onerror = () => {
      alert("Unable to convert this image.");
    };

    img.src = preview;
  };

  const downloadPng = () => {
    if (!pngUrl) {
      return;
    }

    const link = document.createElement("a");

    link.href = pngUrl;
    link.download = "toolora-converted-image.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const removeImage = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    if (pngUrl) {
      URL.revokeObjectURL(pngUrl);
    }

    setImage(null);
    setPreview("");
    setPngUrl("");
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I convert JPG to PNG online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora lets you convert JPG and JPEG images to PNG directly in your web browser.",
        },
      },
      {
        "@type": "Question",
        name: "Can I convert JPEG to PNG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora supports both JPG and JPEG image files for PNG conversion.",
        },
      },
      {
        "@type": "Question",
        name: "Is the JPG to PNG converter free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora's JPG to PNG converter is free to use online.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to install software to convert JPG to PNG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. You can convert JPG images to PNG directly through a modern web browser without installing additional software.",
        },
      },
      {
        "@type": "Question",
        name: "What format will the converted image be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The converted image is generated as a PNG file that you can download.",
        },
      },
    ],
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Toolora JPG to PNG Converter",
    url: "https://www.toolora.click/jpg-to-png",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    description:
      "Free online JPG to PNG converter for converting JPG and JPEG images to PNG format directly in your browser.",
    browserRequirements:
      "Requires JavaScript and a modern web browser.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Convert JPG to PNG Online",
    description:
      "Learn how to convert JPG and JPEG images to PNG format using Toolora's free online JPG to PNG converter.",
    totalTime: "PT1M",
    tool: [
      {
        "@type": "HowToTool",
        name: "Web browser",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Upload a JPG image",
        text: "Click Choose JPG and select a JPG or JPEG image from your device.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Preview the image",
        text: "Review the uploaded JPG image before starting the conversion.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Convert JPG to PNG",
        text: "Click Convert to PNG to create a PNG version of the uploaded image.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Download the PNG image",
        text: "Click Download PNG to save the converted PNG image to your device.",
      },
    ],
  };

  const structuredData = [
    faqSchema,
    webApplicationSchema,
    howToSchema,
  ];

  return (
    <div className="compressor-page">
      <SEO
        title="JPG to PNG Converter Online - Convert JPG to PNG Free"
        description="Convert JPG and JPEG images to PNG online for free with Toolora. Upload a JPG image, convert it to PNG in your browser, and download the converted file easily."
        keywords="JPG to PNG, JPG to PNG converter, convert JPG to PNG, JPEG to PNG, JPG converter, image converter, JPG PNG converter online, free JPG to PNG, JPG to PNG online"
        canonical="/jpg-to-png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="container py-5">
        <header className="text-center mb-5">
          <div className="hero-badge mb-3">
            🔄 Free Image Converter
          </div>

          <h1 className="fw-bold">
            JPG to PNG Converter Online
          </h1>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Convert JPG and JPEG images to PNG online for free.
            Upload your image, convert it to PNG and download
            the converted file quickly and easily.
          </p>
        </header>

        <AdPlaceholder label="Advertisement" />

        <main>
          <section
            className="compressor-box mx-auto"
            aria-label="Free online JPG to PNG converter"
          >
            {!image && (
              <label
                className="upload-area"
                htmlFor="jpg-upload"
              >
                <div
                  className="upload-icon"
                  aria-hidden="true"
                >
                  🖼️
                </div>

                <h2 className="h4">
                  Upload JPG Image
                </h2>

                <p>
                  JPG and JPEG images are supported.
                </p>

                <span className="upload-btn">
                  Choose JPG
                </span>

                <input
                  id="jpg-upload"
                  type="file"
                  accept="image/jpeg,.jpg,.jpeg"
                  onChange={handleUpload}
                  aria-label="Choose a JPG or JPEG image to convert"
                  hidden
                />
              </label>
            )}

            {image && (
              <div>
                <div className="preview-area">
                  <img
                    src={preview}
                    alt={`Preview of ${image.name}`}
                    className="preview-image"
                    decoding="async"
                  />
                </div>

                <div
                  className="file-info"
                  aria-live="polite"
                >
                  <p>
                    <strong>File:</strong>{" "}
                    {image.name}
                  </p>

                  <p>
                    <strong>Original Size:</strong>{" "}
                    {(image.size / 1024).toFixed(2)} KB
                  </p>

                  {pngUrl && (
                    <p>
                      <strong>Converted Format:</strong>{" "}
                      PNG
                    </p>
                  )}
                </div>

                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={convertToPng}
                  >
                    Convert to PNG
                  </button>

                  {pngUrl && (
                    <button
                      type="button"
                      className="btn btn-success px-4"
                      onClick={downloadPng}
                    >
                      Download PNG
                    </button>
                  )}

                  <button
                    type="button"
                    className="btn btn-outline-danger px-4"
                    onClick={removeImage}
                  >
                    Remove Image
                  </button>
                </div>
              </div>
            )}
          </section>

          <AdPlaceholder label="Advertisement" />

          <article className="tool-information mx-auto mt-5">
            <section>
              <h2>Free JPG to PNG Converter Online</h2>

              <p>
                Toolora's free JPG to PNG converter lets you
                convert JPG and JPEG images into PNG format
                directly in your browser. Upload a JPG image,
                convert it to PNG and download the resulting
                image without installing additional conversion
                software.
              </p>

              <p>
                Converting JPG to PNG can be useful when you
                need a PNG file for a website, graphic design
                project, document, application or another
                digital use.
              </p>

              <p>
                The conversion is performed directly in your
                browser, making it convenient when you need a
                quick image format conversion.
              </p>
            </section>

            <section className="mt-4">
              <h2>How to Convert JPG to PNG Online</h2>

              <p>
                Follow these simple steps to convert your JPG
                image to PNG:
              </p>

              <ol>
                <li>
                  Click <strong>Choose JPG</strong> and select
                  a JPG or JPEG image.
                </li>

                <li>
                  Preview the uploaded image.
                </li>

                <li>
                  Click <strong>Convert to PNG</strong>.
                </li>

                <li>
                  Wait for the conversion to finish.
                </li>

                <li>
                  Click <strong>Download PNG</strong> to save
                  the converted image.
                </li>
              </ol>
            </section>

            <section className="mt-4">
              <h2>JPG vs PNG: What's the Difference?</h2>

              <p>
                JPG and PNG are two commonly used image formats,
                but they are designed for different purposes.
                JPG generally uses lossy compression and is
                commonly used for photographs and images where
                smaller file sizes are useful.
              </p>

              <p>
                PNG uses lossless compression and supports
                transparency. It can be useful for graphics,
                logos, screenshots and other images where
                preserving image information is important.
              </p>

              <p>
                Converting JPG to PNG changes the file format,
                but it does not restore image quality that was
                already lost during the original JPG compression.
              </p>
            </section>

            <section className="mt-4">
              <h2>Why Convert JPG to PNG?</h2>

              <ul>
                <li>
                  Get your image in PNG format.
                </li>

                <li>
                  Use PNG when a website or application
                  specifically requires it.
                </li>

                <li>
                  Work with PNG files for graphics and
                  digital design projects.
                </li>

                <li>
                  Use a browser-based converter without
                  installing additional software.
                </li>

                <li>
                  Quickly download the converted image.
                </li>
              </ul>
            </section>

            <section className="mt-4">
              <h2>JPG and JPEG Conversion</h2>

              <p>
                JPG and JPEG are commonly used extensions for
                the JPEG image format. Toolora accepts both JPG
                and JPEG files for PNG conversion.
              </p>

              <p>
                Whether your file ends in <strong>.jpg</strong>{" "}
                or <strong>.jpeg</strong>, you can use the same
                conversion process to create a PNG version of
                the image.
              </p>
            </section>

            <section className="mt-4">
              <h2>
                Convert JPG to PNG Without Installing Software
              </h2>

              <p>
                Toolora's JPG to PNG converter works directly
                in a modern web browser. You can upload your
                image, convert it and download the PNG file
                without installing a separate image converter.
              </p>

              <p>
                This makes the tool convenient when you need a
                quick JPG to PNG conversion on a computer or
                another device with a compatible browser.
              </p>
            </section>

            <section className="mt-4">
              <h2>Are My Images Uploaded to Toolora?</h2>

              <p>
                No. The JPG to PNG conversion is performed
                directly in your browser using local browser
                processing. Your image does not need to be
                uploaded to a Toolora server for conversion.
              </p>
            </section>

            <section className="mt-4">
              <h2>Is JPG to PNG Conversion Free?</h2>

              <p>
                Yes. Toolora's JPG to PNG converter is free to
                use online. Upload a JPG or JPEG image, convert
                it to PNG and download the converted file.
              </p>
            </section>

            <section className="mt-5">
              <h2>Frequently Asked Questions</h2>

              <h3 className="mt-4">
                Can I convert JPG to PNG online?
              </h3>

              <p>
                Yes. Toolora lets you convert JPG and JPEG
                images to PNG directly in your web browser.
              </p>

              <h3 className="mt-4">
                Can I convert JPEG to PNG?
              </h3>

              <p>
                Yes. Toolora supports both JPG and JPEG image
                files for PNG conversion.
              </p>

              <h3 className="mt-4">
                Is the JPG to PNG converter free?
              </h3>

              <p>
                Yes. Toolora's JPG to PNG converter is free to
                use online.
              </p>

              <h3 className="mt-4">
                Do I need to install software to convert JPG to
                PNG?
              </h3>

              <p>
                No. You can convert JPG images to PNG directly
                through a modern web browser without installing
                additional software.
              </p>

              <h3 className="mt-4">
                What format will the converted image be?
              </h3>

              <p>
                The converted image is generated as a PNG file
                that you can download.
              </p>
            </section>

            <section className="mt-5">
              <h2>Related Image Tools</h2>

              <p>
                You may also find these free Toolora image
                tools useful:
              </p>

              <div className="d-flex flex-wrap gap-3 mt-3">
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
                  to="/jpg-to-pdf"
                  className="btn btn-outline-primary"
                >
                  JPG to PDF →
                </Link>
              </div>
            </section>

            <AdPlaceholder label="Advertisement" />
          </article>
        </main>
      </div>
    </div>
  );
}

export default JpgToPng;

