 
 
 
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// ✅ Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Supported formats
const allowedFormats = [
  "jpg", "jpeg", "png", "webp",
  "mp4", "avi", "mov", "mkv", "pdf"
];

// ✅ Setup storage engine
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "datalink_uploads", // ✅ folder name in Cloudinary
    allowed_formats: allowedFormats,
    resource_type: "auto", // ✅ handles images, video, pdf automatically
  },
});

// ✅ Multer config
const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 1024 }, // 1GB
});

export { upload };
