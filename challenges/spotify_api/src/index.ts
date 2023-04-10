import Koa from "koa";
import Router from "koa-router";

import { Server } from "http";


//_ MIDDLEWARE
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import json from "koa-json"

//_ APP SETUP
const app:Koa = new Koa()


app.use(bodyParser());
app.use(cors({
        origin: "*"
    })
);
app.use(logger());
app.use(json());

//_ ROUTER SETUP
const ROUTER:Router = new Router();


ROUTER.get("/", async (ctx: Koa.Context) => {

    try {
        ctx.body = {
            result: "SUCCESS"
        };
    } catch (err) {
        console.error(err);
    };

});


app.use(ROUTER.routes());

const SERVER:Server = app
    .listen(process.env.PORT, async () => {
        console.log(`Server listening on port: ${process.env.PORT}`);
    })
    .on("error", (err) => {
        console.error(err);
    });


export default SERVER;