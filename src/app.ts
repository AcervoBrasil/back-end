import "reflect-metadata";
import "dotenv/config";
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
import cors from "cors";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const server = http.createServer(app);

export default server;
