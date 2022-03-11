import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("stock")
export class StockEntity {
    @PrimaryGeneratedColumn("uuid")
    stock_id!: string;

    @Column({ nullable: false })
    sku!: string;

    @Column({ nullable: false })
    item_name!: string;

    @Column({ nullable: false })
    unit_in_stock!: number;

    @Column({ type: "real", nullable: false })
    unit_price!: string;

    @Column({ type: "real", nullable: false })
    buy_price!: number;

    @Column({ nullable: false })
    category_id!: number;

    @Column({ nullable: false })
    picture!: string;

    @CreateDateColumn({ default: () => "CURRENT_TIMESTAMP", type: "timestamp" })
    created_at!: Date;

    @UpdateDateColumn({ default: () => "CURRENT_TIMESTAMP", type: "timestamp" })
    updated_at!: Date;
}
