import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

// Configure Cloudinary
cloudinary.config({
  cloud_name: "process.env.CLOUDINARY_NAME",
  api_key: "process.env.CLOUDINARY_API_KEY",
  api_secret: "CLOUDINARY_API_SECRET",
});

// Set up Cloudinary Storage for Multer
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "uploads", // Cloudinary folder name
    // format: async (req, file) => "jpg", // Optional: specify format
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({ storage });

// export default upload;
