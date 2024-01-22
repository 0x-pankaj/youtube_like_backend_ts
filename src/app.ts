import express, {Express, Request, Response } from 'express';

const app:Express = express();

//import routes
import userRouter from "./routes/user.route"


//execute routes
app.use("/api/v1/users", userRouter)

export {app}