import {ConfigServer} from "./config";
import {BaseEntity} from "./base.entity";
import {EntityTarget, ObjectLiteral, Repository} from "typeorm";

export class BaseService<T extends BaseEntity> extends ConfigServer{
    public execRepository: Promise<Repository<T >>

    constructor(private getEntity: EntityTarget<T>) {
        super();
        this.execRepository = this.loadRepository(getEntity)
    }

    async loadRepository<T extends ObjectLiteral>(entity: EntityTarget<T>): Promise<Repository<T>> {
        const getConn = await this.initConnect;
        return getConn.getRepository(entity)
    }
}