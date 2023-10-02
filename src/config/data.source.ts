import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { UserEntity } from "../user/entities/user.entity"
import { CustomerEntity } from "../customer/entities/customer.entity";
import { PurchaseEntity } from "../purchase/entities/purchase.entity";
import { ProductEntity } from "../product/entities/product.entity";
import { CategoryEntity } from "../category/entities/category.entity";
import { PurchaseProductsEntity } from "../purchase/entities/purchase-products.entity";

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
    entities: [
      UserEntity, 
      CustomerEntity, 
      PurchaseEntity, 
      ProductEntity, 
      CategoryEntity,
      PurchaseProductsEntity
    ],
    //migrations: [__dirname + "/../../migrations/*{.ts,.js}"],
    synchronize: false,
    //migrationsRun: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
  };
  

export const AppDataSource: DataSource = new DataSource(Config);