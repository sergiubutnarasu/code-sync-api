import * as express from "express";
import * as controllers from './controllers';

class App {
    public Express;

    constructor() {
        this.Express = express();
        this.RoutesConfig();
    }

    private RoutesConfig(): void {
        this.Express.use('/', controllers.HomeController);
    }
}

export default new App().Express  