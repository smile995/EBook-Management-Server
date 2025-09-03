import type { Request, Response } from "express"

export const notFoundRoute = (req: Request, res: Response) => {
  const response = {
    success: false,
    message: `Route ${req.originalUrl} not found`,
  }
  res.status(404).json(response)
}