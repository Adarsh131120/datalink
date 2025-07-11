 


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "../redux/slice/fileThunk";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Upload,
  Loader2,
  FileCheck,
  UploadCloud,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, uploadProgress } = useSelector((state) => state.file);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
      "video/*": [],
      "application/pdf": [],
    },
    maxSize: 1024 * 1024 * 1024, // 1GB
    onDrop: (acceptedFiles) => setFile(acceptedFiles[0]),
  });

  const handleUpload = async () => {
    if (!file) return toast.error("Please select a file first!");
    const result = await dispatch(uploadFile(file));
    if (result.error) toast.error("Upload failed!");
    else {
      toast.success("Upload successful!");
      navigate("/preview");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white font-sans flex flex-col">
      {/* Header */}
      <header className="bg-[#0f172a] py-4 px-6 md:px-20 flex justify-between items-center border-b border-gray-800">
        <Link to="/" className="flex items-center gap-3">
          <UploadCloud className="text-cyan-400" size={28} />
          <span className="text-xl md:text-2xl font-bold text-white font-serif">
            Datalink
          </span>
        </Link>
      </header>

      {/* Upload Section */}
      <motion.div
        className="flex-1 flex items-center justify-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-xl bg-[#1e293b]/90 border border-gray-700 rounded-2xl shadow-lg p-8 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-cyan-400 mb-2 text-center">
            Upload Your File
          </h2>
          <p className="text-sm text-gray-400 text-center mb-6">
            Accepted types: JPG, PNG, MP4, MOV, PDF. Max: 1GB.
          </p>

          <div
            {...getRootProps()}
            className={`transition-all duration-300 rounded-xl border-2 border-dashed ${
              isDragActive ? "border-cyan-400" : "border-gray-600"
            } text-gray-400 py-10 text-center cursor-pointer hover:bg-[#1e293b]/60`}
          >
            <input {...getInputProps()} />
            {file ? (
              <div className="flex flex-col items-center">
                <FileCheck size={36} className="text-green-400 mb-2" />
                <p className="text-green-400">{file.name}</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <Upload size={36} className="text-cyan-400 mb-2" />
                <p>Drag & drop a file here, or click to select</p>
              </div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleUpload}
            disabled={loading}
            className={`w-full mt-6 flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-full transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Uploading...
              </>
            ) : (
              <>
                <ShieldCheck size={18} />
                Upload File
              </>
            )}
          </motion.button>

          {/* Progress Bar */}
          {loading && (
            <div className="mt-4 w-full bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="bg-cyan-500 h-3 text-xs flex items-center justify-center text-white"
                style={{ width: `${uploadProgress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${uploadProgress}%` }}
                transition={{ ease: "easeOut", duration: 0.5 }}
              >
                {uploadProgress}%
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>

      <ToastContainer />
      <Footer />
    </div>
  );
};

export default FileUpload;
