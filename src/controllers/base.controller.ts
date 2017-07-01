import { Router, Request, Response } from 'express';

export class BaseController {
    public Router: Router = Router();

    constructor() {
        this.RoutesConfig();
    }

    RoutesConfig() {
        this.Router.get('/', (req: Request, res: Response) => {
            res.send(`You need to override "RoutesConfig" method in ${this.constructor.name} controller class`);
        });
    }
}