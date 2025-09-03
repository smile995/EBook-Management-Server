import jwt from "jsonwebtoken";
import { configs } from "../configs";

interface TokenPayload {
  id: string;
  role: string;
}

const generateTokens = ({ id, role }: TokenPayload) => {
  const accessToken = jwt.sign({ id, role }, configs.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: configs.JWT_ACCESS_TOKEN_EXPIRES_IN,
  });

  const refreshToken = jwt.sign({ id, role }, configs.JWT_REFRESH_TOKEN_SECRET, {
    expiresIn: configs.JWT_REFRESH_TOKEN_EXPIRES_IN,
  });

  return { accessToken, refreshToken };
};

export default generateTokens;
