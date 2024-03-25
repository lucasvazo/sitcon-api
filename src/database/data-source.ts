import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";
import { CreateTables1711397155013 } from "./migrations/1711397155013-CreateTables";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // synchronize: true,
    logging: false,
    entities: [],
    migrations: [ CreateTables1711397155013 ],
    subscribers: [],
});
