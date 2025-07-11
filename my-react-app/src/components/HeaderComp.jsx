
// import React from 'react'
// import { SiSharex } from 'react-icons/si'
// import { Link } from 'react-router-dom'

// function Header() {
//   return (
//     <header className="bg-gray-800 text-white  py-4 px-4 lg:px-20 flex justify-between items-center">
//     <div className="flex items-center">
      
//      <Link to={'/'}><SiSharex className="lg:h-8 lg:w-8 w-4 h-4 mr-2 lg:mr-4"/></Link> 
//      <Link to={'/'}><h1 className="lg:text-2xl text-lg font-serif font-bold">Datalink</h1></Link> 
//     </div>
//     <div className="flex items-center space-x-4">
//       <button className="bg-blue-500 text-white lg:py-2 lg:px-4 px-2 py-1 rounded-md"><Link to="/upload">Upload More Files</Link></button>
     
//     </div>
//   </header>
//   )
// }

// export default Header

import React from "react";
import { UploadCloud } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="bg-[#0f172a] text-white py-4 px-4 lg:px-20 flex justify-between items-center border-b border-gray-800"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <UploadCloud className="text-cyan-400" size={28} />
        <h1 className="text-lg lg:text-2xl font-serif font-bold">Datalink</h1>
      </Link>

      {/* Upload Button */}
      <Link to="/upload">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm lg:text-base py-2 px-4 rounded-md shadow-md transition"
        >
          Upload More Files
        </motion.button>
      </Link>
    </motion.header>
  );
};

export default Header;
