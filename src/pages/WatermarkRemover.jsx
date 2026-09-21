import { useEffect, useRef, useState } from "react";

const MAX_IMAGE_SIZE = 4 * 1024 * 1024;

function WatermarkRemover() {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [imageResult, setImageResult] = useState("");

  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const imageObjectUrlRef = useRef("");
  const resultObjectUrlRef = useRef("");

  useEffect(() => {
    return () => {
      if (imageObjectUrlRef.current) {
        URL.revokeObjectURL(imageObjectUrlRef.current);
      }

      if (resultObjectUrlRef.current) {
        URL.revokeObjectURL(resultObjectUrlRef.current);
      }
    };
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setError("");
    setStatus("");
    setProgress(0);
    setImageResult("");

    if (!file.type.startsWith("image/")) {
      setImageFile(null);
      setImageUrl("");
      setError("Please select a valid JPG, PNG or WebP image.");
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      setImageFile(null);
      setImageUrl("");
      setError(
        "For now, please use an image smaller than 4 MB."
      );
      return;
    }

    if (imageObjectUrlRef.current) {
      URL.revokeObjectURL(imageObjectUrlRef.current);
    }

    if (resultObjectUrlRef.current) {
      URL.revokeObjectURL(resultObjectUrlRef.current);
      resultObjectUrlRef.current = "";
    }

    const url = URL.createObjectURL(file);

    imageObjectUrlRef.current = url;

    setImageFile(file);
    setImageUrl(url);
  };

  const removeImageWatermark = async () => {
    if (!imageFile) {
      setError("Please upload an image first.");
      return;
    }

    setProcessing(true);
    setError("");
    setStatus("Uploading image...");
    setProgress(10);
    setImageResult("");

    try {
      const formData = new FormData();

      formData.append("image", imageFile);

      setStatus("AI is detecting watermark areas...");
      setProgress(25);

      const response = await fetch("/api/watermark/image", {
        method: "POST",
        body: formData,
      });

      let data = null;

      try {
        data = await response.json();
      } catch {
        throw new Error(
          "The server returned an invalid response. Please deploy the latest version and try again."
        );
      }

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.message ||
            "Automatic watermark removal failed."
        );
      }

      setStatus("Watermark detected. Reconstructing the image...");
      setProgress(75);

      if (!data.resultUrl) {
        throw new Error(
          "The AI did not return a processed image."
        );
      }

      setImageResult(data.resultUrl);

      setProgress(100);
      setStatus(
        "Watermark removal completed successfully."
      );
    } catch (err) {
      console.error("WATERMARK REMOVER ERROR:", err);

      setError(
        err?.message ||
          "Something went wrong while removing the watermark."
      );

      setStatus("");
      setProgress(0);
    } finally {
      setProcessing(false);
    }
  };

  const downloadImage = async () => {
    if (!imageResult) {
      return;
    }

    try {
      setError("");

      const response = await fetch(imageResult);

      if (!response.ok) {
        throw new Error("Could not download the processed image.");
      }

      const blob = await response.blob();

      if (resultObjectUrlRef.current) {
        URL.revokeObjectURL(resultObjectUrlRef.current);
      }

      const downloadUrl = URL.createObjectURL(blob);

      resultObjectUrlRef.current = downloadUrl;

      const link = document.createElement("a");

      link.href = downloadUrl;
      link.download = `toolora-watermark-removed-${Date.now()}.png`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => {
        if (resultObjectUrlRef.current === downloadUrl) {
          URL.revokeObjectURL(downloadUrl);
          resultObjectUrlRef.current = "";
        }
      }, 1000);
    } catch (err) {
      console.error("DOWNLOAD ERROR:", err);

      setError(
        "Could not download the processed image. Please try again."
      );
    }
  };

  const resetTool = () => {
    if (processing) {
      return;
    }

    if (imageObjectUrlRef.current) {
      URL.revokeObjectURL(imageObjectUrlRef.current);
      imageObjectUrlRef.current = "";
    }

    if (resultObjectUrlRef.current) {
      URL.revokeObjectURL(resultObjectUrlRef.current);
      resultObjectUrlRef.current = "";
    }

    setImageFile(null);
    setImageUrl("");
    setImageResult("");
    setProcessing(false);
    setProgress(0);
    setStatus("");
    setError("");
  };

  return (
    <main className="wm-page">
      <section className="wm-hero">
        <div className="wm-container">
          <div className="wm-badge">
            ✨ AI Powered Tool
          </div>

          <h1>Watermark Remover</h1>

          <p>
            Automatically detect and remove unwanted
            watermarks, logos and text from images.
          </p>

          <div className="wm-privacy">
            🔐 Your image is sent securely to the AI
            processing service only when you click
            "Remove Watermark".
          </div>
        </div>
      </section>

      <section className="wm-container">
        {error && (
          <div className="wm-alert error">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {status && (
          <div className="wm-alert info">
            <span>🤖</span>
            <span>{status}</span>
          </div>
        )}

        {processing && (
          <div className="wm-progress-wrap">
            <div className="wm-progress-head">
              <strong>AI Processing</strong>
              <strong>{progress}%</strong>
            </div>

            <div className="wm-progress">
              <div
                className="wm-progress-bar"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <small>
              Please keep this tab open while the image
              is being processed.
            </small>
          </div>
        )}

        <section className="wm-card">
          <div className="wm-card-head">
            <div>
              <h2>Remove Watermark from Image</h2>

              <p>
                No brush. No rectangle. No manual
                selection.
              </p>
            </div>

            <span className="wm-engine">
              AI Detection + Inpainting
            </span>
          </div>

          {!imageUrl && (
            <label
              htmlFor="wm-image-upload"
              className="wm-upload"
            >
              <div className="wm-upload-icon">
                🖼️
              </div>

              <strong>Choose Image</strong>

              <span>
                JPG, PNG or WebP • Maximum 4 MB
              </span>
            </label>
          )}

          <input
            id="wm-image-upload"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            hidden
            onChange={handleImageUpload}
          />

          {imageUrl && (
            <div className="wm-workspace">
              <div className="wm-preview-label">
                <span>Original Image</span>

                <button
                  type="button"
                  className="wm-change-btn"
                  onClick={() =>
                    document
                      .getElementById("wm-image-upload")
                      ?.click()
                  }
                  disabled={processing}
                >
                  Change Image
                </button>
              </div>

              <div className="wm-image-preview">
                <img
                  src={imageUrl}
                  alt="Selected image"
                />

                <div className="wm-ai-badge">
                  🤖 AI will detect watermark
                </div>
              </div>

              <div className="wm-auto-info">
                <div className="wm-auto-icon">
                  ✨
                </div>

                <div>
                  <strong>
                    Automatic watermark detection
                  </strong>

                  <p>
                    You don't need to mark the
                    watermark manually. Toolora will
                    first detect watermark regions and
                    then reconstruct those areas.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="wm-primary-btn"
                disabled={processing}
                onClick={removeImageWatermark}
              >
                {processing
                  ? `Removing Watermark... ${progress}%`
                  : "✨ Remove Watermark Automatically"}
              </button>

              {!processing && imageResult && (
                <button
                  type="button"
                  className="wm-secondary-btn"
                  onClick={resetTool}
                >
                  Process Another Image
                </button>
              )}
            </div>
          )}

          {imageResult && (
            <div className="wm-result">
              <div className="wm-result-head">
                <div>
                  <h3>Result</h3>

                  <p>
                    AI processed image is ready.
                  </p>
                </div>

                <button
                  type="button"
                  className="wm-download"
                  onClick={downloadImage}
                >
                  ↓ Download Image
                </button>
              </div>

              <div className="wm-result-preview">
                <img
                  src={imageResult}
                  alt="Watermark removed result"
                />
              </div>
            </div>
          )}
        </section>

        <div className="wm-info-grid">
          <div className="wm-info-card">
            <div className="wm-info-icon">
              🤖
            </div>

            <h3>Automatic Detection</h3>

            <p>
              AI analyzes the image and generates a
              mask for detected watermark regions.
            </p>
          </div>

          <div className="wm-info-card">
            <div className="wm-info-icon">
              ✨
            </div>

            <h3>Smart Reconstruction</h3>

            <p>
              The detected area is reconstructed using
              surrounding image information.
            </p>
          </div>

          <div className="wm-info-card">
            <div className="wm-info-icon">
              ⚡
            </div>

            <h3>Simple Workflow</h3>

            <p>
              Upload your image, click one button and
              preview the result.
            </p>
          </div>
        </div>

        <div className="wm-disclaimer">
          <strong>Important:</strong> Only remove
          watermarks from images that you own or have
          permission to edit.
        </div>
      </section>

      <style>{`
        .wm-page{
          min-height:100vh;
          background:#f7f6ff;
          color:#172033;
          padding-bottom:80px;
        }

        .wm-container{
          width:min(1120px,calc(100% - 32px));
          margin:auto;
        }

        .wm-hero{
          text-align:center;
          padding:65px 0 45px;
        }

        .wm-badge{
          display:inline-flex;
          align-items:center;
          padding:8px 16px;
          border-radius:999px;
          background:#fff;
          color:#6c5ce7;
          font-weight:800;
          border:1px solid #e8e4ff;
        }

        .wm-hero h1{
          margin:18px 0 12px;
          font-size:clamp(36px,6vw,60px);
          font-weight:800;
          letter-spacing:-1.5px;
        }

        .wm-hero p{
          max-width:720px;
          margin:auto;
          color:#667085;
          line-height:1.75;
          font-size:17px;
        }

        .wm-privacy{
          margin-top:18px;
          color:#475467;
          font-size:14px;
        }

        .wm-alert{
          display:flex;
          gap:10px;
          align-items:flex-start;
          padding:14px 16px;
          border-radius:13px;
          margin-bottom:14px;
          font-weight:600;
        }

        .wm-alert.error{
          background:#fff1f2;
          color:#be123c;
          border:1px solid #fecdd3;
        }

        .wm-alert.info{
          background:#eef2ff;
          color:#4338ca;
          border:1px solid #c7d2fe;
        }

        .wm-progress-wrap{
          background:#fff;
          border:1px solid #eaecf0;
          border-radius:16px;
          padding:16px;
          margin-bottom:18px;
          box-shadow:0 8px 30px rgba(23,32,51,.05);
        }

        .wm-progress-head{
          display:flex;
          justify-content:space-between;
          margin-bottom:9px;
        }

        .wm-progress{
          height:9px;
          border-radius:99px;
          overflow:hidden;
          background:#eaecf0;
        }

        .wm-progress-bar{
          height:100%;
          background:#6c5ce7;
          border-radius:99px;
          transition:width .3s ease;
        }

        .wm-progress-wrap small{
          display:block;
          margin-top:9px;
          color:#98a2b3;
        }

        .wm-card{
          background:#fff;
          border:1px solid #eaecf0;
          border-radius:24px;
          padding:30px;
          box-shadow:0 18px 60px rgba(23,32,51,.07);
        }

        .wm-card-head{
          display:flex;
          justify-content:space-between;
          gap:20px;
          margin-bottom:25px;
        }

        .wm-card-head h2{
          margin:0 0 7px;
          font-size:25px;
          font-weight:800;
        }

        .wm-card-head p{
          margin:0;
          color:#667085;
        }

        .wm-engine{
          height:max-content;
          padding:9px 13px;
          border-radius:9px;
          background:#f4f3ff;
          color:#6c5ce7;
          font-size:12px;
          font-weight:800;
          white-space:nowrap;
        }

        .wm-upload{
          min-height:230px;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:8px;
          border:2px dashed #d8d4fb;
          border-radius:20px;
          background:#faf9ff;
          cursor:pointer;
          transition:.2s ease;
        }

        .wm-upload:hover{
          background:#f4f1ff;
          border-color:#6c5ce7;
          transform:translateY(-2px);
        }

        .wm-upload-icon{
          font-size:42px;
          margin-bottom:5px;
        }

        .wm-upload strong{
          font-size:18px;
        }

        .wm-upload span{
          color:#98a2b3;
          font-size:13px;
        }

        .wm-workspace{
          margin-top:22px;
        }

        .wm-preview-label{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:12px;
          font-weight:800;
        }

        .wm-change-btn{
          border:1px solid #ddd8ff;
          background:#faf9ff;
          color:#6c5ce7;
          border-radius:9px;
          padding:8px 12px;
          font-weight:700;
          cursor:pointer;
        }

        .wm-change-btn:disabled{
          opacity:.5;
          cursor:not-allowed;
        }

        .wm-image-preview{
          position:relative;
          display:flex;
          justify-content:center;
          align-items:center;
          min-height:250px;
          max-height:650px;
          overflow:hidden;
          border-radius:18px;
          background:#101828;
        }

        .wm-image-preview img{
          display:block;
          width:100%;
          max-height:650px;
          object-fit:contain;
        }

        .wm-ai-badge{
          position:absolute;
          top:14px;
          right:14px;
          padding:9px 12px;
          border-radius:10px;
          background:rgba(23,32,51,.85);
          color:#fff;
          font-size:12px;
          font-weight:800;
          backdrop-filter:blur(8px);
        }

        .wm-auto-info{
          display:flex;
          gap:14px;
          align-items:flex-start;
          margin-top:18px;
          padding:17px;
          border-radius:15px;
          background:#f8f7ff;
          border:1px solid #e8e4ff;
        }

        .wm-auto-icon{
          width:40px;
          height:40px;
          flex:0 0 40px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:11px;
          background:#6c5ce7;
          color:#fff;
        }

        .wm-auto-info strong{
          display:block;
          margin-bottom:4px;
        }

        .wm-auto-info p{
          margin:0;
          color:#667085;
          font-size:13px;
          line-height:1.6;
        }

        .wm-primary-btn{
          width:100%;
          margin-top:18px;
          padding:15px 18px;
          border:0;
          border-radius:13px;
          background:#6c5ce7;
          color:#fff;
          font-weight:800;
          font-size:15px;
          cursor:pointer;
          transition:.2s ease;
        }

        .wm-primary-btn:hover:not(:disabled){
          background:#5848d8;
          transform:translateY(-1px);
        }

        .wm-primary-btn:disabled{
          opacity:.55;
          cursor:not-allowed;
        }

        .wm-secondary-btn{
          width:100%;
          margin-top:10px;
          padding:12px 18px;
          border:1px solid #ddd8ff;
          border-radius:13px;
          background:#fff;
          color:#6c5ce7;
          font-weight:800;
          cursor:pointer;
        }

        .wm-result{
          margin-top:30px;
          padding-top:25px;
          border-top:1px solid #eaecf0;
        }

        .wm-result-head{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:15px;
          margin-bottom:15px;
        }

        .wm-result-head h3{
          margin:0 0 4px;
        }

        .wm-result-head p{
          margin:0;
          color:#98a2b3;
          font-size:13px;
        }

        .wm-download{
          border:0;
          border-radius:10px;
          padding:11px 15px;
          background:#172033;
          color:#fff;
          font-weight:800;
          cursor:pointer;
        }

        .wm-download:hover{
          background:#0d1320;
        }

        .wm-result-preview{
          overflow:hidden;
          border-radius:17px;
          background:#101828;
        }

        .wm-result-preview img{
          display:block;
          width:100%;
          max-height:700px;
          object-fit:contain;
        }

        .wm-info-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:16px;
          margin-top:20px;
        }

        .wm-info-card{
          padding:22px;
          border:1px solid #eaecf0;
          border-radius:18px;
          background:#fff;
        }

        .wm-info-icon{
          font-size:25px;
        }

        .wm-info-card h3{
          margin:10px 0 7px;
          font-size:18px;
        }

        .wm-info-card p{
          margin:0;
          color:#667085;
          font-size:13px;
          line-height:1.65;
        }

        .wm-disclaimer{
          margin-top:18px;
          padding:15px 17px;
          border-radius:14px;
          background:#fff;
          border:1px solid #eaecf0;
          color:#667085;
          font-size:13px;
          line-height:1.6;
        }

        @media(max-width:768px){
          .wm-card{
            padding:18px;
          }

          .wm-card-head{
            flex-direction:column;
          }

          .wm-info-grid{
            grid-template-columns:1fr;
          }

          .wm-result-head{
            align-items:flex-start;
            flex-direction:column;
          }

          .wm-download{
            width:100%;
          }

          .wm-ai-badge{
            left:12px;
            right:auto;
          }
        }
      `}</style>
    </main>
  );
}

export default WatermarkRemover;