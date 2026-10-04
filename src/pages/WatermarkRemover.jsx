// import { useEffect, useRef, useState } from "react";

// const MAX_IMAGE_SIZE = 4 * 1024 * 1024;
// const MAX_VIDEO_SIZE = 100 * 1024 * 1024;

// const IMAGE_WATERMARK_API_URL =
//   "http://127.0.0.1:8000/remove-watermark";

// const VIDEO_WATERMARK_API_URL =
//   "http://127.0.0.1:8000/remove-watermark-video";

// function WatermarkRemover() {
//   const [mediaType, setMediaType] = useState("image");

//   const [imageFile, setImageFile] = useState(null);
//   const [imageUrl, setImageUrl] = useState("");
//   const [imageResult, setImageResult] = useState("");

//   const [videoFile, setVideoFile] = useState(null);
//   const [videoUrl, setVideoUrl] = useState("");
//   const [videoResult, setVideoResult] = useState("");

//   const [processing, setProcessing] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [status, setStatus] = useState("");
//   const [error, setError] = useState("");

//   const imageObjectUrlRef = useRef("");
//   const imageResultObjectUrlRef = useRef("");

//   const videoObjectUrlRef = useRef("");
//   const videoResultObjectUrlRef = useRef("");

//   // ============================================================
//   // CLEANUP
//   // ============================================================

//   useEffect(() => {
//     return () => {
//       if (imageObjectUrlRef.current) {
//         URL.revokeObjectURL(imageObjectUrlRef.current);
//       }

//       if (imageResultObjectUrlRef.current) {
//         URL.revokeObjectURL(imageResultObjectUrlRef.current);
//       }

//       if (videoObjectUrlRef.current) {
//         URL.revokeObjectURL(videoObjectUrlRef.current);
//       }

//       if (videoResultObjectUrlRef.current) {
//         URL.revokeObjectURL(videoResultObjectUrlRef.current);
//       }
//     };
//   }, []);

//   // ============================================================
//   // HELPERS
//   // ============================================================

//   const clearImageUrls = () => {
//     if (imageObjectUrlRef.current) {
//       URL.revokeObjectURL(imageObjectUrlRef.current);
//       imageObjectUrlRef.current = "";
//     }

//     if (imageResultObjectUrlRef.current) {
//       URL.revokeObjectURL(imageResultObjectUrlRef.current);
//       imageResultObjectUrlRef.current = "";
//     }
//   };

//   const clearVideoUrls = () => {
//     if (videoObjectUrlRef.current) {
//       URL.revokeObjectURL(videoObjectUrlRef.current);
//       videoObjectUrlRef.current = "";
//     }

//     if (videoResultObjectUrlRef.current) {
//       URL.revokeObjectURL(videoResultObjectUrlRef.current);
//       videoResultObjectUrlRef.current = "";
//     }
//   };

//   const resetMessages = () => {
//     setError("");
//     setStatus("");
//     setProgress(0);
//   };

//   // ============================================================
//   // IMAGE UPLOAD
//   // ============================================================

//   const handleImageUpload = (event) => {
//     const file = event.target.files?.[0];

//     if (!file) {
//       return;
//     }

//     resetMessages();
//     setImageResult("");

//     const allowedTypes = [
//       "image/jpeg",
//       "image/jpg",
//       "image/png",
//       "image/webp",
//     ];

//     if (!allowedTypes.includes(file.type)) {
//       setImageFile(null);
//       setImageUrl("");

//       setError(
//         "Please select a valid JPG, PNG or WebP image."
//       );

//       return;
//     }

//     if (file.size > MAX_IMAGE_SIZE) {
//       setImageFile(null);
//       setImageUrl("");

//       setError(
//         "For now, please use an image smaller than 4 MB."
//       );

//       return;
//     }

//     clearImageUrls();

//     const url = URL.createObjectURL(file);

//     imageObjectUrlRef.current = url;

//     setImageFile(file);
//     setImageUrl(url);
//     setImageResult("");
//     setMediaType("image");
//   };

//   // ============================================================
//   // VIDEO UPLOAD
//   // ============================================================

//   const handleVideoUpload = (event) => {
//     const file = event.target.files?.[0];

//     if (!file) {
//       return;
//     }

//     resetMessages();
//     setVideoResult("");

//     const allowedTypes = [
//       "video/mp4",
//       "video/webm",
//       "video/quicktime",
//       "video/x-matroska",
//       "video/mkv",
//     ];

