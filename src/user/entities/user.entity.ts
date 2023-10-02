import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customer/entities/customer.entity";

@Entity()
export class UserEntity extends BaseEntity {

  @Column('varchar', { length: 256 })
  username!: string;

  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  email!: string;

  @Column()
  password!: Number;

  @Column()
  city!: string;

  @Column()
  province!: Number;

  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  customer!: CustomerEntity;

}
