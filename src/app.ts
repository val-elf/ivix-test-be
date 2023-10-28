import express from 'express';
import * as Services from './services';

const app = express();

app.options('\/*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.send();
});

for(let Service of Object.values(Services)) {
    const router = express.Router();
    router.use('\/*', (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    });
    new Service(router);
    app.use(router);
}

app.listen(3001, () => {});