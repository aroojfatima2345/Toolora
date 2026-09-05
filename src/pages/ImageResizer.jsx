import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function ImageResizer() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [lockRatio, setLockRatio] = useState(true);
  const [resizedUrl, setResizedUrl] = useState("");

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const url = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      setImage(file);
      setPreview(url);
      setWidth(img.width);
      setHeight(img.height);
      setResizedUrl("");
    };

    img.src = url;
  };

  const handleWidthChange = (value) => {
    const newWidth = Number(value);

    setWidth(newWidth);

    if (lockRatio && image && newWidth > 0) {
      const img = new Image();

      img.onload = () => {
        const ratio = img.height / img.width;
        setHeight(Math.round(newWidth * ratio));
      };

      img.src = preview;
    }
  };

  const handleHeightChange = (value) => {
    const newHeight = Number(value);

    setHeight(newHeight);

    if (lockRatio && image && newHeight > 0) {
      const img = new Image();

      img.onload = () => {
        const ratio = img.width / img.height;
        setWidth(Math.round(newHeight * ratio));
      };

      img.src = preview;
    }
  };

  const resizeImage = () => {
    if (!image || width <= 0 || height <= 0) {
      return;
    }

    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) {
        return;
      }

      canvas.width = width;
      canvas.height = height;

      context.drawImage(
        img,
        0,
        0,
        width,
        height
      );

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            return;
          }

          const url = URL.createObjectURL(blob);
          setResizedUrl(url);
        },
        image.type || "image/jpeg",
        0.9
      );
    };

    img.src = preview;
  };

  const downloadImage = () => {
    if (!resizedUrl) {
      return;
    }

    const link = document.createElement("a");

    link.href = resizedUrl;
    link.download = `toolora-resized-${image.name}`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const removeImage = () => {
    setImage(null);
    setPreview("");
    setWidth(0);
    setHeight(0);
    setResizedUrl("");
    setLockRatio(true);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What image formats does Toolora Image Resizer support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Toolora Image Resizer supports JPG, JPEG, PNG and WebP image files.",
        },
      },
      {
        "@type": "Question",
        name: "Can I resize an image to exact dimensions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can enter the exact width and height you need in pixels.",
        },
      },
      {
        "@type": "Question",
        name: "What does Lock aspect ratio mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lock aspect ratio keeps the relationship between the image width and height to help prevent stretching or distortion.",
        },
      },
      {
        "@type": "Question",
        name: "Can I resize JPG, PNG and WebP images online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora lets you upload JPG, PNG and WebP images and resize them directly through your browser.",
        },
      },
      {
        "@type": "Question",
        name: "Is Toolora Image Resizer free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora Image Resizer is available as a free online image resizing tool.",
        },
      },
    ],
  };

  return (
    <div className="compressor-page">

      <SEO
        title="Image Resizer Online - Resize JPG, PNG & WebP"
        description="Resize JPG, PNG and WebP images online for free. Change image width and height while maintaining the aspect ratio with Toolora's image resizer."
        keywords="image resizer, resize image online, image resize tool, JPG resizer, PNG resizer, WebP resizer, resize JPG, resize PNG, image dimensions, free image resizer"
        canonical="/image-resizer"
      />

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="container py-5">

        {/* =========================
            PAGE INTRO
        ========================= */}

        <header className="text-center mb-5">

          <div className="hero-badge mb-3">
            📐 Free Image Tool
          </div>

          <h1 className="fw-bold">
            Image Resizer Online
          </h1>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Resize JPG, PNG and WebP images online for free.
            Enter your desired width and height in pixels,
            maintain the aspect ratio when needed, and download
            your resized image.
          </p>

        </header>


        {/* =========================
            IMAGE RESIZER TOOL
        ========================= */}

        <main>

          <section
            className="compressor-box mx-auto"
            aria-label="Image resizer tool"
          >

            {!image && (
              <label className="upload-area">

                <div className="upload-icon">
                  📤
                </div>

                <h2 className="h4">
                  Upload Your Image
                </h2>

                <p>
                  JPG, PNG or WebP supported
                </p>

                <span className="upload-btn">
                  Choose Image
                </span>

                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleUpload}
                  aria-label="Choose an image to resize"
                  hidden
                />

              </label>
            )}


            {image && (
              <div>

                {/* Preview */}

                <div className="preview-area">

                  <img
                    src={preview}
                    alt={`Preview of ${image.name}`}
                    className="preview-image"
                  />

                </div>


                {/* Dimensions */}

                <div className="mb-4">

                  <label
                    htmlFor="imageWidth"
                    className="form-label fw-semibold"
                  >
                    Width (px)
                  </label>

                  <input
                    id="imageWidth"
                    type="number"
                    min="1"
                    className="form-control mb-3"
                    value={width}
                    onChange={(e) =>
                      handleWidthChange(e.target.value)
                    }
                  />


                  <label
                    htmlFor="imageHeight"
                    className="form-label fw-semibold"
                  >
                    Height (px)
                  </label>

                  <input
                    id="imageHeight"
                    type="number"
                    min="1"
                    className="form-control"
                    value={height}
                    onChange={(e) =>
                      handleHeightChange(e.target.value)
                    }
                  />

                </div>


                {/* Aspect Ratio */}

                <div className="form-check mb-4">

                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="lockRatio"
                    checked={lockRatio}
                    onChange={(e) =>
                      setLockRatio(e.target.checked)
                    }
                  />

                  <label
                    className="form-check-label"
                    htmlFor="lockRatio"
                  >
                    Lock aspect ratio
                  </label>

                </div>


                {/* Buttons */}

                <div className="d-flex gap-3 justify-content-center flex-wrap">

                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={resizeImage}
                  >
                    Resize Image
                  </button>


                  {resizedUrl && (
                    <button
                      type="button"
                      className="btn btn-success px-4"
                      onClick={downloadImage}
                    >
                      Download
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


          {/* =========================
              SEO CONTENT
          ========================= */}

          <article className="tool-information mx-auto mt-5">

            {/* Introduction */}

            <section>

              <h2>
                Free Image Resizer Online
              </h2>

              <p>
                Toolora's free image resizer lets you change
                the width and height of JPG, PNG and WebP images
                directly in your browser. Enter your desired
                dimensions and resize your image quickly without
                installing additional software.
              </p>

              <p>
                An image resizer can be useful when a website,
                social media platform, application, online form
                or document requires an image with specific
                dimensions.
              </p>

            </section>


            {/* How To */}

            <section className="mt-4">

              <h2>
                How to Resize an Image Online
              </h2>

              <p>
                Follow these simple steps to resize an image:
              </p>

              <ol>

                <li>
                  Click <strong>Choose Image</strong> and
                  upload your JPG, PNG or WebP image.
                </li>

                <li>
                  Enter your desired width and height in pixels.
                </li>

                <li>
                  Keep <strong>Lock aspect ratio</strong>
                  enabled if you want to maintain the
                  original proportions.
                </li>

                <li>
                  Click <strong>Resize Image</strong>.
                </li>

                <li>
                  Click <strong>Download</strong> to save
                  your resized image.
                </li>

              </ol>

            </section>


            {/* Exact Dimensions */}

            <section className="mt-4">

              <h2>
                Resize Images to Exact Dimensions
              </h2>

              <p>
                Toolora allows you to enter the exact width
                and height you need in pixels. This can help
                when a website or platform requires a specific
                image size.
              </p>

              <p>
                For example, you can resize an image for a
                profile picture, website thumbnail, banner,
                online form or other digital content.
              </p>

            </section>


            {/* Aspect Ratio */}

            <section className="mt-4">

              <h2>
                What Is Aspect Ratio?
              </h2>

              <p>
                Aspect ratio describes the relationship between
                an image's width and height. Keeping the aspect
                ratio locked helps maintain the original
                proportions of an image when changing its size.
              </p>

              <p>
                If you need completely custom dimensions,
                you can turn off the <strong>Lock aspect ratio</strong>
                option and enter the width and height separately.
              </p>

            </section>


            {/* Benefits */}

            <section className="mt-4">

              <h2>
                Benefits of Using an Image Resizer
              </h2>

              <ul>

                <li>
                  Resize images to exact pixel dimensions.
                </li>

                <li>
                  Maintain image proportions when needed.
                </li>

                <li>
                  Supports JPG, PNG and WebP images.
                </li>

                <li>
                  Useful for websites and online forms.
                </li>

                <li>
                  Helpful for social media images and
                  profile pictures.
                </li>

                <li>
                  Works directly in your browser.
                </li>

              </ul>

            </section>


            {/* Use Cases */}

            <section className="mt-4">

              <h2>
                Common Uses for Image Resizing
              </h2>

              <p>
                Image resizing is useful in many everyday
                situations. You may need to resize an image
                for a website, social media profile, blog
                thumbnail, online application, document,
                email or digital design.
              </p>

              <p>
                Using the correct dimensions can help an image
                fit better within the space provided by a
                website or application.
              </p>

            </section>


            {/* Formats */}

            <section className="mt-4">

              <h2>
                Supported Image Formats
              </h2>

              <h3 className="mt-3">
                JPG and JPEG
              </h3>

              <p>
                JPG and JPEG are commonly used for photographs
                and web images. Toolora can resize these image
                formats directly in the browser.
              </p>

              <h3 className="mt-3">
                PNG
              </h3>

              <p>
                PNG images are also supported. You can change
                their dimensions while preparing them for
                websites, forms and other digital uses.
              </p>

              <h3 className="mt-3">
                WebP
              </h3>

              <p>
                WebP images can be uploaded and resized using
                the same simple process.
              </p>

            </section>


            {/* Free Tool */}

            <section className="mt-4">

              <h2>
                Is Toolora Image Resizer Free?
              </h2>

              <p>
                Yes. Toolora's image resizer is available as
                a free online tool. Upload an image, enter the
                dimensions you need and download the resized
                result.
              </p>

            </section>


            {/* FAQ */}

            <section className="mt-5">

              <h2>
                Frequently Asked Questions
              </h2>


              <h3 className="mt-4">
                What image formats does Toolora Image Resizer support?
              </h3>

              <p>
                Toolora Image Resizer supports JPG, JPEG, PNG
                and WebP image files.
              </p>


              <h3 className="mt-4">
                Can I resize an image to exact dimensions?
              </h3>

              <p>
                Yes. You can enter the exact width and height
                you need in pixels.
              </p>


              <h3 className="mt-4">
                What does Lock aspect ratio mean?
              </h3>

              <p>
                Lock aspect ratio keeps the relationship between
                the image's width and height. This helps prevent
                the image from looking stretched or distorted.
              </p>


              <h3 className="mt-4">
                Can I resize JPG, PNG and WebP images online?
              </h3>

              <p>
                Yes. You can upload JPG, PNG or WebP images and
                resize them directly through the Toolora website.
              </p>


              <h3 className="mt-4">
                Is Toolora Image Resizer free?
              </h3>

              <p>
                Yes. Toolora Image Resizer is available as a
                free online image resizing tool.
              </p>

            </section>


            {/* Related Tools */}

            <section className="mt-5">

              <h2>
                Related Image Tools
              </h2>

              <p>
                Try these other free Toolora image tools:
              </p>

              <div className="d-flex flex-wrap gap-3 mt-3">

                <Link
                  to="/image-compressor"
                  className="btn btn-outline-primary"
                >
                  Image Compressor →
                </Link>

                <Link
                  to="/jpg-to-png"
                  className="btn btn-outline-primary"
                >
                  JPG to PNG →
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

export default ImageResizer;

