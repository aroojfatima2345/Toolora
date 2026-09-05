import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function JpgToPng() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [pngUrl, setPngUrl] = useState("");

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    if (file.type !== "image/jpeg") {
      alert("Please select a JPG/JPEG image.");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setPngUrl("");
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
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;

      context.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            return;
          }

          const url = URL.createObjectURL(blob);
          setPngUrl(url);
        },
        "image/png"
      );
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

  return (
    <div className="compressor-page">

      <SEO
        title="JPG to PNG Converter Online - Convert JPG to PNG Free"
        description="Convert JPG and JPEG images to PNG online for free. Easily convert JPG to PNG and download your converted image with Toolora."
        keywords="JPG to PNG, JPG to PNG converter, convert JPG to PNG, JPEG to PNG, JPG converter, image converter, JPG PNG converter online, free JPG to PNG"
        canonical="/jpg-to-png"
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

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

        <main>

          <section
            className="compressor-box mx-auto"
            aria-label="JPG to PNG converter tool"
          >

            {!image && (
              <label className="upload-area">

                <div className="upload-icon">
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
                  type="file"
                  accept="image/jpeg"
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
                  />

                </div>

                <div className="file-info">

                  <p>
                    <strong>File:</strong>{" "}
                    {image.name}
                  </p>

                  <p>
                    <strong>Original Size:</strong>{" "}
                    {(image.size / 1024).toFixed(2)} KB
                  </p>

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
                    Remove
                  </button>

                </div>

              </div>
            )}

          </section>

          <article className="tool-information mx-auto mt-5">

            <section>

              <h2>
                Free JPG to PNG Converter Online
              </h2>

              <p>
                Toolora's free JPG to PNG converter lets you
                convert JPG and JPEG images into PNG format
                directly in your browser. Upload a JPG image,
                convert it to PNG and download the resulting
                image without installing image conversion
                software.
              </p>

              <p>
                Converting JPG to PNG can be useful when you
                need a PNG file for a website, design project,
                document, application or another digital use.
              </p>

            </section>

            <section className="mt-4">

              <h2>
                How to Convert JPG to PNG Online
              </h2>

              <p>
                Follow these simple steps to convert your image:
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

              <h2>
                JPG vs PNG: What's the Difference?
              </h2>

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

              <h2>
                Why Convert JPG to PNG?
              </h2>

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

              <h2>
                JPG and JPEG Conversion
              </h2>

              <p>
                JPG and JPEG are commonly used extensions for
                the JPEG image format. Toolora accepts JPG and
                JPEG files and converts them into PNG images.
              </p>

              <p>
                Whether your file ends in .jpg or .jpeg, you
                can use the same conversion process to create
                a PNG version of the image.
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
                This makes the tool convenient when you need
                a quick JPG to PNG conversion on a computer
                or other device with a compatible browser.
              </p>

            </section>

            <section className="mt-4">

              <h2>
                Is JPG to PNG Conversion Free?
              </h2>

              <p>
                Yes. Toolora's JPG to PNG converter is free
                to use online. Upload a JPG or JPEG image,
                convert it to PNG and download the converted
                file.
              </p>

            </section>

            <section className="mt-5">

              <h2>
                Frequently Asked Questions
              </h2>

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
                Yes. JPG and JPEG image files are supported
                for PNG conversion.
              </p>

              <h3 className="mt-4">
                Is the JPG to PNG converter free?
              </h3>

              <p>
                Yes. Toolora's JPG to PNG converter is free
                to use online.
              </p>

              <h3 className="mt-4">
                Do I need to install software to convert JPG to PNG?
              </h3>

              <p>
                No. You can use the converter directly through
                a modern web browser without installing
                additional image conversion software.
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

              <h2>
                Related Image Tools
              </h2>

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

          </article>

        </main>

      </div>

    </div>
  );
}

export default JpgToPng;

