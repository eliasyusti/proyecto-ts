import { Column, Entity } from "typeorm";
import { baseEntity } from "../config/base.entity";

@Entity({ name: "user" })
export class userEntity extends baseEntity {

  @Column()
  username!: string;

  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  email!: string;

  @Column()
  numberPhone!: Number;
}
