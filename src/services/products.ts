import { BaseService } from './base';
import { PRODUCTS_MOCK } from './mocks';
import { IProduct } from '~/models';

export class ProductsService extends BaseService {
    constructor(router) {
        super(router);
        this.get('/products', () => this.getProducts());
        this.get('/products/:id', (props: Map<string, string>) => this.getProductById(props.get('id')));
    }

    getProducts(): IProduct[] {
        return PRODUCTS_MOCK;
    }

    getProductById(id: string) {
        return PRODUCTS_MOCK.find(product => product.id === id);
    }
}