//     const allowedExtensions = [
//       ".mp4",
//       ".webm",
//       ".mov",
//       ".mkv",
//       ".avi",
//       ".m4v",
//     ];

//     const fileName = file.name.toLowerCase();

//     const hasAllowedExtension = allowedExtensions.some(
//       (extension) => fileName.endsWith(extension)
//     );

//     const hasAllowedMimeType =
//       allowedTypes.includes(file.type);

//     if (!hasAllowedMimeType && !hasAllowedExtension) {
//       setVideoFile(null);
//       setVideoUrl("");

//       setError(
//         "Please select a valid MP4, WebM, MOV, MKV, AVI or M4V video."
//       );

//       return;
//     }

//     if (file.size > MAX_VIDEO_SIZE) {
//       setVideoFile(null);
//       setVideoUrl("");

//       setError(
//         "For now, please use a video smaller than 100 MB."
//       );

//       return;
//     }

//     clearVideoUrls();

//     const url = URL.createObjectURL(file);

//     videoObjectUrlRef.current = url;

//     setVideoFile(file);
//     setVideoUrl(url);
//     setVideoResult("");
//     setMediaType("video");
//   };

//   // ============================================================
//   // REMOVE IMAGE WATERMARK
//   // ============================================================

//   const removeImageWatermark = async () => {
//     if (!imageFile) {
//       setError("Please upload an image first.");
//       return;
//     }

//     setProcessing(true);
//     setError("");
//     setStatus("Preparing image...");
//     setProgress(5);
//     setImageResult("");

//     try {
//       const formData = new FormData();

//       formData.append("file", imageFile);

//       setStatus("Uploading image...");
//       setProgress(15);

//       setStatus("AI is detecting watermark regions...");
//       setProgress(30);

//       const response = await fetch(
//         IMAGE_WATERMARK_API_URL,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if (!response.ok) {
//         let message =
//           "Automatic watermark removal failed.";

//         try {
//           const errorData = await response.json();

//           if (errorData?.detail) {
//             message = errorData.detail;
//           }
//         } catch {
//           // Ignore invalid response
//         }

//         throw new Error(message);
//       }

//       setStatus(
//         "Watermark detected. Reconstructing image..."
//       );
//       setProgress(75);

//       const resultBlob = await response.blob();

//       if (!resultBlob || resultBlob.size === 0) {
//         throw new Error(
//           "The processed image was not returned by the server."
//         );
//       }

//       if (imageResultObjectUrlRef.current) {
//         URL.revokeObjectURL(
//           imageResultObjectUrlRef.current
//         );

//         imageResultObjectUrlRef.current = "";
//       }

//       const resultUrl = URL.createObjectURL(
//         resultBlob
//       );

//       imageResultObjectUrlRef.current = resultUrl;

//       setImageResult(resultUrl);

//       setProgress(100);

//       setStatus(
//         "Watermark removal completed successfully."
//       );
//     } catch (err) {
//       console.error(
//         "IMAGE WATERMARK REMOVER ERROR:",
//         err
//       );

//       let errorMessage =
//         "Something went wrong while removing the watermark.";

//       if (
//         err?.name === "TypeError" &&
//         err?.message?.toLowerCase().includes("fetch")
//       ) {
//         errorMessage =
//           "Could not connect to the processing server. Make sure the Python server is running on port 8000.";
//       } else if (err?.message) {
//         errorMessage = err.message;
//       }

//       setError(errorMessage);
//       setStatus("");
//       setProgress(0);
//     } finally {
//       setProcessing(false);
//     }
//   };

//   // ============================================================
//   // REMOVE VIDEO WATERMARK
//   // ============================================================

//   const removeVideoWatermark = async () => {
//     if (!videoFile) {
//       setError("Please upload a video first.");
//       return;
//     }

//     setProcessing(true);
//     setError("");
//     setStatus("Preparing video...");
//     setProgress(5);
//     setVideoResult("");

//     try {
//       const formData = new FormData();

//       formData.append("file", videoFile);

//       setStatus("Uploading video...");
//       setProgress(10);

//       setStatus("Analyzing video frames...");
//       setProgress(20);

//       // IMPORTANT:
//       // Video MUST use the dedicated video endpoint.
//       const response = await fetch(
//         VIDEO_WATERMARK_API_URL,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if (!response.ok) {
//         let message =
//           "Automatic video watermark removal failed.";

//         try {
//           const errorData = await response.json();

