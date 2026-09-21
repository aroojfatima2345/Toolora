import { useRef, useState } from "react";
import { removeBackground } from "@imgly/background-removal";
import SEO from "../components/SEO";

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

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Image size must be 10MB or smaller.");
      return;
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

  return (
    <>
      <SEO
        title="Background Remover - Remove Image Background Online"
        description="Remove image backgrounds online for free with Toolora. Upload an image and download a transparent PNG without installing software."
        keywords="background remover, remove image background, transparent background, background remover online, remove background from image, free background remover"
        canonical="/background-remover"
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
            Background Remover
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
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
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
                accept="image/*"
                onChange={handleInputChange}
                hidden
              />
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
                          alt="Background removed result"
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

        {/* INFO */}

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
            of an image and remove its background.
          </p>

          <h3 className="h5 fw-bold mt-4">
            How to remove a background?
          </h3>

          <ol className="text-muted">
            <li className="mb-2">
              Upload your JPG, PNG or WebP image.
            </li>

            <li className="mb-2">
              Click <strong>Remove Background</strong>.
            </li>

            <li className="mb-2">
              Wait while the image is processed.
            </li>

            <li>
              Download your transparent PNG.
            </li>
          </ol>

          <h3 className="h5 fw-bold mt-4">
            Is it free?
          </h3>

          <p className="text-muted">
            Yes. You can use this Toolora image tool without
            installing desktop software.
          </p>
        </section>

        {/* AD PLACEHOLDER */}

        <div
          className="mx-auto mt-5"
          style={{
            maxWidth: "900px",
            minHeight: "90px",
            border: "1px dashed #d8d5e8",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#999",
            fontSize: "13px",
          }}
        >
          Advertisement
        </div>
      </main>
    </>
  );
}

export default BackgroundRemover;