import express from "express";
import { authControllers } from "../controllers/auth.controllers";
import upload from "../configs/cloudinary";

const router = express.Router();


// Route: POST /auth/signup
// Description: Create a new user and send access token + refresh token
router.post("/register", upload.single("profileImage"), authControllers.createUser);

// Route: POST /auth/login
// Description: Login an existing user and send access token + refresh token
router.post("/login", authControllers.loginUser);


export const authRoutes = router;
