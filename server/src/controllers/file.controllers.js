 


// import { File } from "../models/files.models.js";

// const upLoadFile = async (req, res) => {
//   if (!req.file) {
//     return res.status(400).send("Please upload a file");
//   }

//   const fileObject = {
//     path: req.file.path,
//     name: req.file.originalname,
//     size: req.file.size,
//     mimetype: req.file.mimetype,
//   };

//   const serverUrl = process.env.SERVER_URL || "http://localhost:5000";

//   try {
//     const file = await File.create(fileObject);
//     res.status(200).json({
//       msg: "File uploaded successfully",
//       path: `${serverUrl}/api/files/${file._id}`, // Note: updated path
//       data: file,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Internal Server Error");
//   }
// };

// const downLoadFile = async (req, res) => {
//   try {
//     const file = await File.findById(req.params.fileId); // ✅ fixed typo

//     if (!file) return res.status(404).send("File not found");

//     file.downloadContent = (file.downloadContent || 0) + 1;
//     await file.save();

//     res.download(file.path, file.name); // triggers file download
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Internal Server Error");
//   }
// };

// export { upLoadFile, downLoadFile };


import { File } from "../models/files.models.js";

// ✅ UPLOAD Controller (Cloudinary version)
const upLoadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).send("Please upload a file");
  }

  const fileObject = {
    path: req.file.path,               // ✅ Cloudinary URL
    name: req.file.originalname,
    size: req.file.size,
    mimetype: req.file.mimetype,
  };

  try {
    const file = await File.create(fileObject);
    res.status(200).json({
      msg: "File uploaded successfully",
      path: file.path,                 // ✅ direct cloud URL now
      data: file,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

// ✅ DOWNLOAD Controller (Cloudinary version)
const downLoadFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);
    if (!file) return res.status(404).send("File not found");

    file.downloadContent = (file.downloadContent || 0) + 1;
    await file.save();

    // ✅ redirect to Cloudinary-hosted URL
    return res.redirect(file.path);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export { upLoadFile, downLoadFile };
