
// import 'dotenv/config';
// import express from "express";
// import path from "path";

// import cors from 'cors';

// import cookieParser from 'cookie-parser';
// import bodyParser  from "body-parser";
// import morgan from "morgan"

// import fileRoutes from "./routes/file.routes.js";


// const app = express();

// // app.use(cors({
// //     origin: process.env.CORS_ORIGIN,
// //     credentials: true
// // }))

// // app.options("*", cors());

// // import cors from 'cors';

// const allowed = [
//   'http://localhost:5173',                   // Vite dev
//   'https://datalink-i8yb.vercel.app',        // Prod frontend
// ];

// app.use(cors({
//   origin: (incomingOrigin, cb) => {
//     if (!incomingOrigin || allowed.includes(incomingOrigin)) {
//       cb(null, true);
//     } else {
//       cb(new Error(`CORS blocked: ${incomingOrigin}`));
//     }
//   },
//   credentials: true,
// }));
// // app.options('*', cors());



// app.use(cookieParser());
// app.use(bodyParser.json());


// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(morgan('dev'));
// app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// app.use("/api/files", fileRoutes); // ✅ Mount routes here

// app.get("/", (req, res) => {
//   res.send("🚀 Datalink API is live!");
// });
 

// export {app};


import 'dotenv/config';
import express from "express";
import path from "path";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from "body-parser";
import morgan from "morgan";
import fileRoutes from "./routes/file.routes.js";

const app = express();

// ✅ CORS Fix
const allowedOrigins = [
  'http://localhost:5173',                    // Dev
  'https://datalink-i8yb.vercel.app',         // Vercel frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., mobile apps or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS: " + origin));
    }
  },
  credentials: true,
}));

// ✅ Preflight handling for CORS
app.options("*", cors({
  origin: allowedOrigins,
  credentials: true,
}));

// ✅ Middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// ✅ Static files
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// ✅ Routes
app.use("/api/files", fileRoutes);

// ✅ Default root route
app.get("/", (req, res) => {
  res.send("🚀 Datalink API is live!");
});

export { app };
