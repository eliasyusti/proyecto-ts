import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customer/entities/customer.entity";
import { PurchaseProductsEntity } from "./purchase-products.entity";

@Entity()
export class PurchaseEntity extends BaseEntity {

  @Column('varchar', { length: 256 })
  status!: string;

  @Column()
  paimentMethod!: string;

  @ManyToOne(() => CustomerEntity, (customer) => customer.purchases)
  @JoinColumn({name: "customer_id"})
  customer!: CustomerEntity;

  @OneToMany(() => PurchaseProductsEntity, (purchaseProduct) => purchaseProduct.purchase)
  purchaseProduct!: PurchaseProductsEntity[];

}
