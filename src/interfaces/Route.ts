import { Contorller } from "./Controller";
import { Router } from "express";

export abstract class Route{
    protected abstract url: string
    protected abstract Contorller:Contorller
    protected router = Router()
    protected abstract setRoutes():void
    public getRouter(){
        return this.router
    }
    public getUrl(){
        return this.url
    }
}