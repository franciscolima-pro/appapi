import "reflect-metadata";
import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
type: "mysql",
host: "localhost",
port: 3308,
username: "root",
password: "1234",
database: "appreact",
synchronize: true,
logging: true,
entities: [],
subscribers: [],
migrations: [],
})