import "reflect-metadata";
import { createConnection } from "typeorm";
import { StockEntity } from "../entity/stock.entity";

export const connection = () => {
    return createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "minkhant",
        password: "mktk",
        database: "itverse",
        synchronize: true,
        logging: false,
        entities: [StockEntity],
    });
};