//           if (errorData?.detail) {
//             message = errorData.detail;
//           }
//         } catch {
//           // Ignore invalid response
//         }

//         throw new Error(message);
//       }

//       setStatus(
//         "Detecting and tracking watermark across video..."
//       );
//       setProgress(50);

//       const resultBlob = await response.blob();

//       if (!resultBlob || resultBlob.size === 0) {
//         throw new Error(
//           "The processed video was not returned by the server."
//         );
//       }

//       setStatus(
//         "Finalizing MP4 video and preserving audio..."
//       );
//       setProgress(85);

//       if (videoResultObjectUrlRef.current) {
//         URL.revokeObjectURL(
//           videoResultObjectUrlRef.current
//         );

//         videoResultObjectUrlRef.current = "";
//       }

//       const resultUrl = URL.createObjectURL(
//         resultBlob
//       );

//       videoResultObjectUrlRef.current = resultUrl;

//       setVideoResult(resultUrl);

//       setProgress(100);

//       setStatus(
//         "Video watermark removal completed successfully."
//       );
//     } catch (err) {
//       console.error(
//         "VIDEO WATERMARK REMOVER ERROR:",
//         err
//       );

//       let errorMessage =
//         "Something went wrong while processing the video.";

//       if (
//         err?.name === "TypeError" &&
//         err?.message?.toLowerCase().includes("fetch")
//       ) {
//         errorMessage =
//           "Could not connect to the processing server. Make sure the Python server is running on port 8000.";
//       } else if (err?.message) {
//         errorMessage = err.message;
//       }

//       setError(errorMessage);
//       setStatus("");
//       setProgress(0);
//     } finally {
//       setProcessing(false);
//     }
//   };

//   // ============================================================
//   // DOWNLOAD IMAGE
//   // ============================================================

//   const downloadImage = () => {
//     if (!imageResult) {
//       return;
//     }

//     try {
//       setError("");

//       const link = document.createElement("a");

//       link.href = imageResult;

//       link.download =
//         `toolora-watermark-removed-${Date.now()}.png`;

//       document.body.appendChild(link);

//       link.click();

//       link.remove();
//     } catch (err) {
//       console.error("IMAGE DOWNLOAD ERROR:", err);

//       setError(
//         "Could not download the processed image. Please try again."
//       );
//     }
//   };

//   // ============================================================
//   // DOWNLOAD VIDEO
//   // ============================================================

//   const downloadVideo = () => {
//     if (!videoResult) {
//       return;
//     }

//     try {
//       setError("");

//       const link = document.createElement("a");

//       link.href = videoResult;

//       link.download =
//         `toolora-watermark-removed-${Date.now()}.mp4`;

//       document.body.appendChild(link);

//       link.click();

//       link.remove();
//     } catch (err) {
//       console.error("VIDEO DOWNLOAD ERROR:", err);

//       setError(
//         "Could not download the processed video. Please try again."
//       );
//     }
//   };

//   // ============================================================
//   // RESET IMAGE
//   // ============================================================

//   const resetImageTool = () => {
//     if (processing) {
//       return;
//     }

//     clearImageUrls();

//     setImageFile(null);
//     setImageUrl("");
//     setImageResult("");

//     resetMessages();

//     const input =
//       document.getElementById("wm-image-upload");

//     if (input) {
//       input.value = "";
//     }
//   };

//   // ============================================================
//   // RESET VIDEO
//   // ============================================================

//   const resetVideoTool = () => {
//     if (processing) {
//       return;
//     }

//     clearVideoUrls();

//     setVideoFile(null);
//     setVideoUrl("");
//     setVideoResult("");

//     resetMessages();

//     const input =
//       document.getElementById("wm-video-upload");

//     if (input) {
//       input.value = "";
//     }
//   };

//   // ============================================================
//   // SWITCH MEDIA TYPE
//   // ============================================================

//   const switchMediaType = (type) => {
//     if (processing) {
//       return;
//     }

//     setMediaType(type);
//     resetMessages();

//     if (type === "image") {
//       clearVideoUrls();

//       setVideoFile(null);
//       setVideoUrl("");
//       setVideoResult("");

//       const input =
//         document.getElementById("wm-video-upload");

//       if (input) {
//         input.value = "";
//       }
//     }

//     if (type === "video") {
//       clearImageUrls();

//       setImageFile(null);
//       setImageUrl("");
//       setImageResult("");

//       const input =
//         document.getElementById("wm-image-upload");

