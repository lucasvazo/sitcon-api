import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./database/data-source";
import "dotenv/config";

const app = express();
const PORT = process.env.APP_PORT;

app.use(cors());
app.use(express.json());

AppDataSource.initialize().then(async () => {

    console.log('Database connection stablished.');
    app.listen(3000, () => {
        console.log(`App is running on port ${PORT}`)
    });
    
});