import path from "path";
import express from "express"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import Api from "./api/index";

// setup
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());

// route
app.use( express.static('../public') );
app.use('/', Api);