//       if (input) {
//         input.value = "";
//       }
//     }
//   };

//   // ============================================================
//   // CURRENT MEDIA
//   // ============================================================

//   const hasCurrentMedia =
//     mediaType === "image"
//       ? Boolean(imageUrl)
//       : Boolean(videoUrl);

//   const hasCurrentResult =
//     mediaType === "image"
//       ? Boolean(imageResult)
//       : Boolean(videoResult);

//   // ============================================================
//   // UI
//   // ============================================================

//   return (
//     <main className="wm-page">
//       <section className="wm-hero">
//         <div className="wm-container">
//           <div className="wm-badge">
//             ✨ Smart AI Watermark Removal
//           </div>

//           <h1>Watermark Remover</h1>

//           <p>
//             Automatically detect and remove unwanted
//             watermarks, logos and text from images and
//             videos.
//           </p>

//           <div className="wm-privacy">
//             🔐 Your media is processed through the
//             Toolora processing server.
//           </div>
//         </div>
//       </section>

//       <section className="wm-container">
//         {/* ERROR */}

//         {error && (
//           <div className="wm-alert error">
//             <span>⚠️</span>
//             <span>{error}</span>
//           </div>
//         )}

//         {/* STATUS */}

//         {status && (
//           <div className="wm-alert info">
//             <span>✨</span>
//             <span>{status}</span>
//           </div>
//         )}

//         {/* PROGRESS */}

//         {processing && (
//           <div className="wm-progress-wrap">
//             <div className="wm-progress-head">
//               <strong>Processing</strong>

//               <strong>{progress}%</strong>
//             </div>

//             <div className="wm-progress">
//               <div
//                 className="wm-progress-bar"
//                 style={{
//                   width: `${progress}%`,
//                 }}
//               />
//             </div>

//             <small>
//               Please keep this tab open while your
//               {mediaType === "video"
//                 ? " video"
//                 : " image"}{" "}
//               is being processed.
//             </small>
//           </div>
//         )}

//         {/* MAIN CARD */}

//         <section className="wm-card">
//           {/* MEDIA TABS */}

//           <div className="wm-tabs">
//             <button
//               type="button"
//               className={
//                 mediaType === "image"
//                   ? "wm-tab active"
//                   : "wm-tab"
//               }
//               onClick={() =>
//                 switchMediaType("image")
//               }
//               disabled={processing}
//             >
//               🖼️ Image
//             </button>

//             <button
//               type="button"
//               className={
//                 mediaType === "video"
//                   ? "wm-tab active"
//                   : "wm-tab"
//               }
//               onClick={() =>
//                 switchMediaType("video")
//               }
//               disabled={processing}
//             >
//               🎬 Video
//             </button>
//           </div>

//           <div className="wm-card-head">
//             <div>
//               <h2>
//                 Remove Watermark from{" "}
//                 {mediaType === "image"
//                   ? "Image"
//                   : "Video"}
//               </h2>

//               <p>
//                 No brush. No rectangle. No manual
//                 watermark selection.
//               </p>
//             </div>

//             <span className="wm-engine">
//               AI Automatic Processing
//             </span>
//           </div>

//           {/* ==================================================
//               IMAGE UPLOAD
//           ================================================== */}

//           {mediaType === "image" && !imageUrl && (
//             <>
//               <label
//                 htmlFor="wm-image-upload"
//                 className="wm-upload"
//               >
//                 <div className="wm-upload-icon">
//                   🖼️
//                 </div>

//                 <strong>
//                   Choose Image
//                 </strong>

//                 <span>
//                   JPG, PNG or WebP • Maximum 4 MB
//                 </span>
//               </label>

//               <input
//                 id="wm-image-upload"
//                 type="file"
//                 accept="image/jpeg,image/png,image/webp"
//                 hidden
//                 onChange={handleImageUpload}
//                 disabled={processing}
//               />
//             </>
//           )}

//           {/* ==================================================
//               VIDEO UPLOAD
//           ================================================== */}

//           {mediaType === "video" && !videoUrl && (
//             <>
//               <label
//                 htmlFor="wm-video-upload"
//                 className="wm-upload"
//               >
//                 <div className="wm-upload-icon">
//                   🎬
//                 </div>

//                 <strong>
//                   Choose Video
//                 </strong>

//                 <span>
//                   MP4, WebM, MOV or MKV • Maximum
//                   100 MB
//                 </span>
//               </label>

