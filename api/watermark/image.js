import formidable from "formidable";
import fs from "fs/promises";
import Replicate from "replicate";

export const config = {
  api: {
    bodyParser: false,
  },
};

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const MASK_MODEL =
  "tmappdev/img2watermarkmask:26e6052742b519144681a9070f7cb4964ad19051bf40056c7a254d4869ade10f";

const INPAINT_MODEL =
  "dpakkk/image-object-removal:40e67426e1bf78199d78b36580389fbbdcb4c9cdc2bc2b489e99d713f167b3c5";

const MAX_FILE_SIZE = 4 * 1024 * 1024;

function getOutputUrl(output) {
  if (!output) return null;

  if (typeof output === "string") {
    return output;
  }

  if (typeof output.url === "function") {
    return output.url().toString();
  }

  if (output.url) {
    return output.url.toString();
  }

  return null;
}

function getUploadedFile(files) {
  const file = files?.image;

  if (!file) {
    return null;
  }

  return Array.isArray(file) ? file[0] : file;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Only POST requests are allowed.",
    });
  }

  let uploadedFile = null;

  try {
    const form = formidable({
      multiples: false,
      maxFiles: 1,
      maxFileSize: MAX_FILE_SIZE,
      keepExtensions: true,
    });

    const [, files] = await form.parse(req);

    uploadedFile = getUploadedFile(files);

    if (!uploadedFile) {
      return res.status(400).json({
        success: false,
        message: "Please upload an image.",
      });
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (!allowedTypes.includes(uploadedFile.mimetype)) {
      return res.status(400).json({
        success: false,
        message: "Only JPG, PNG and WebP images are supported.",
      });
    }

    if (uploadedFile.size > MAX_FILE_SIZE) {
      return res.status(413).json({
        success: false,
        message: "Image size must be 4MB or less.",
      });
    }

    const imageBuffer = await fs.readFile(uploadedFile.filepath);

    console.log("Watermark detection started...");

    // --------------------------------------------------
    // STEP 1: AUTOMATIC WATERMARK MASK DETECTION
    // --------------------------------------------------

    const maskOutput = await replicate.run(MASK_MODEL, {
      input: {
        image: imageBuffer,
      },
    });

    const maskUrl = getOutputUrl(maskOutput);

    if (!maskUrl) {
      throw new Error("Watermark mask was not generated.");
    }

    console.log("Watermark mask generated.");

    // --------------------------------------------------
    // STEP 2: AUTOMATIC INPAINTING
    // --------------------------------------------------

    const resultOutput = await replicate.run(INPAINT_MODEL, {
      input: {
        image: imageBuffer,
        mask: maskUrl,
        hd_strategy_resize_limit: 2048,
      },
    });

    const resultUrl = getOutputUrl(resultOutput);

    if (!resultUrl) {
      throw new Error("Watermark removal result was not generated.");
    }

    console.log("Watermark removal completed.");

    return res.status(200).json({
      success: true,
      resultUrl,
    });
  } catch (error) {
    console.error("WATERMARK API ERROR:", error);

    let message = "Watermark removal failed.";

    if (error?.message) {
      message = error.message;
    }

    if (
      message.toLowerCase().includes("file size") ||
      message.toLowerCase().includes("maxfilesize")
    ) {
      message = "Image size must be 4MB or less.";
    }

    return res.status(500).json({
      success: false,
      message,
    });
  } finally {
    if (uploadedFile?.filepath) {
      try {
        await fs.unlink(uploadedFile.filepath);
      } catch {
        // Temporary file may already be removed.
      }
    }
  }
}