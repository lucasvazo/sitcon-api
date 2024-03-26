import { AppDataSource } from "./database/data-source";
import express from "express";
import cors from "cors";
import "reflect-metadata";
import "dotenv/config";
import pacienteRouter from "./app/routes/Paciente.route";

const app = express();
const PORT = process.env.APP_PORT;

app.use(cors());
app.use(express.json());
app.use('/pacientes', pacienteRouter);

AppDataSource.initialize().then(async () => {
    console.log('Database connection stablished.');
    app.listen(3000, () => {
        console.log(`App is running on port ${PORT}`)
    });
});