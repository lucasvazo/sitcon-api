import { CreateTables1711397155013 } from "./migrations/1711397155013-CreateTables";
import { DataSource } from "typeorm";
import Paciente from "../app/entities/Paciente";
import Profissional from "../app/entities/Profissional";
import Procedimento from "../app/entities/Procedimento";
import ProfissionalAtende from "../app/entities/ProfissionalAtende";
import TipoSolicitacao from "../app/entities/TipoSolicitacao";
import Agendamento from "../app/entities/Agendamento";
import "reflect-metadata";
import "dotenv/config";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // synchronize: true,
    logging: false,
    entities: [ Paciente, Profissional, Procedimento, ProfissionalAtende, TipoSolicitacao, Agendamento ],
    migrations: [ CreateTables1711397155013 ],
    subscribers: [],
});
