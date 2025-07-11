// import { useSelector, useDispatch } from "react-redux";
// import QRCode from "react-qr-code";
// import { deleteFile } from "../redux/slice/fileSlice";
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
// } from "react-share";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaWhatsapp,
//   FaDownload,
//   FaCopy,
//   FaEllipsisV,
//   FaTrash,
// } from "react-icons/fa";
// import { useRef, useState } from "react";
// import { toast } from "react-toastify";
// import Header from "./HeaderComp";
// import Footer from "./Footer";

// const FilePreview = () => {
//   const { files } = useSelector((state) => state.file);
//   const dispatch = useDispatch();
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const qrCodeRef = useRef({});

//   console.log("files:", files);

//   const handleCopyUrl = (url) => {
//     navigator.clipboard.writeText(url);
//     toast.success("URL copied to clipboard");
//   };

//   const handleDownload = (url, filename) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = filename;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const convertSVGToCanvas = (svgElement) => {
//     return new Promise((resolve, reject) => {
//       const svgString = new XMLSerializer().serializeToString(svgElement);
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");
//       const img = new Image();

//       img.onload = () => {
//         canvas.width = img.width;
//         canvas.height = img.height;
//         ctx.drawImage(img, 0, 0);
//         resolve(canvas);
//       };

//       img.onerror = reject;
//       img.src = `data:image/svg+xml;base64,${btoa(svgString)}`;
//     });
//   };

//   const handleDownloadQR = async (path) => {
//     const qrSvg = qrCodeRef.current[path].querySelector("svg");
//     if (qrSvg) {
//       try {
//         const canvas = await convertSVGToCanvas(qrSvg);
//         const qrImageUrl = canvas.toDataURL("image/png");
//         const link = document.createElement("a");
//         link.href = qrImageUrl;
//         link.download = "qrcode.png";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       } catch (error) {
//         console.error("Error converting SVG to Canvas:", error);
//       }
//     } else {
//       console.error("QR SVG not found");
//     }
//   };

//   const handleDelete = (index) => {
//     if (window.confirm("Are you sure you want to delete this file?")) {
//       dispatch(deleteFile(index));
//     }
//   };

//   const toggleDropdown = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//   };

//   return (
//     <>
//       <div className="flex flex-col h-screen justify-between">
//         <Header />

//         <div className="container mx-auto p-4 sm:p-6 lg:p-8 mt-6 bg-white rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4">Uploaded Files</h2>
//           {files.length === 0 ? (
//             <p>No files uploaded yet.</p>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full bg-white border border-gray-300">
//                 <thead>
//                   <tr className="bg-gray-600 text-left">
//                     <th className="px-3 py-2">Filename</th>
//                     <th className="px-3 py-2">Content Type</th>
//                     <th className="px-3 py-2">Size</th>
//                     <th className="px-3 py-2">Uploaded</th>
//                     <th className="px-3 py-2">Preview</th>
//                     <th className="px-3 py-2">Download</th>
//                     <th className="px-3 py-2">Actions</th>
//                     <th className="px-3 py-2">Share</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {files.map((file, index) => (
//                     <tr key={index} className="text-sm">
//                       <td className="border px-3 py-2 truncate" title={file.data?.name}>
//                         {file.data?.name}
//                       </td>

                      
                       

//                       <td className="border px-3 py-2" >
//                       {file.mimetype || "Unknown Type"}
//                         </td>

                        

 
//                       <td className="border px-3 py-2">
//                         {(file.data?.size / (1024 * 1024)).toFixed(2)} MB
//                       </td>


//                       <td className="border px-3 py-2">
//                         {new Date(file?.data?.createdAt).toLocaleString()}
//                       </td>



//                       {/* <td className="border px-3 py-2">
//                     {file.data?.type && typeof file.data?.type === "string" ? (
//                                  file.data?.mimetype.startsWith("image") ? (
//                           <img
//                               src={file.path}
//                                 alt={file.data?.name}
//                                            className="h-16 w-16 object-cover"
//                                   />
//                                   ) : file.data.mimetype.startsWith("video") ? (
//                                            <video
//                                  src={file.path}
//                                className="h-16 w-16 object-cover"
//                                 controls
//                                />
//                                  ) : (
//                                <span>Unsupported type</span>
//                                )
//                              ) : (
//                           <span>Type not available</span>
//                             )}
//                                 </td> */}


