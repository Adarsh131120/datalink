
import 'dotenv/config';
import express from "express";
import path from "path";

import cors from 'cors';

import cookieParser from 'cookie-parser';
import bodyParser  from "body-parser";
import morgan from "morgan"


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(cookieParser());
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan('dev'));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
 

export {app};


