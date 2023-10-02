import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";

@Entity()
export class CustomerEntity extends BaseEntity {

  @Column('varchar', { length: 256 })
  username!: string;

  @Column()
  address!: string;

  @Column()
  rut!: number;

  @OneToOne(() => UserEntity, (user) => user.customer)
  @JoinColumn({name: "user_id"})
  user!: UserEntity;

  @OneToMany(() => PurchaseEntity, (purchase) => purchase.customer)
  purchases!: PurchaseEntity[];


}
