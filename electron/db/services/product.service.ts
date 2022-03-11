import { Connection, Repository } from "typeorm";
import { StockEntity } from "../../entity/stock.entity";

export class DBService {
    private stockRepository: Repository<StockEntity>;
    constructor(conn: Connection) {
        this.stockRepository = conn.getRepository(StockEntity);
    }

    async getData() {
        return await this.stockRepository.find();
    }

    async getDataById(pid: string) {
        return await this.stockRepository.findOne(pid);
    }
}
