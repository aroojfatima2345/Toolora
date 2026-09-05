import { useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import SEO from "../components/SEO";

function JpgToPdf() {
  const [images, setImages] = useState([]);
  const [pdfUrl, setPdfUrl] = useState("");
  const [isConverting, setIsConverting] = useState(false);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a JPG to PDF converter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A JPG to PDF converter changes JPG or JPEG image files into a PDF document. Multiple images can also be combined into one PDF.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Toolora JPG to PDF converter free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora's JPG to PDF converter is free to use online.",
        },
      },
      {
        "@type": "Question",
        name: "Can I convert multiple JPG images to one PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can select multiple JPG or JPEG images and combine them into a single PDF file.",
        },
      },
      {
        "@type": "Question",
        name: "Does each JPG image get its own PDF page?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Each selected JPG image is placed on a separate A4 page in the generated PDF.",
        },
      },
      {
        "@type": "Question",
        name: "Are my JPG images uploaded to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The conversion is performed in the browser using the web application. The images are used locally by the browser to create the PDF.",
        },
      },
    ],
  };

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);

    if (files.length === 0) {
      return;
    }

    const jpgFiles = files.filter(
      (file) =>
        file.type === "image/jpeg" ||
        file.type === "image/jpg"
    );

    if (jpgFiles.length === 0) {
      alert("Please select JPG or JPEG images only.");
      return;
    }

    if (jpgFiles.length !== files.length) {
      alert(
        "Some files were skipped because they are not JPG/JPEG images."
      );
    }

    const imageData = jpgFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImages(imageData);
    setPdfUrl("");
  };

  const convertToPdf = async () => {
    if (images.length === 0) {
      return;
    }

    try {
      setIsConverting(true);

      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 10;

      const maxWidth = pageWidth - margin * 2;
      const maxHeight = pageHeight - margin * 2;

      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const img = new Image();

        img.src = image.url;

        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });

        let imageWidth = img.width;
        let imageHeight = img.height;

        const ratio = Math.min(
          maxWidth / imageWidth,
          maxHeight / imageHeight
        );

        imageWidth = imageWidth * ratio;
        imageHeight = imageHeight * ratio;

        const x = (pageWidth - imageWidth) / 2;
        const y = (pageHeight - imageHeight) / 2;

        if (i > 0) {
          pdf.addPage();
        }

        pdf.addImage(
          img,
          "JPEG",
          x,
          y,
          imageWidth,
          imageHeight
        );
      }

      const blob = pdf.output("blob");
      const url = URL.createObjectURL(blob);

      setPdfUrl(url);
      setIsConverting(false);
    } catch (error) {
      console.error(error);

      alert("Unable to create PDF. Please try again.");

      setIsConverting(false);
    }
  };

  const downloadPdf = () => {
    if (!pdfUrl) {
      return;
    }

    const link = document.createElement("a");

    link.href = pdfUrl;
    link.download = "toolora-jpg-to-pdf.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const removeImages = () => {
    images.forEach((image) => {
      URL.revokeObjectURL(image.url);
    });

    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
    }

    setImages([]);
    setPdfUrl("");
    setIsConverting(false);
  };

  const totalSize = images.reduce(
    (total, image) => total + image.file.size,
    0
  );

  return (
    <div className="compressor-page">
      <SEO
        title="JPG to PDF Converter Online - Convert Images to PDF Free"
        description="Convert JPG and JPEG images to PDF online for free with Toolora. Combine one or multiple JPG images into a PDF and download it easily."
        keywords="JPG to PDF, JPG to PDF converter, convert JPG to PDF, JPEG to PDF, image to PDF, JPG PDF converter, convert image to PDF, free JPG to PDF"
        canonical="/jpg-to-pdf"
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="container py-5">
        {/* PAGE HEADING */}

        <header className="text-center mb-5">
          <div className="hero-badge mb-3">
            📄 Free Converter Tool
          </div>

          <h1 className="fw-bold">
            JPG to PDF Converter Online
          </h1>

          <p className="text-muted">
            Convert JPG and JPEG images to PDF online for free.
            Combine multiple images into one PDF document.
          </p>
        </header>

        {/* CONVERTER TOOL */}

        <main>
          <section
            className="compressor-box mx-auto"
            aria-label="JPG to PDF converter tool"
          >
            {images.length === 0 && (
              <label
                className="upload-area"
                htmlFor="jpg-pdf-upload"
              >
                <div className="upload-icon">
                  🖼️
                </div>

                <h2 className="h4">
                  Upload JPG Images
                </h2>

                <p>
                  Select one or multiple JPG/JPEG images.
                </p>

                <span className="upload-btn">
                  Choose Images
                </span>

                <input
                  id="jpg-pdf-upload"
                  type="file"
                  accept="image/jpeg,image/jpg"
                  multiple
                  onChange={handleUpload}
                  hidden
                />
              </label>
            )}

            {images.length > 0 && (
              <div>
                {/* IMAGE PREVIEWS */}

                <div className="row g-3 mb-4">
                  {images.map((image, index) => (
                    <div
                      className="col-6 col-md-4"
                      key={index}
                    >
                      <div className="preview-area">
                        <img
                          src={image.url}
                          alt={`JPG image preview ${index + 1}`}
                          className="preview-image"
                        />
                      </div>

                      <small className="text-muted d-block text-center mt-2">
                        Image {index + 1}
                      </small>
                    </div>
                  ))}
                </div>

                {/* FILE INFORMATION */}

                <div className="file-info">
                  <p>
                    <strong>Images Selected:</strong>{" "}
                    {images.length}
                  </p>

                  <p>
                    <strong>Total Image Size:</strong>{" "}
                    {(totalSize / 1024).toFixed(2)} KB
                  </p>

                  <p>
                    <strong>Output:</strong> PDF
                  </p>
                </div>

                {/* BUTTONS */}

                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={convertToPdf}
                    disabled={isConverting}
                  >
                    {isConverting
                      ? "Creating PDF..."
                      : "Convert to PDF"}
                  </button>

                  {pdfUrl && (
                    <button
                      type="button"
                      className="btn btn-success px-4"
                      onClick={downloadPdf}
                    >
                      Download PDF
                    </button>
                  )}

                  <button
                    type="button"
                    className="btn btn-outline-danger px-4"
                    onClick={removeImages}
                  >
                    Remove
                  </button>
                </div>
              </div>
            )}
          </section>
        </main>

        {/* SEO CONTENT */}

        <section className="tool-information mx-auto mt-5">
          <h2>
            Free JPG to PDF Converter Online
          </h2>

          <p>
            Toolora's free JPG to PDF converter lets you
            convert JPG and JPEG images into a PDF document
            directly in your browser. You can select a single
            image or multiple images and combine them into
            one PDF file.
          </p>

          <p>
            This online image to PDF converter is useful for
            photos, scanned documents, forms, receipts and
            other JPG images that you want to save or share
            as a PDF document.
          </p>

          <h2 className="mt-4">
            How to Convert JPG to PDF Online
          </h2>

          <ol>
            <li>
              Click <strong>Choose Images</strong>.
            </li>

            <li>
              Select one or multiple JPG/JPEG images.
            </li>

            <li>
              Review the image previews.
            </li>

            <li>
              Click <strong>Convert to PDF</strong>.
            </li>

            <li>
              Click <strong>Download PDF</strong> to save
              your converted file.
            </li>
          </ol>

          <h2 className="mt-4">
            Convert Multiple JPG Images to One PDF
          </h2>

          <p>
            You can select multiple JPG or JPEG images at
            once and combine them into a single PDF. Each
            selected image is placed on its own A4 page,
            making it easy to create a multi-page document
            from several images.
          </p>

          <h2 className="mt-4">
            Why Convert JPG Images to PDF?
          </h2>

          <ul>
            <li>
              Combine multiple JPG images into one document.
            </li>

            <li>
              Make images easier to share and store.
            </li>

            <li>
              Create PDF files from scanned documents.
            </li>

            <li>
              Prepare images for document submission.
            </li>

            <li>
              Keep multiple related images together.
            </li>

            <li>
              Convert images without installing desktop
              software.
            </li>
          </ul>

          <h2 className="mt-4">
            JPG vs PDF: What's the Difference?
          </h2>

          <p>
            JPG is an image format commonly used for photos
            and digital pictures. PDF is a document format
            designed to preserve content and layout across
            different devices and applications.
          </p>

          <p>
            Converting JPG images to PDF can be useful when
            you need to submit, share or organize several
            images as a single document.
          </p>

          <h2 className="mt-4">
            Is the JPG to PDF Converter Safe to Use?
          </h2>

          <p>
            The conversion process is performed in your
            browser using the web application. Your selected
            images are used by the browser to create the PDF
            file.
          </p>

          <h2 className="mt-4">
            Does Each JPG Become a Separate PDF Page?
          </h2>

          <p>
            Yes. When you select multiple JPG or JPEG images,
            each image is placed on a separate A4 page in the
            generated PDF.
          </p>

          <h2 className="mt-4">
            Is Toolora JPG to PDF Converter Free?
          </h2>

          <p>
            Yes. Toolora's JPG to PDF converter is free to
            use online. You can convert JPG and JPEG images
            without installing additional software.
          </p>

          {/* FAQ */}

          <h2 className="mt-5">
            Frequently Asked Questions
          </h2>

          <h3 className="mt-3">
            What is a JPG to PDF converter?
          </h3>

          <p>
            A JPG to PDF converter changes JPG or JPEG image
            files into a PDF document. Multiple images can
            also be combined into one PDF.
          </p>

          <h3 className="mt-3">
            Is the Toolora JPG to PDF converter free?
          </h3>

          <p>
            Yes. Toolora's JPG to PDF converter is free to
            use online.
          </p>

          <h3 className="mt-3">
            Can I convert multiple JPG images to one PDF?
          </h3>

          <p>
            Yes. You can select multiple JPG or JPEG images
            and combine them into a single PDF file.
          </p>

          <h3 className="mt-3">
            Does each JPG image get its own PDF page?
          </h3>

          <p>
            Yes. Each selected JPG image is placed on a
            separate A4 page in the generated PDF.
          </p>

          <h3 className="mt-3">
            Are my JPG images uploaded to a server?
          </h3>

          <p>
            The conversion is performed in the browser using
            the web application. The images are used locally
            by the browser to create the PDF.
          </p>

          {/* RELATED TOOLS */}

          <h2 className="mt-5">
            Try Our Other Free Tools
          </h2>

          <p>
            Need to work with other image or PDF formats?
            Try these free Toolora tools:
          </p>

          <div className="d-flex flex-wrap gap-3 mt-3">
            <Link
              to="/pdf-to-jpg"
              className="btn btn-outline-primary"
            >
              PDF to JPG →
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
      </div>
    </div>
  );
}

export default JpgToPdf;

