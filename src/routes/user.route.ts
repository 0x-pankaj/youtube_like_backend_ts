import { Router } from "express";

const router = Router();



import { registerUser } from "../controllers/user.controller";


router.route("/register").get(registerUser)


export default Router;