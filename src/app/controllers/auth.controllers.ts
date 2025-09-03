import { Request, Response } from "express";
import catchAsyncHandller from "../middlewares/catchAsyncHandller";
import { authServices } from "../services/auth.services";
import { sendResponse } from "../utills/responseHandler";
import generateTokens from "../utills/generateTokens";

import sharp from "sharp";
import uploadToCloudinary from "../utills/uploadCloudinary";

const createUser = catchAsyncHandller(async (req: Request, res: Response) => {
  const userData = req.body;

  // Default profile image
  const defaultImage =
    "https://res.cloudinary.com/demo/image/upload/v172535/default.png";
  userData.profileImage = defaultImage;

  // DB তে user create
  const result = await authServices.createUser(userData);

  // Generate JWT tokens
  const { accessToken, refreshToken } = generateTokens({
    id: result._id.toString(),
    role: result.role,
  });

  // Set refresh token in cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });



  // ✅ Background upload if file exists
  if (req.file && req.file.buffer) {
    process.nextTick(async () => {
      if (!req.file || !req.file.buffer) return; // Extra safety check
      const buffer = await sharp(req.file.buffer)
        .resize(500, 500)
        .jpeg({ quality: 70 })
        .toBuffer();

      const uploaded: any = await uploadToCloudinary(buffer, "book-shop");

      // DB update with real image
      const updated=await authServices.updateUser(result._id.toString(), {
        profileImage: uploaded.secure_url,
      });
         sendResponse(res, { user: updated, accessToken }, "User created successfully", 201);
    });
  }


});



// ===============================
// Controller to handle user login
// ===============================
const loginUser = catchAsyncHandller(async (req: Request, res: Response) => {
    const { email, password } = req.body; // extract login credentials

    // Verify user credentials via service
    const result = await authServices.loginUser({ email, password });

    // Generate JWT tokens
    const { accessToken, refreshToken } = generateTokens({
        id: result._id.toString(),
        role: result.role
    });

    // Set refresh token in cookie for secure storage
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Send response back to client
    sendResponse(res, { user: result, accessToken }, "Login successful", 200);
});

// Export controllers for use in routes
export const authControllers = { createUser, loginUser };
