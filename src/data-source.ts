import "reflect-metadata"
import { DataSource } from "typeorm"
import { Episodios } from "./entity/Episodios"
import { UserRD } from "./entity/UserRD"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root12345",
    database: "faculdade",
    synchronize: true,
    logging: false,
    entities: [Episodios, UserRD],
    migrations: [],
    subscribers: [],
})
