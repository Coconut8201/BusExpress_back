"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InTkuBusRoute = void 0;
const Route_1 = require("../interfaces/Route");
const InTkuBus_1 = require("../controllers/InTkuBus");
class InTkuBusRoute extends Route_1.Route {
    constructor() {
        super();
        this.Contorller = new InTkuBus_1.InTkuBus;
        this.url = '/InTkuBus';
        this.setRoutes();
    }
    setRoutes() {
        this.router.get(`${this.url}/findBusInTkuNus`, this.Contorller.findBusInTkuNus);
    }
}
exports.InTkuBusRoute = InTkuBusRoute;
