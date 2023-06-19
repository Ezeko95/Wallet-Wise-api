import * as jwt from "jsonwebtoken";
import config from "../lib/config";

export function generateToken(email: string): string {
  const token = jwt.sign({ email }, config.secret, { expiresIn: "1h" });
  return token;
}

export function verifyToken(token: string): string | object {
  try {
    const decoded = jwt.verify(token, config.secret);
    return decoded;
  } catch (error) {
    throw new Error("Invalid token");
  }
}
