import { Router } from "express";
import { BaseService } from "./base";
import { BRANDS_MOCK } from "./mocks/brands.mock";

export class BrandsService extends BaseService {
    constructor(router: Router) {
        super(router);
        this.get('/brands', () => this.getBrands());
    }

    getBrands() {
        return BRANDS_MOCK;
    }
}