//                          <td className="border px-3 py-2">
//                              {file.data?.mimetype ? (
//                                    file.data.mimetype.startsWith("image") ? (
//                                      <img
//                                   src={file.path.replace(/\\/g, "/")}
//                                  alt={file.data?.originalname || "Image preview"}
//                              className="h-16 w-16 object-cover"
//                             />
//                            ) : file.data.mimetype.startsWith("video") ? (
//                               <video
//                               src={file.path.replace(/\\/g, "/")}
//                             className="h-16 w-16 object-cover"
//                             controls
//                               />
//                           ) : (
//                                       <span>Unsupported type</span>
//                          )
//                            ) : (
//                        <span>Type not available</span>
//                              )}
//                           </td>





//                       <td className="border px-3 py-2">
//                         <button
//                           onClick={() =>
//                             handleDownload(file.path, file.data?.name)
//                           }
//                           className="bg-blue-500 text-white py-1 px-2 rounded text-xs sm:text-sm"
//                         >
//                           <div className="flex items-center">
//                             <FaDownload className="mr-1" /> Download
//                           </div>
//                         </button>
//                       </td>
//                       <td className="border px-3 py-2">
//                         <div className="relative inline-block text-left">
//                           <button
//                             onClick={() => toggleDropdown(index)}
//                             className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
//                           >
//                             <FaEllipsisV />
//                           </button>
//                           {openDropdown === index && (
//                             <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
//                               <div className="py-1" role="none">
//                                 <button
//                                   onClick={() => handleDownloadQR(file.path)}
//                                   className="text-gray-700 block px-2 py-1 text-xs sm:text-sm w-full text-left"
//                                   title="Download QR code for this file"
//                                 >
//                                   <div className="flex items-center">
//                                     <FaDownload className="mr-1" /> Download QR
//                                   </div>
//                                   <div
//                                     ref={(el) =>
//                                       (qrCodeRef.current[file.path] = el)
//                                     }
//                                     style={{ display: "none" }}
//                                   >
//                                     <QRCode value={file.path} />
//                                   </div>
//                                 </button>
//                                 <button
//                                   onClick={() => handleCopyUrl(file.path)}
//                                   className="text-gray-700 block px-2 py-1 text-xs sm:text-sm w-full text-left"
//                                   title="Copy URL to clipboard"
//                                 >
//                                   <div className="flex items-center">
//                                     <FaCopy className="mr-1" /> Copy URL
//                                   </div>
//                                 </button>
//                                 <button
//                                   onClick={() => handleDelete(index)}
//                                   className="text-red-700 block px-2 py-1 text-xs sm:text-sm w-full text-left"
//                                 >
//                                   <div className="flex items-center">
//                                     <FaTrash className="mr-1" /> Delete
//                                   </div>
//                                 </button>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       </td>
//                       <td className="border px-2 py-2">
//                       <div className="flex space-x-2">
//                         <FacebookShareButton
//                           url={file.path}
//                           className="w-full text-left"
//                           title="Share on Facebook"
//                         >
//                           <FaFacebook className="text-blue-600" size={24}/>
//                         </FacebookShareButton>
//                         <TwitterShareButton
//                           url={file.path}
//                           className="w-full text-left"
//                           title="Share on Twitter"
//                         >
//                           <FaTwitter className="text-blue-400" size={24}/>
//                         </TwitterShareButton>
//                         <WhatsappShareButton
//                           url={file.path}
//                           className="w-full text-left"
//                           title="Share on WhatsApp"
//                         >
//                           <FaWhatsapp className="text-green-500" size={24}/>
//                         </WhatsappShareButton>
//                       </div>
//                     </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default FilePreview;


import { useSelector, useDispatch } from "react-redux";
import QRCode from "react-qr-code";
import { deleteFile } from "../redux/slice/fileSlice";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  Download,
  Copy,
  MoreVertical,
  Trash2,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import Header from "./HeaderComp";
import Footer from "./Footer";

