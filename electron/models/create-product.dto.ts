export class CreateProductDto {
    sku!: string;
    item_name!: string;
    unit_in_stock!: number;
    unit_price!: string;
    buy_price!: number;
    category_id!: number;
    picture!: string;
}
