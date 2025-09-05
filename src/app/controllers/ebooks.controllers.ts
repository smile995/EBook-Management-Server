import { Request, Response } from "express";

const createEbookIntoDB = async (req: Request, res: Response) => {
  try {
    const ebookData = req.body;
    console.log(ebookData)
    console.log("hiting on controller")
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create ebook",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};


export const EBookControllers = {
  createEbookIntoDB,
};