//               <input
//                 id="wm-video-upload"
//                 type="file"
//                 accept="video/mp4,video/webm,video/quicktime,video/x-matroska,video/x-msvideo,video/x-m4v"
//                 hidden
//                 onChange={handleVideoUpload}
//                 disabled={processing}
//               />
//             </>
//           )}

//           {/* ==================================================
//               IMAGE WORKSPACE
//           ================================================== */}

//           {mediaType === "image" && imageUrl && (
//             <div className="wm-workspace">
//               <div className="wm-preview-label">
//                 <span>Original Image</span>

//                 <button
//                   type="button"
//                   className="wm-change-btn"
//                   onClick={() =>
//                     document
//                       .getElementById(
//                         "wm-image-upload"
//                       )
//                       ?.click()
//                   }
//                   disabled={processing}
//                 >
//                   Change Image
//                 </button>
//               </div>

//               <input
//                 id="wm-image-upload"
//                 type="file"
//                 accept="image/jpeg,image/png,image/webp"
//                 hidden
//                 onChange={handleImageUpload}
//                 disabled={processing}
//               />

//               <div className="wm-image-preview">
//                 <img
//                   src={imageUrl}
//                   alt="Selected image"
//                 />

//                 <div className="wm-ai-badge">
//                   ✨ Automatic Detection
//                 </div>
//               </div>

//               <div className="wm-auto-info">
//                 <div className="wm-auto-icon">
//                   ✨
//                 </div>

//                 <div>
//                   <strong>
//                     Automatic watermark detection
//                   </strong>

//                   <p>
//                     AI automatically analyzes the
//                     image, detects likely watermark
//                     regions and reconstructs those
//                     areas.
//                   </p>
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 className="wm-primary-btn"
//                 disabled={processing}
//                 onClick={
//                   removeImageWatermark
//                 }
//               >
//                 {processing
//                   ? `Removing Watermark... ${progress}%`
//                   : "✨ Remove Watermark Automatically"}
//               </button>

//               {!processing && imageResult && (
//                 <button
//                   type="button"
//                   className="wm-secondary-btn"
//                   onClick={resetImageTool}
//                 >
//                   Process Another Image
//                 </button>
//               )}
//             </div>
//           )}

//           {/* ==================================================
//               VIDEO WORKSPACE
//           ================================================== */}

//           {mediaType === "video" && videoUrl && (
//             <div className="wm-workspace">
//               <div className="wm-preview-label">
//                 <span>Original Video</span>

//                 <button
//                   type="button"
//                   className="wm-change-btn"
//                   onClick={() =>
//                     document
//                       .getElementById(
//                         "wm-video-upload"
//                       )
//                       ?.click()
//                   }
//                   disabled={processing}
//                 >
//                   Change Video
//                 </button>
//               </div>

//               <input
//                 id="wm-video-upload"
//                 type="file"
//                 accept="video/mp4,video/webm,video/quicktime,video/x-matroska,video/x-msvideo,video/x-m4v"
//                 hidden
//                 onChange={handleVideoUpload}
//                 disabled={processing}
//               />

//               <div className="wm-video-preview">
//                 <video
//                   src={videoUrl}
//                   controls
//                   playsInline
//                 />

//                 <div className="wm-ai-badge">
//                   🎬 Automatic Tracking
//                 </div>
//               </div>

//               <div className="wm-auto-info">
//                 <div className="wm-auto-icon">
//                   🎬
//                 </div>

//                 <div>
//                   <strong>
//                     Automatic video watermark
//                     tracking
//                   </strong>

//                   <p>
//                     The backend analyzes video frames,
//                     detects watermark regions, tracks
//                     moving watermarks and reconstructs
//                     the affected areas automatically.
//                   </p>
//                 </div>
//               </div>

//               <div className="wm-video-features">
//                 <span>✓ Automatic detection</span>
//                 <span>✓ Moving watermark tracking</span>
//                 <span>✓ Frame processing</span>
//                 <span>✓ Original audio preservation</span>
//               </div>

//               <button
//                 type="button"
//                 className="wm-primary-btn"
//                 disabled={processing}
//                 onClick={
//                   removeVideoWatermark
//                 }
//               >
//                 {processing
//                   ? `Removing Watermark... ${progress}%`
//                   : "🎬 Remove Watermark Automatically"}
//               </button>

//               {!processing && videoResult && (
//                 <button
//                   type="button"
//                   className="wm-secondary-btn"
//                   onClick={resetVideoTool}
//                 >
//                   Process Another Video
//                 </button>
//               )}
//             </div>
//           )}

