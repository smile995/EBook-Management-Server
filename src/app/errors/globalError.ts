import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = httpStatus.BAD_REQUEST;
    let message =  "something went wrong";
    let errorSource=[
        {
            path:"",
            message:""
        }
    ]

    // handling the zodError according to our error model
    // if(error.name=="ZodError"){
    //     const errorPth=error.issues[0].path
    //     message="Validation Error",
    //     errorSource=[{
    //         path:errorPth[errorPth.length-1],
    //         message:error.issues[0].message
    //     }]
    // }


    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        errorSource,
        error
    })
}