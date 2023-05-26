import { Route } from "../interfaces/Route";
import { InTkuBus } from "../controllers/InTkuBus";

export class InTkuBusRoute extends Route{
    protected url: string;
    protected Contorller = new InTkuBus;
    constructor(){
        super()
        this.url = '/InTkuBus'
        this.setRoutes()
    }
    protected setRoutes(): void {
        this.router.get(`${this.url}/findBusInTkuNus`, this.Contorller.findBusInTkuNus);
    }
}