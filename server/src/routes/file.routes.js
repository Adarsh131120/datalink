// import express, { Router } from 'express';
// import  {upload} from '../middlewares/upload.middlewares.js';

// // import upload from '../cloudinary.js';

// import {downLoadFile , upLoadFile} from '../controllers/file.controllers.js';


// const router = Router();

// router.post('/upload',upload.single('file'),upLoadFile);
// router.get('/download/:fileId',downLoadFile);

// export default router;

import express from "express";
import { upload } from "../middlewares/upload.middlewares.js";
import { upLoadFile, downLoadFile } from "../controllers/file.controllers.js";

const router = express.Router();

// Upload Route
router.post("/upload", upload.single("file"), upLoadFile);

// ✅ Download Route
router.get("/:fileId", downLoadFile);

export default router;
