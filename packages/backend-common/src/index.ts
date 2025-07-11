import dotenv from "dotenv";
dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || ""

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET must be defined in environment variables.")
}