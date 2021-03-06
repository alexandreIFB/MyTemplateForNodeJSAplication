import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerConfig from "./swagger.json";

import "./database";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use(router);

app.listen(3000, () => console.log("Server is running !!"));
