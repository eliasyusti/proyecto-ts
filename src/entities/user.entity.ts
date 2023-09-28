import { Column, Entity } from "typeorm";
import { BaseEntity } from "../config/base.entity";

@Entity()
export class User extends BaseEntity {

  @Column('varchar', { length: 300 })
  username!: string;

  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  email!: string;

  @Column()
  city!: string;

  @Column()
  numberPhone!: Number;
}
