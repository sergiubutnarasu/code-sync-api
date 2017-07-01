import { Router, Request, Response } from 'express';
import { BaseController } from "./base.controller";
import { UserService } from "../services/user.service";

class Home extends BaseController {
    constructor() {
        super();
    }

    RoutesConfig() {
        this.Router.get('/', (req: Request, res: Response) => {
            res.json({
                message: `Hello, World!`
            });
        });

        this.Router.post('/', (req: Request, res: Response) => {
            let user = UserService.GetUser();
            res.json({
                message: `Hello, World! ${user.Name}!`
            });
        });

        this.Router.get('/:name', (req: Request, res: Response) => {
            let { name } = req.params;
            res.send(`Hello, ${name}`);
        });
    }
}

export const HomeController: Router = new Home().Router;