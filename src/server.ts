import express from "express";
import morgan from "morgan";
import cors from "cors";
import { userRouter } from "./router/user.router";
import { configServer } from "./config/config";
import { DataSource } from "typeorm";

class Server extends configServer {
  public app: express.Application = express();
  private port: number = this.getNumberEnv("PORT");

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.dbConnect();
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use('/api', this.routers())
    this.listen();
  }

  routers(): Array<express.Router> {
    return [new userRouter().router];
  }

  async dbConnect(): Promise<DataSource | void> {
    return this.initConnect
      .then(() => {
        console.log("Connect Success");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log("Server listening on port:" + this.port);
    });
  }
}

new Server();
