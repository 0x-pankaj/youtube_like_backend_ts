
import { Request, Response } from "express"


const registerUser = (req:Request,res:Response)=> {
    res.send("ok from registerUser")
}



export {
    registerUser
}


