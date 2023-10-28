import { Router } from "express";
import { BaseService } from "./base";
import { SELLERS_MOCK } from "./mocks/sellers.mock";

export class SellersService extends BaseService {
    constructor(router: Router) {
        super(router);
        this.get('/sellers', () => this.getSellers());
    }

    getSellers() {
        return SELLERS_MOCK;
    }
}