import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function ImageCompressor() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [targetSize, setTargetSize] = useState(100);
  const [compressedUrl, setCompressedUrl] = useState("");
  const [compressedSize, setCompressedSize] = useState(0);
  const [quality, setQuality] = useState(70);
  const [compressing, setCompressing] = useState(false);

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setCompressedUrl("");
    setCompressedSize(0);
    setQuality(70);
  };

  const compressToTarget = () => {
    if (!image) {
      return;
    }

    setCompressing(true);

    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) {
        setCompressing(false);
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;

      context.drawImage(img, 0, 0);

      let minQuality = 0.1;
      let maxQuality = 1.0;
      let bestBlob = null;

      const targetBytes = targetSize * 1024;

      const tryCompression = () => {
        const currentQuality =
          (minQuality + maxQuality) / 2;

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              setCompressing(false);
              return;
            }

            if (blob.size <= targetBytes) {
              bestBlob = blob;
              minQuality = currentQuality;
            } else {
              maxQuality = currentQuality;
            }

            if (maxQuality - minQuality < 0.01) {
              if (!bestBlob) {
                bestBlob = blob;
              }

              const url = URL.createObjectURL(bestBlob);

              setCompressedUrl(url);
              setCompressedSize(bestBlob.size);

              const finalQuality = Math.round(
                minQuality * 100
              );

              setQuality(finalQuality);
              setCompressing(false);

              return;
            }

            tryCompression();
          },
          "image/jpeg",
          currentQuality
        );
      };

      tryCompression();
    };

    img.onerror = () => {
      setCompressing(false);
      alert("Unable to process this image.");
    };

    img.src = preview;
  };

  const downloadImage = () => {
    if (!compressedUrl) {
      return;
    }

    const link = document.createElement("a");

    link.href = compressedUrl;
    link.download = "toolora-compressed-image.jpg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const removeImage = () => {
    setImage(null);
    setPreview("");
    setCompressedUrl("");
    setCompressedSize(0);
    setQuality(70);
  };

  const reduction =
    image && compressedSize
      ? (
          ((image.size - compressedSize) / image.size) *
          100
        ).toFixed(1)
      : 0;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What image formats does Toolora Image Compressor support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Toolora Image Compressor supports JPG, PNG and WebP image uploads. The compressed result is generated as a JPEG image.",
        },
      },
      {
        "@type": "Question",
        name: "Can I compress an image to a specific file size?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can choose a target size such as 20 KB, 50 KB, 100 KB, 200 KB, 500 KB or 1 MB.",
        },
      },
      {
        "@type": "Question",
        name: "Does image compression reduce image quality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Image compression can reduce quality because the tool adjusts JPEG compression to reduce the file size. Smaller target sizes may require stronger compression.",
        },
      },
      {
        "@type": "Question",
        name: "Is Toolora Image Compressor free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toolora Image Compressor is available as a free online image compression tool.",
        },
      },
      {
        "@type": "Question",
        name: "Can I compress JPG, PNG and WebP images online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can upload JPG, PNG or WebP images and compress them directly through the Toolora website.",
        },
      },
    ],
  };

  return (
    <div className="compressor-page">
      <SEO
        title="Image Compressor Online - Compress JPG, PNG & WebP"
        description="Compress JPG, PNG and WebP images online for free. Reduce image file size to a target size with Toolora's easy-to-use image compressor."
        keywords="image compressor, compress image online, JPG compressor, PNG compressor, WebP compressor, image compression, reduce image size, compress JPG, compress PNG, free image compressor"
        canonical="/image-compressor"
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
            🖼️ Free Image Tool
          </div>

          <h1 className="fw-bold">
            Image Compressor Online
          </h1>

          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Compress JPG, PNG and WebP images online for free.
            Reduce image file size to a target size and download
            your compressed image quickly and easily.
          </p>
        </header>

        {/* =========================
            COMPRESSOR TOOL
        ========================= */}

        <main>
          <section
            className="compressor-box mx-auto"
            aria-label="Image compressor tool"
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
                  aria-label="Choose an image to compress"
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

                {/* File Information */}

                <div className="file-info">
                  <p>
                    <strong>File:</strong>{" "}
                    {image.name}
                  </p>

                  <p>
                    <strong>Original Size:</strong>{" "}
                    {(image.size / 1024).toFixed(2)} KB
                  </p>

                  {compressedSize > 0 && (
                    <>
                      <p>
                        <strong>Compressed Size:</strong>{" "}
                        {(compressedSize / 1024).toFixed(2)} KB
                      </p>

                      <p>
                        <strong>Saved:</strong>{" "}
                        {reduction}%
                      </p>
                    </>
                  )}
                </div>

                {/* Target Size */}

                <div className="mb-4">
                  <label
                    htmlFor="target-size"
                    className="form-label fw-semibold"
                  >
                    Target File Size
                  </label>

                  <select
                    id="target-size"
                    className="form-select"
                    value={targetSize}
                    onChange={(event) =>
                      setTargetSize(
                        Number(event.target.value)
                      )
                    }
                  >
                    <option value="20">
                      20 KB
                    </option>

                    <option value="50">
                      50 KB
                    </option>

                    <option value="100">
                      100 KB
                    </option>

                    <option value="200">
                      200 KB
                    </option>

                    <option value="500">
                      500 KB
                    </option>

                    <option value="1000">
                      1 MB
                    </option>
                  </select>
                </div>

                {/* Compression Quality */}

                {compressedSize > 0 && (
                  <div className="mb-4">
                    <div className="d-flex justify-content-between">
                      <span>
                        Compression Quality
                      </span>

                      <strong>
                        {quality}%
                      </strong>
                    </div>
                  </div>
                )}

                {/* Buttons */}

                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={compressToTarget}
                    disabled={compressing}
                  >
                    {compressing
                      ? "Compressing..."
                      : "Compress Image"}
                  </button>

                  {compressedUrl && (
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

            <section>
              <h2>
                Free Image Compressor Online
              </h2>

              <p>
                Toolora's free image compressor lets you
                reduce the file size of JPG, PNG and WebP
                images directly from your browser. Choose a
                target file size and the tool automatically
                adjusts the JPEG compression quality to
                create a smaller image.
              </p>

              <p>
                Compressing images can be useful when you need
                to upload photos to websites, online forms,
                applications or email services that have
                file-size limits. Smaller image files can also
                make images easier to store, share and upload.
              </p>
            </section>

            {/* =========================
                HOW IT WORKS
            ========================= */}

            <section className="mt-4">
              <h2>
                How to Compress an Image Online
              </h2>

              <p>
                Compressing an image with Toolora takes only
                a few simple steps:
              </p>

              <ol>
                <li>
                  Click <strong>Choose Image</strong> and
                  select a JPG, PNG or WebP image.
                </li>

                <li>
                  Select your preferred target file size.
                </li>

                <li>
                  Click <strong>Compress Image</strong>.
                </li>

                <li>
                  Wait while the image is processed.
                </li>

                <li>
                  Click <strong>Download</strong> to save
                  your compressed image.
                </li>
              </ol>
            </section>

            {/* =========================
                IMAGE COMPRESSION USE CASES
            ========================= */}

            <section className="mt-4">
              <h2>
                Why Compress Images?
              </h2>

              <p>
                Large image files can be difficult to upload,
                share or store. Image compression reduces the
                amount of data in an image so that the resulting
                file can be easier to handle.
              </p>

              <ul>
                <li>
                  Reduce image file size.
                </li>

                <li>
                  Meet website and online form upload limits.
                </li>

                <li>
                  Make images easier to share.
                </li>

                <li>
                  Reduce storage requirements.
                </li>

                <li>
                  Prepare images for websites and applications.
                </li>
              </ul>
            </section>

            {/* =========================
                FORMATS
            ========================= */}

            <section className="mt-4">
              <h2>
                Supported Image Formats
              </h2>

              <h3 className="mt-3">
                JPG and JPEG
              </h3>

              <p>
                JPG and JPEG are commonly used image formats
                for photographs and web images. Toolora can
                compress JPG and JPEG images and generate a
                compressed JPEG result.
              </p>

              <h3 className="mt-3">
                PNG
              </h3>

              <p>
                PNG images can also be uploaded to the
                compressor. The resulting compressed image is
                generated in JPEG format.
              </p>

              <h3 className="mt-3">
                WebP
              </h3>

              <p>
                WebP images are supported as input files.
                Toolora processes the uploaded image and
                generates a compressed JPEG result.
              </p>
            </section>

            {/* =========================
                TARGET SIZE
            ========================= */}

            <section className="mt-4">
              <h2>
                Compress Images to a Target File Size
              </h2>

              <p>
                Toolora allows you to select a target file size
                before compression. Available options include
                20 KB, 50 KB, 100 KB, 200 KB, 500 KB and 1 MB.
              </p>

              <p>
                If you need to meet a specific upload limit,
                selecting a suitable target size can make it
                easier to prepare your image for that service.
              </p>
            </section>

            {/* =========================
                QUALITY
            ========================= */}

            <section className="mt-4">
              <h2>
                Does Compressing an Image Reduce Quality?
              </h2>

              <p>
                Image compression can affect visual quality.
                When a smaller target size is selected, stronger
                JPEG compression may be required. The ideal
                balance between file size and image quality
                depends on how the image will be used.
              </p>
            </section>

            {/* =========================
                FREE TOOL
            ========================= */}

            <section className="mt-4">
              <h2>
                Is Toolora Image Compressor Free?
              </h2>

              <p>
                Yes. Toolora's image compressor is available
                as a free online tool. You can upload a supported
                image, choose a target size, compress the image
                and download the result.
              </p>
            </section>

            {/* =========================
                FAQ
            ========================= */}

            <section className="mt-5">
              <h2>
                Frequently Asked Questions
              </h2>

              <h3 className="mt-4">
                What image formats does Toolora Image Compressor support?
              </h3>

              <p>
                Toolora Image Compressor supports JPG, PNG and
                WebP image uploads. The compressed result is
                generated as a JPEG image.
              </p>

              <h3 className="mt-4">
                Can I compress an image to a specific file size?
              </h3>

              <p>
                Yes. You can choose a target size such as
                20 KB, 50 KB, 100 KB, 200 KB, 500 KB or 1 MB.
              </p>

              <h3 className="mt-4">
                Does image compression reduce image quality?
              </h3>

              <p>
                Compression can reduce image quality because
                the tool adjusts JPEG compression to reduce
                file size. Smaller target sizes may require
                stronger compression.
              </p>

              <h3 className="mt-4">
                Is Toolora Image Compressor free?
              </h3>

              <p>
                Yes. Toolora Image Compressor is available
                as a free online image compression tool.
              </p>

              <h3 className="mt-4">
                Can I compress JPG, PNG and WebP images online?
              </h3>

              <p>
                Yes. You can upload JPG, PNG or WebP images
                and compress them directly through the
                Toolora website.
              </p>
            </section>

            {/* =========================
                RELATED TOOLS
            ========================= */}

            <section className="mt-5">
              <h2>
                Related Image Tools
              </h2>

              <p>
                Looking for another image tool? Try these
                free Toolora tools:
              </p>

              <div className="d-flex flex-wrap gap-3 mt-3">
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

export default ImageCompressor;

