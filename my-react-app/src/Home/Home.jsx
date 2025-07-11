 

import React from "react";
import {
  CloudUpload,
  ShieldCheck,
  FileCode2,
  UploadCloud,
  Link2,
  Share2,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <CloudUpload size={48} className="text-cyan-400" />,
    title: "AI-Smart Uploads",
    desc: "Fast, intelligent, and adaptive upload system.",
  },
  {
    icon: <ShieldCheck size={48} className="text-purple-400" />,
    title: "End-to-End Security",
    desc: "Military-grade encryption and real-time scanning.",
  },
  {
    icon: <FileCode2 size={48} className="text-fuchsia-400" />,
    title: "Instant File Access",
    desc: "Anywhere, anytime with one-click access.",
  },
];

const steps = [
  {
    icon: <UploadCloud size={48} className="text-cyan-400" />,
    title: "Upload Instantly",
    desc: "Select a file and initiate secure transfer.",
  },
  {
    icon: <Link2 size={48} className="text-purple-400" />,
    title: "Auto-Generate Link",
    desc: "Our AI generates encrypted shareable links.",
  },
  {
    icon: <Share2 size={48} className="text-fuchsia-400" />,
    title: "Broadcast Securely",
    desc: "Send your files confidently and securely.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white font-sans overflow-hidden relative">
      {/* Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl top-[-5rem] left-[-5rem] z-0"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl bottom-[-3rem] right-[-3rem] z-0"
        animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      {/* Header */}
      <header className="text-center py-8 relative z-10">
        <h1 className="text-5xl font-bold text-cyan-400 tracking-wide">
          Datalink
        </h1>
        <p className="text-gray-300 mt-2 text-lg">
          Effortless, encrypted file sharing powered by AI
        </p>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Welcome to the Future of File Transfer
        </motion.h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
          Experience intelligent, encrypted file sharing with real-time delivery.
        </p>
        <Link to="/upload">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full text-lg shadow-xl transition"
          >
            Upload Now
          </motion.button>
        </Link>
      </section>

      {/* Features Section (Right to Left Animation) */}
      <section className="py-16 px-4 relative z-10 overflow-hidden">
        <motion.div
          className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          animate={{ x: [-20, 20, -20] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#1e293b]/80 backdrop-blur-md p-6 rounded-xl shadow-xl border border-gray-700 transition hover:scale-105"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* How It Works Section (Left to Right Animation) */}
      <section className="py-16 px-4 bg-[#0f172a] border-t border-gray-800 relative z-10 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">
          How It Works
        </h2>
        <motion.div
          className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          animate={{ x: [20, -20, 20] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-[#1e293b]/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 transition hover:scale-105"
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Upload in Warp Speed?
        </h2>
        <Link to="/upload">
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition shadow-lg">
            Launch Upload Portal
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 border-t border-gray-800 relative z-10">
        <p>&copy; 2024 QuantumDrop. Built for the future.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://facebook.com" className="hover:text-cyan-400">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" className="hover:text-cyan-400">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com" className="hover:text-fuchsia-400">
            <Instagram size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