//           {/* ==================================================
//               IMAGE RESULT
//           ================================================== */}

//           {mediaType === "image" && imageResult && (
//             <div className="wm-result">
//               <div className="wm-result-head">
//                 <div>
//                   <h3>Result</h3>

//                   <p>
//                     Your processed image is ready.
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   className="wm-download"
//                   onClick={downloadImage}
//                 >
//                   ↓ Download Image
//                 </button>
//               </div>

//               <div className="wm-result-preview">
//                 <img
//                   src={imageResult}
//                   alt="Watermark removed result"
//                 />
//               </div>
//             </div>
//           )}

//           {/* ==================================================
//               VIDEO RESULT
//           ================================================== */}

//           {mediaType === "video" && videoResult && (
//             <div className="wm-result">
//               <div className="wm-result-head">
//                 <div>
//                   <h3>Processed Video</h3>

//                   <p>
//                     Your watermark-free video is
//                     ready.
//                   </p>
//                 </div>

//                 <button
//                   type="button"
//                   className="wm-download"
//                   onClick={downloadVideo}
//                 >
//                   ↓ Download MP4
//                 </button>
//               </div>

//               <div className="wm-result-preview wm-video-result">
//                 <video
//                   src={videoResult}
//                   controls
//                   playsInline
//                 />
//               </div>
//             </div>
//           )}
//         </section>

//         {/* INFO CARDS */}

//         <div className="wm-info-grid">
//           <div className="wm-info-card">
//             <div className="wm-info-icon">
//               🔍
//             </div>

//             <h3>
//               Automatic Detection
//             </h3>

//             <p>
//               The AI detector automatically analyzes
//               your media and identifies likely
//               watermark, logo and text regions.
//             </p>
//           </div>

//           <div className="wm-info-card">
//             <div className="wm-info-icon">
//               🎯
//             </div>

//             <h3>
//               Smart Tracking
//             </h3>

//             <p>
//               For videos, detected watermark regions
//               can be tracked across frames instead of
//               requiring manual selection.
//             </p>
//           </div>

//           <div className="wm-info-card">
//             <div className="wm-info-icon">
//               ⚡
//             </div>

//             <h3>
//               Simple Workflow
//             </h3>

//             <p>
//               Upload your image or video, click one
//               button and preview the processed result.
//             </p>
//           </div>
//         </div>

//         {/* DISCLAIMER */}

//         <div className="wm-disclaimer">
//           <strong>Important:</strong>{" "}
//           Only remove watermarks from images and
//           videos that you own or have permission to
//           edit.
//         </div>
//       </section>

//       {/* ========================================================
//           STYLES
//       ======================================================== */}

//       <style>{`
//         .wm-page {
//           min-height: 100vh;
//           background: #f7f6ff;
//           color: #172033;
//           padding-bottom: 80px;
//         }

//         .wm-container {
//           width: min(1120px, calc(100% - 32px));
//           margin: auto;
//         }

//         .wm-hero {
//           text-align: center;
//           padding: 65px 0 45px;
//         }

//         .wm-badge {
//           display: inline-flex;
//           align-items: center;
//           padding: 8px 16px;
//           border-radius: 999px;
//           background: #fff;
//           color: #6c5ce7;
//           font-weight: 800;
//           border: 1px solid #e8e4ff;
//         }

//         .wm-hero h1 {
//           margin: 18px 0 12px;
//           font-size: clamp(36px, 6vw, 60px);
//           font-weight: 800;
//           letter-spacing: -1.5px;
//         }

//         .wm-hero p {
//           max-width: 720px;
//           margin: auto;
//           color: #667085;
//           line-height: 1.75;
//           font-size: 17px;
//         }

//         .wm-privacy {
//           margin-top: 18px;
//           color: #475467;
//           font-size: 14px;
//         }

//         .wm-alert {
//           display: flex;
//           gap: 10px;
//           align-items: flex-start;
//           padding: 14px 16px;
//           border-radius: 13px;
//           margin-bottom: 14px;
//           font-weight: 600;
//         }

//         .wm-alert.error {
//           background: #fff1f2;
//           color: #be123c;
//           border: 1px solid #fecdd3;
//         }

//         .wm-alert.info {
//           background: #eef2ff;
//           color: #4338ca;
//           border: 1px solid #c7d2fe;
//         }

