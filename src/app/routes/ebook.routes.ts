import express from "express";
import { EBookControllers } from "../controllers/ebooks.controllers";
const router = express.Router();

router.post("/create", EBookControllers.createEbookIntoDB);




export const EBookRoutes = router;