const FilePreview = () => {
  const { files } = useSelector((state) => state.file);
  const dispatch = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(null);
  const qrCodeRef = useRef({});

  const handleCopyUrl = (url) => {
    navigator.clipboard.writeText(url);
    toast.success("URL copied to clipboard");
  };

  const handleDownload = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const convertSVGToCanvas = (svgElement) => {
    return new Promise((resolve, reject) => {
      const svgString = new XMLSerializer().serializeToString(svgElement);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        resolve(canvas);
      };

      img.onerror = reject;
      img.src = `data:image/svg+xml;base64,${btoa(svgString)}`;
    });
  };

  const handleDownloadQR = async (path) => {
    const qrSvg = qrCodeRef.current[path].querySelector("svg");
    if (qrSvg) {
      try {
        const canvas = await convertSVGToCanvas(qrSvg);
        const qrImageUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = qrImageUrl;
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error converting SVG to Canvas:", error);
      }
    } else {
      console.error("QR SVG not found");
    }
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this file?")) {
      dispatch(deleteFile(index));
    }
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <Header />

      <div className="container mx-auto p-4 sm:p-6 lg:p-8 mt-6 bg-[#1e293b]/90 rounded-lg shadow-lg border border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">Uploaded Files</h2>
        {files.length === 0 ? (
          <p className="text-gray-400">No files uploaded yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-transparent text-sm border border-gray-600">
              <thead className="bg-[#0f172a] text-cyan-300">
                <tr>
                  <th className="px-3 py-2 text-left">Filename</th>
                  <th className="px-3 py-2 text-left">Content Type</th>
                  <th className="px-3 py-2 text-left">Size</th>
                  <th className="px-3 py-2 text-left">Uploaded</th>
                  <th className="px-3 py-2 text-left">Preview</th>
                  <th className="px-3 py-2 text-left">Download</th>
                  <th className="px-3 py-2 text-left">Actions</th>
                  <th className="px-3 py-2 text-left">Share</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, index) => (
                  <tr key={index} className="border-t border-gray-700 hover:bg-[#334155]/40">
                    <td className="px-3 py-2 truncate" title={file.data?.name}>
                      {file.data?.name}
                    </td>
                    <td className="px-3 py-2">{file.mimetype || "Unknown Type"}</td>
                    <td className="px-3 py-2">
                      {(file.data?.size / (1024 * 1024)).toFixed(2)} MB
                    </td>
                    <td className="px-3 py-2">
                      {new Date(file?.data?.createdAt).toLocaleString()}
                    </td>
                    <td className="px-3 py-2">
                      {file.data?.mimetype ? (
                        file.data.mimetype.startsWith("image") ? (
                          <img
                            src={file.path.replace(/\\/g, "/")}
                            alt={file.data?.originalname || "Image preview"}
                            className="h-16 w-16 object-cover rounded"
                          />
                        ) : file.data.mimetype.startsWith("video") ? (
                          <video
                            src={file.path.replace(/\\/g, "/")}
                            className="h-16 w-16 object-cover rounded"
                            controls
                          />
                        ) : (
                          <span className="text-gray-400">Unsupported</span>
                        )
                      ) : (
                        <span className="text-gray-400">Type not available</span>
                      )}
                    </td>
                    <td className="px-3 py-2">
                      <button
                        onClick={() =>
                          handleDownload(file.path, file.data?.name)
                        }
                        className="flex items-center bg-cyan-600 hover:bg-cyan-700 text-white text-xs px-3 py-1 rounded-full"
                      >
                        <Download size={14} className="mr-1" />
                        Download
                      </button>
                    </td>
                    <td className="px-3 py-2 relative">
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="p-2 rounded-full hover:bg-gray-700 transition"
                      >
                        <MoreVertical size={16} />
                      </button>
                      {openDropdown === index && (
                        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white text-black ring-1 ring-black ring-opacity-5 z-10 text-sm">
                          <button
                            onClick={() => handleDownloadQR(file.path)}
                            className="w-full px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                          >
                            <Download size={14} /> QR Code
                          </button>
                          <button
                            onClick={() => handleCopyUrl(file.path)}
                            className="w-full px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                          >
                            <Copy size={14} /> Copy URL
                          </button>
                          <button
                            onClick={() => handleDelete(index)}
                            className="w-full px-4 py-2 hover:bg-red-100 text-red-600 flex items-center gap-2"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                          <div
                            ref={(el) => (qrCodeRef.current[file.path] = el)}
                            style={{ display: "none" }}
                          >
                            <QRCode value={file.path} />
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="px-2 py-2">
                      <div className="flex space-x-2">
                        <FacebookShareButton url={file.path}>
                          <Facebook className="text-blue-500" size={20} />
                        </FacebookShareButton>
                        <TwitterShareButton url={file.path}>
                          <Twitter className="text-sky-400" size={20} />
                        </TwitterShareButton>
                        <WhatsappShareButton url={file.path}>
                          <MessageCircle className="text-green-500" size={20} />
                        </WhatsappShareButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default FilePreview;
