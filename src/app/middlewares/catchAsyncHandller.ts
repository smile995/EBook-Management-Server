import { NextFunction, Request, RequestHandler, Response } from "express"


export const catchAsyncHandller = (func:RequestHandler) => {
return (req:Request, res:Response, next:NextFunction) => {
    Promise.resolve(func(req, res, next)).catch(next)
  }
}
export default catchAsyncHandller