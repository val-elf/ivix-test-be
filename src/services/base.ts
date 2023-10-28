import { Router, Request } from 'express';

export class BaseService {
    constructor(private router: Router) {
    }

    get(path: string, callback: (props: Map<string, string>) => any): void {
        this.router.get(path, (req: Request, res, next) => {
            const timeoutValue = Math.random() * 500 + 200;
            const props = new Map<string, string>();
            for(let key in req.params) {
                props.set(key, req.params[key]);
            }
            const result = callback(props);
            setTimeout(() => {
                if (result instanceof Buffer) {
                    res.set('Content-Type', 'image/jpeg');
                    res.send(result);
                } else {
                    res.json(result);
                }
            }, timeoutValue);
        });
    }
}