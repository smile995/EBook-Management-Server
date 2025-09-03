import { AppError } from "../errors/appError";
import { IUser, IUserLogin, IUserUpdate } from "../interfaces/user.interface";
import { User } from "../schemaModels/user.model";
import httpStatus from "http-status-codes";


// ===========================
// Create a new user 
// ===========================
const createUser = async (payload: IUser) => {
  // Check if user already exists
  const isExist = await User.findOne({ email: payload.email });
  if (isExist) {
    throw new AppError("User already exist", httpStatus.CONFLICT);
  }

  // Create user
  const user = await User.create(payload);

  // Manually remove password
  const { password, ...safeUser } = user.toObject();

  return safeUser;
};

// ==================================
// Login user
// ==================================
const loginUser = async (payload: IUserLogin) => {
  // Find user including password
  const user = await User.findOne({ email: payload.email }).select("+password");
  if (!user) {
    throw new AppError("User not found",httpStatus.NOT_FOUND);
  }

  // Compare password
  const isMatch = await user.comparePassword(payload.password);
  if (!isMatch) {
    throw new AppError("Invalid credentials",httpStatus.UNAUTHORIZED);
  }

  // Manually remove password
  const { password, ...safeUser } = user.toObject();

  return safeUser;
};




// ===========================
// Update existing user
// ===========================
const updateUser = async (userId: string, payload: IUserUpdate) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new AppError("User not found", httpStatus.NOT_FOUND);
  }

  // Update fields dynamically
  Object.keys(payload).forEach((key) => {
    (user as any)[key] = (payload as any)[key];
  });

  await user.save();

  const { password, ...safeUser } = user.toObject();
  return safeUser;
};


// ==========================
//  Export auth services
// ==========================
export const authServices = {
  createUser,
  loginUser,
  updateUser

};
