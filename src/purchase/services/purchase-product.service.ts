import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { PurchaseProductDTO } from "../dto/purchase-product.dto";
import { ProductService } from "../../product/services/product.service";
import { PurchaseProductsEntity } from "../entities/purchase-product.entity";
export class PurchaseProductService extends BaseService<PurchaseProductsEntity> {
  constructor(
    private readonly productService: ProductService = new ProductService()
  ) {
    super(PurchaseProductsEntity);
  }

  async findAllPurchaseProducts(): Promise<PurchaseProductsEntity[]> {
    return (await this.execRepository).find();
  }
  async findPurchaseProductById(
    id: string
  ): Promise<PurchaseProductsEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }

  async createPurchaseProduct(
    body: PurchaseProductDTO
  ): Promise<PurchaseProductsEntity> {
    const newPP = (await this.execRepository).create(body);
    const prod = await this.productService.findProductById(newPP.product.id);
    newPP.totalPrice = prod!.price * newPP.quantityProduct;
    return (await this.execRepository).save(newPP);
  }

  async deletePurchaseProduct(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updatePurchaseProduct(
    id: string,
    infoUpdate: PurchaseProductDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}