//         .wm-progress-wrap {
//           background: #fff;
//           border: 1px solid #eaecf0;
//           border-radius: 16px;
//           padding: 16px;
//           margin-bottom: 18px;
//           box-shadow: 0 8px 30px rgba(23, 32, 51, 0.05);
//         }

//         .wm-progress-head {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 9px;
//         }

//         .wm-progress {
//           height: 9px;
//           border-radius: 99px;
//           overflow: hidden;
//           background: #eaecf0;
//         }

//         .wm-progress-bar {
//           height: 100%;
//           background: #6c5ce7;
//           border-radius: 99px;
//           transition: width 0.3s ease;
//         }

//         .wm-progress-wrap small {
//           display: block;
//           margin-top: 9px;
//           color: #98a2b3;
//         }

//         .wm-card {
//           background: #fff;
//           border: 1px solid #eaecf0;
//           border-radius: 24px;
//           padding: 30px;
//           box-shadow: 0 18px 60px rgba(23, 32, 51, 0.07);
//         }

//         .wm-tabs {
//           display: flex;
//           gap: 8px;
//           padding: 5px;
//           width: max-content;
//           margin-bottom: 25px;
//           border-radius: 13px;
//           background: #f4f3ff;
//         }

//         .wm-tab {
//           border: 0;
//           background: transparent;
//           color: #667085;
//           border-radius: 9px;
//           padding: 10px 18px;
//           font-weight: 800;
//           cursor: pointer;
//           transition: 0.2s ease;
//         }

//         .wm-tab.active {
//           background: #fff;
//           color: #6c5ce7;
//           box-shadow: 0 3px 12px rgba(23, 32, 51, 0.08);
//         }

//         .wm-tab:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }

//         .wm-card-head {
//           display: flex;
//           justify-content: space-between;
//           gap: 20px;
//           margin-bottom: 25px;
//         }

//         .wm-card-head h2 {
//           margin: 0 0 7px;
//           font-size: 25px;
//           font-weight: 800;
//         }

//         .wm-card-head p {
//           margin: 0;
//           color: #667085;
//         }

//         .wm-engine {
//           height: max-content;
//           padding: 9px 13px;
//           border-radius: 9px;
//           background: #f4f3ff;
//           color: #6c5ce7;
//           font-size: 12px;
//           font-weight: 800;
//           white-space: nowrap;
//         }

//         .wm-upload {
//           min-height: 230px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//           border: 2px dashed #d8d4fb;
//           border-radius: 20px;
//           background: #faf9ff;
//           cursor: pointer;
//           transition: 0.2s ease;
//         }

//         .wm-upload:hover {
//           background: #f4f1ff;
//           border-color: #6c5ce7;
//           transform: translateY(-2px);
//         }

//         .wm-upload-icon {
//           font-size: 42px;
//           margin-bottom: 5px;
//         }

//         .wm-upload strong {
//           font-size: 18px;
//         }

//         .wm-upload span {
//           color: #98a2b3;
//           font-size: 13px;
//         }

//         .wm-workspace {
//           margin-top: 22px;
//         }

//         .wm-preview-label {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 12px;
//           font-weight: 800;
//         }

//         .wm-change-btn {
//           border: 1px solid #ddd8ff;
//           background: #faf9ff;
//           color: #6c5ce7;
//           border-radius: 9px;
//           padding: 8px 12px;
//           font-weight: 700;
//           cursor: pointer;
//         }

//         .wm-change-btn:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }

//         .wm-image-preview,
//         .wm-video-preview {
//           position: relative;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           min-height: 250px;
//           max-height: 650px;
//           overflow: hidden;
//           border-radius: 18px;
//           background: #101828;
//         }

//         .wm-image-preview img {
//           display: block;
//           width: 100%;
//           max-height: 650px;
//           object-fit: contain;
//         }

//         .wm-video-preview video {
//           display: block;
//           width: 100%;
//           max-height: 650px;
//           object-fit: contain;
//         }

//         .wm-ai-badge {
//           position: absolute;
//           top: 14px;
//           right: 14px;
//           padding: 9px 12px;
//           border-radius: 10px;
//           background: rgba(23, 32, 51, 0.85);
//           color: #fff;
//           font-size: 12px;
//           font-weight: 800;
//           backdrop-filter: blur(8px);
//         }

//         .wm-auto-info {
//           display: flex;
//           gap: 14px;
//           align-items: flex-start;
//           margin-top: 18px;
//           padding: 17px;
//           border-radius: 15px;
//           background: #f8f7ff;
//           border: 1px solid #e8e4ff;
//         }

