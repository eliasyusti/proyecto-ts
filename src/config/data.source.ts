import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { User } from "../user/entities/user.entity"

dotenv.config({
  path:
    process.env.NODE_ENV !== undefined
      ? `.${process.env.NODE_ENV.trim()}.env`
      : ".env",
});

const Config: DataSourceOptions = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User],
    //migrations: [__dirname + "/../../migrations/*{.ts,.js}"],
    synchronize: true,
    //migrationsRun: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
  };
  

export const AppDataSource: DataSource = new DataSource(Config);