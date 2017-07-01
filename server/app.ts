import * as express from "express";
import { json, urlencoded } from "body-parser";
import * as http from "http";

process.env.NODE_ENV = "testing";



import { APIDocsRouter } from "./routes/swagger";

const app: express.Application = express();

app.use(json());
app.use(urlencoded({
    extended: true
}));

app.get("/", (request: express.Request, response: express.Response) => {
    response.json({
        name: "Express application"
    })
});

app.use((err: Error & { status: number }, request: express.Request, response: express.Response, next: express.NextFunction): void => {

    response.status(err.status || 500);
    response.json({
        error: "Server error"
    })
});

import { AppDataController } from "./routes/controllers/AppDataController";
app.use("/api", new AppDataController().getRouter());
app.use("/api/docs", new APIDocsRouter().getRouter());

const server: http.Server = app.listen(3003);

export { server };