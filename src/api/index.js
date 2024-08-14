import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import { syncModels } from "./database/models/index.js";
import { PlantRouter } from "./router/PlantRouter.js";

syncModels();
configDotenv();

const app = express();
app.use(express.json());

const corsOptions = {
    origin: ["http://localhost:5500"],
};

app.use("/plants", cors(corsOptions), PlantRouter);

const port = process.env.API_PORT;
app.listen(port, () => console.log("App started"));
