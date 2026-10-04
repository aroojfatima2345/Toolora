
import { useRef, useState } from "react";
import { removeBackground } from "@imgly/background-removal";
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

function BackgroundRemover() {
  const inputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [originalPreview, setOriginalPreview] = useState("");
  const [resultPreview, setResultPreview] = useState("");
  const [resultBlob, setResultBlob] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const handleFile = (file) => {
    setError("");
    setResultPreview("");
    setResultBlob(null);
    setProgress(0);

    if (!file) return;

    const isSupportedImage =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/webp" ||
      /\.(jpe?g|png|webp)$/i.test(file.name);

    if (!isSupportedImage) {
      setError("Please select a JPG, PNG, or WebP image.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Image size must be 10MB or smaller.");
      return;
    }

    if (originalPreview) {
      URL.revokeObjectURL(originalPreview);
    }

    if (resultPreview) {
      URL.revokeObjectURL(resultPreview);
    }

    setSelectedFile(file);

    const previewUrl = URL.createObjectURL(file);
    setOriginalPreview(previewUrl);
  };

  const handleInputChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      handleFile(file);
    }

    event.target.value = "";
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files?.[0];

    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const removeImageBackground = async () => {
    if (!selectedFile) return;

    try {
      setIsProcessing(true);
      setError("");
      setResultPreview("");
      setResultBlob(null);
      setProgress(0);

      const result = await removeBackground(selectedFile, {
        progress: (_key, current, total) => {
          if (total > 0) {
            const percentage = Math.round(
              (current / total) * 100
            );

            setProgress(Math.min(percentage, 100));
          }
        },
      });

      const resultUrl = URL.createObjectURL(result);

      setResultBlob(result);
      setResultPreview(resultUrl);
      setProgress(100);
    } catch (err) {
      console.error("Background removal failed:", err);

      setError(
        "Something went wrong while removing the background. Please try another image."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadResult = () => {
    if (!resultBlob) return;

    const downloadUrl = URL.createObjectURL(resultBlob);

    const link = document.createElement("a");

    link.href = downloadUrl;
    link.download = "toolora-background-removed.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(downloadUrl);
  };

  const resetTool = () => {
    if (originalPreview) {
      URL.revokeObjectURL(originalPreview);
    }

    if (resultPreview) {
      URL.revokeObjectURL(resultPreview);
    }

    setSelectedFile(null);
    setOriginalPreview("");
    setResultPreview("");
    setResultBlob(null);
    setProgress(0);
    setError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Toolora Background Remover",
      url: "https://www.toolora.click/background-remover",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web Browser",
      description:
        "Free online background remover that automatically removes image backgrounds and creates transparent PNG images.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Remove image backgrounds online",
        "Automatic background removal",
        "Transparent PNG output",
        "JPG support",
        "PNG support",
        "WebP support",
        "Browser-based image processing",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Remove an Image Background Online",
      description:
        "Remove the background from a JPG, PNG, or WebP image using Toolora's free online background remover.",
      totalTime: "PT2M",
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
          name: "Upload an image",
          text: "Upload a JPG, PNG, or WebP image to Toolora's Background Remover.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Remove the background",
          text: "Click the Remove Background button and wait for the browser-based AI processing to finish.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Preview the result",
          text: "Preview the image with its background removed and transparency applied.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Download the PNG",
          text: "Download the background-removed image as a transparent PNG.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I remove a background from an image?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Upload a JPG, PNG, or WebP image to Toolora's Background Remover, click Remove Background, wait for processing to finish, and download the transparent PNG.",
          },
        },
        {
          "@type": "Question",
          name: "Is Toolora's Background Remover free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Toolora's Background Remover is available online for free without requiring desktop software.",
          },
        },
        {
          "@type": "Question",
          name: "Which image formats are supported?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Toolora's Background Remover supports JPG, PNG, and WebP images up to 10MB.",
          },
        },
        {
          "@type": "Question",
          name: "What format is the result?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The background-removed image is provided as a PNG with a transparent background.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to install software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Toolora's Background Remover works directly in a modern web browser.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Background Remover Online - Remove Image Background Free"
        description="Remove image backgrounds online for free with Toolora. Automatically remove backgrounds from JPG, PNG and WebP images and download a transparent PNG directly in your browser."
        keywords="background remover, remove background from image, background remover online, remove image background, transparent background, image background remover, free background remover, remove background online, JPG background remover, PNG background remover"
        canonical="/background-remover"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="container py-5">
        {/* HEADER */}
        <div className="text-center mb-5">
          <div
            style={{
              display: "inline-block",
              background: "#f0edff",
              color: "#6c5ce7",
              padding: "8px 16px",
              borderRadius: "50px",
              fontWeight: "600",
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            ✨ Free Image Tool
          </div>

          <h1
            className="fw-bold mb-3"
            style={{
              color: "#172033",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
            }}
          >
            Background Remover Online
          </h1>

          <p
            className="text-muted mx-auto"
            style={{
              maxWidth: "680px",
              fontSize: "17px",
              lineHeight: "1.7",
            }}
          >
            Remove backgrounds from images automatically and
            download your result as a transparent PNG.
          </p>
        </div>

        <AdPlaceholder label="Advertisement" />

        {/* TOOL CARD */}
        <div
          className="mx-auto"
          style={{
            maxWidth: "1000px",
            background: "#ffffff",
            borderRadius: "24px",
            padding: "clamp(20px, 4vw, 40px)",
            boxShadow: "0 15px 50px rgba(23, 32, 51, 0.08)",
            border: "1px solid #eeeef5",
          }}
        >
          {!selectedFile ? (
            <>
              {/* UPLOAD AREA */}
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => inputRef.current?.click()}
                role="button"
                tabIndex={0}
                aria-label="Upload an image"
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    inputRef.current?.click();
                  }
                }}
                style={{
                  border: "2px dashed #c9c4ee",
                  borderRadius: "20px",
                  padding: "60px 20px",
                  textAlign: "center",
                  background: "#faf9ff",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    fontSize: "54px",
                    marginBottom: "15px",
                  }}
                >
                  🖼️
                </div>

                <h2
                  className="h4 fw-bold mb-2"
                  style={{ color: "#172033" }}
                >
                  Upload an Image
                </h2>

                <p className="text-muted mb-4">
                  Drag & drop your image here or click to browse
                </p>

                <button
                  type="button"
                  className="btn btn-primary px-4 py-2"
                  style={{
                    background: "#6c5ce7",
                    borderColor: "#6c5ce7",
                  }}
                  onClick={(event) => {
                    event.stopPropagation();
                    inputRef.current?.click();
                  }}
                >
                  Choose Image
                </button>

                <p
                  className="text-muted mb-0 mt-3"
                  style={{ fontSize: "13px" }}
                >
                  JPG, PNG, WebP • Maximum 10MB
                </p>
              </div>

              <input
                ref={inputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"
                onChange={handleInputChange}
                hidden
              />

              {error && (
                <div
                  className="alert alert-danger mt-4 mb-0"
                  role="alert"
                >
                  {error}
                </div>
              )}
            </>
          ) : (
            <>
              {/* PREVIEWS */}
              <div className="row g-4">
                {/* ORIGINAL */}
                <div className="col-md-6">
                  <div
                    style={{
                      border: "1px solid #e7e7ee",
                      borderRadius: "18px",
                      padding: "18px",
                      height: "100%",
                    }}
                  >
                    <h2 className="h5 fw-bold mb-3">
                      Original Image
                    </h2>

                    <div
                      style={{
                        minHeight: "280px",
                        background: "#f5f5f7",
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={originalPreview}
                        alt="Original uploaded image"
                        style={{
                          maxWidth: "100%",
                          maxHeight: "400px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* RESULT */}
                <div className="col-md-6">
                  <div
                    style={{
                      border: "1px solid #e7e7ee",
                      borderRadius: "18px",
                      padding: "18px",
                      height: "100%",
                    }}
                  >
                    <h2 className="h5 fw-bold mb-3">
                      Background Removed
                    </h2>

                    <div
                      style={{
                        minHeight: "280px",
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        backgroundImage:
                          "linear-gradient(45deg, #eeeeee 25%, transparent 25%), linear-gradient(-45deg, #eeeeee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eeeeee 75%), linear-gradient(-45deg, transparent 75%, #eeeeee 75%)",
                        backgroundSize: "24px 24px",
                        backgroundPosition:
                          "0 0, 0 12px, 12px -12px, -12px 0",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {resultPreview ? (
                        <img
                          src={resultPreview}
                          alt="Background removed transparent PNG result"
                          style={{
                            maxWidth: "100%",
                            maxHeight: "400px",
                            objectFit: "contain",
                          }}
                        />
                      ) : (
                        <div className="text-center text-muted px-3">
                          <div
                            style={{
                              fontSize: "42px",
                              marginBottom: "10px",
                            }}
                          >
                            ✨
                          </div>

                          <p className="mb-0">
                            Your transparent image will appear here.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* PROGRESS */}
              {isProcessing && (
                <div className="mt-4">
                  <div className="d-flex justify-content-between mb-2">
                    <strong>
                      Removing background...
                    </strong>

                    <span>{progress}%</span>
                  </div>

                  <div
                    className="progress"
                    style={{
                      height: "10px",
                      borderRadius: "20px",
                      background: "#eceaf7",
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${progress}%`,
                        background: "#6c5ce7",
                      }}
                      aria-valuenow={progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>

                  <p className="text-muted small mt-2 mb-0">
                    The first image may take longer because the
                    AI model needs to load in your browser.
                  </p>
                </div>
              )}

              {/* ERROR */}
              {error && (
                <div
                  className="alert alert-danger mt-4 mb-0"
                  role="alert"
                >
                  {error}
                </div>
              )}

              {/* ACTIONS */}
              <div className="d-flex flex-wrap gap-2 justify-content-center mt-4">
                {!resultPreview && !isProcessing && (
                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={removeImageBackground}
                    style={{
                      background: "#6c5ce7",
                      borderColor: "#6c5ce7",
                    }}
                  >
                    ✨ Remove Background
                  </button>
                )}

                {resultPreview && !isProcessing && (
                  <button
                    type="button"
                    className="btn btn-success px-4"
                    onClick={downloadResult}
                  >
                    ⬇ Download PNG
                  </button>
                )}

                <button
                  type="button"
                  className="btn btn-outline-secondary px-4"
                  onClick={resetTool}
                  disabled={isProcessing}
                >
                  ↻ Choose Another Image
                </button>
              </div>
            </>
          )}
        </div>

        <AdPlaceholder label="Advertisement" />

        {/* SEO CONTENT */}
        <section
          className="mx-auto mt-5"
          style={{ maxWidth: "900px" }}
        >
          <h2 className="h3 fw-bold mb-3">
            Remove Image Background Online
          </h2>

          <p className="text-muted">
            Toolora's Background Remover uses browser-based
            processing to automatically detect the main subject
            of an image and remove its background. The result can
            be downloaded as a transparent PNG.
          </p>

          <h3 className="h5 fw-bold mt-4">
            How to remove a background from an image?
          </h3>

          <ol className="text-muted">
            <li className="mb-2">
              Upload your JPG, PNG, or WebP image.
            </li>

            <li className="mb-2">
              Click <strong>Remove Background</strong>.
            </li>

            <li className="mb-2">
              Wait while the image is processed in your browser.
            </li>

            <li>
              Preview and download your transparent PNG.
            </li>
          </ol>

          <h3 className="h5 fw-bold mt-4">
            Which image formats are supported?
          </h3>

          <p className="text-muted">
            You can upload JPG, JPEG, PNG, and WebP images up to
            10MB. The processed result is downloaded as a PNG
            with a transparent background.
          </p>

          <h3 className="h5 fw-bold mt-4">
            Is the Background Remover free?
          </h3>

          <p className="text-muted">
            Yes. Toolora's Background Remover is free to use
            online. You do not need to install desktop software
            to remove an image background.
          </p>

          <h3 className="h5 fw-bold mt-4">
            What can you use a transparent background for?
          </h3>

          <p className="text-muted">
            Transparent PNG images are useful for product images,
            profile pictures, social media graphics, presentations,
            websites, logos, and other designs where you want the
            main subject without its original background.
          </p>

          <h3 className="h5 fw-bold mt-4">
            Frequently Asked Questions
          </h3>

          <div className="mt-3">
            <h4 className="h6 fw-bold">
              How do I remove a background from an image?
            </h4>

            <p className="text-muted">
              Upload your image, click Remove Background, wait for
              processing, and download the transparent PNG result.
            </p>

            <h4 className="h6 fw-bold mt-4">
              Is Toolora's Background Remover free?
            </h4>

            <p className="text-muted">
              Yes. The tool is available online for free.
            </p>

            <h4 className="h6 fw-bold mt-4">
              Which image formats can I upload?
            </h4>

            <p className="text-muted">
              JPG, JPEG, PNG, and WebP images up to 10MB are
              supported.
            </p>

            <h4 className="h6 fw-bold mt-4">
              What format will I receive?
            </h4>

            <p className="text-muted">
              The result is downloaded as a PNG with a transparent
              background.
            </p>

            <h4 className="h6 fw-bold mt-4">
              Do I need to install software?
            </h4>

            <p className="text-muted">
              No. The tool works directly in a modern web browser.
            </p>
          </div>
        </section>

        <AdPlaceholder label="Advertisement" />
      </main>
    </>
  );
}

export default BackgroundRemover;

