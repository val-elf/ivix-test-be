import { Router } from "express";
import { BaseService } from "./base";
import { STOCK_INFO_MOCK } from "./mocks/stock-info.mock";
import fs from 'fs';

export class StocksService extends BaseService {
    constructor(router: Router) {
        super(router);
        this.get('/stock-info', () => this.getFullStockInfo());
        this.get('/stock-info/image/:id', (props: Map<string, string>) => this.getStockPicture(props.get('id')));
    }

    getFullStockInfo() {
        return STOCK_INFO_MOCK;
    }

    getStockPicture(stockId: string) {
        const pictureFile = fs.readFileSync(`./src/services/mocks/pictures/products/product-${stockId}.jpg`);
        return pictureFile;
    }
}