//         .wm-auto-icon {
//           width: 40px;
//           height: 40px;
//           flex: 0 0 40px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 11px;
//           background: #6c5ce7;
//           color: #fff;
//         }

//         .wm-auto-info strong {
//           display: block;
//           margin-bottom: 4px;
//         }

//         .wm-auto-info p {
//           margin: 0;
//           color: #667085;
//           font-size: 13px;
//           line-height: 1.6;
//         }

//         .wm-video-features {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 8px;
//           margin-top: 15px;
//         }

//         .wm-video-features span {
//           padding: 8px 11px;
//           border-radius: 9px;
//           background: #f8f7ff;
//           border: 1px solid #e8e4ff;
//           color: #475467;
//           font-size: 12px;
//           font-weight: 700;
//         }

//         .wm-primary-btn {
//           width: 100%;
//           margin-top: 18px;
//           padding: 15px 18px;
//           border: 0;
//           border-radius: 13px;
//           background: #6c5ce7;
//           color: #fff;
//           font-weight: 800;
//           font-size: 15px;
//           cursor: pointer;
//           transition: 0.2s ease;
//         }

//         .wm-primary-btn:hover:not(:disabled) {
//           background: #5848d8;
//           transform: translateY(-1px);
//         }

//         .wm-primary-btn:disabled {
//           opacity: 0.55;
//           cursor: not-allowed;
//         }

//         .wm-secondary-btn {
//           width: 100%;
//           margin-top: 10px;
//           padding: 12px 18px;
//           border: 1px solid #ddd8ff;
//           border-radius: 13px;
//           background: #fff;
//           color: #6c5ce7;
//           font-weight: 800;
//           cursor: pointer;
//         }

//         .wm-result {
//           margin-top: 30px;
//           padding-top: 25px;
//           border-top: 1px solid #eaecf0;
//         }

//         .wm-result-head {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           gap: 15px;
//           margin-bottom: 15px;
//         }

//         .wm-result-head h3 {
//           margin: 0 0 4px;
//         }

//         .wm-result-head p {
//           margin: 0;
//           color: #98a2b3;
//           font-size: 13px;
//         }

//         .wm-download {
//           border: 0;
//           border-radius: 10px;
//           padding: 11px 15px;
//           background: #172033;
//           color: #fff;
//           font-weight: 800;
//           cursor: pointer;
//         }

//         .wm-download:hover {
//           background: #0d1320;
//         }

//         .wm-result-preview {
//           overflow: hidden;
//           border-radius: 17px;
//           background: #101828;
//         }

//         .wm-result-preview img {
//           display: block;
//           width: 100%;
//           max-height: 700px;
//           object-fit: contain;
//         }

//         .wm-video-result video {
//           display: block;
//           width: 100%;
//           max-height: 700px;
//           background: #101828;
//         }

//         .wm-info-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 16px;
//           margin-top: 20px;
//         }

//         .wm-info-card {
//           padding: 22px;
//           border: 1px solid #eaecf0;
//           border-radius: 18px;
//           background: #fff;
//         }

//         .wm-info-icon {
//           font-size: 25px;
//         }

//         .wm-info-card h3 {
//           margin: 10px 0 7px;
//           font-size: 18px;
//         }

//         .wm-info-card p {
//           margin: 0;
//           color: #667085;
//           font-size: 13px;
//           line-height: 1.65;
//         }

//         .wm-disclaimer {
//           margin-top: 18px;
//           padding: 15px 17px;
//           border-radius: 14px;
//           background: #fff;
//           border: 1px solid #eaecf0;
//           color: #667085;
//           font-size: 13px;
//           line-height: 1.6;
//         }

//         @media (max-width: 768px) {
//           .wm-card {
//             padding: 18px;
//           }

//           .wm-card-head {
//             flex-direction: column;
//           }

//           .wm-tabs {
//             width: 100%;
//           }

//           .wm-tab {
//             flex: 1;
//           }

//           .wm-info-grid {
//             grid-template-columns: 1fr;
//           }

//           .wm-result-head {
//             align-items: flex-start;
//             flex-direction: column;
//           }

//           .wm-download {
//             width: 100%;
//           }

//           .wm-ai-badge {
//             left: 12px;
//             right: auto;
//           }
//         }
//       `}</style>
//     </main>
//   );
// }

// export default WatermarkRemover;

