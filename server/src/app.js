
import 'dotenv/config';
import express from "express";
import path from "path";

import cors from 'cors';

import cookieParser from 'cookie-parser';
import bodyParser  from "body-parser";
import morgan from "morgan"


const app = express();

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))

// app.options("*", cors());

// import cors from 'cors';

const allowed = [
  'http://localhost:5173',                   // Vite dev
  'https://datalink-i8yb.vercel.app',        // Prod frontend
];

app.use(cors({
  origin: (incomingOrigin, cb) => {
    if (!incomingOrigin || allowed.includes(incomingOrigin)) {
      cb(null, true);
    } else {
      cb(new Error(`CORS blocked: ${incomingOrigin}`));
    }
  },
  credentials: true,
}));
app.options('*', cors());



app.use(cookieParser());
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan('dev'));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.get("/", (req, res) => {
  res.send("🚀 Datalink API is live!");
});
 

export {app};


