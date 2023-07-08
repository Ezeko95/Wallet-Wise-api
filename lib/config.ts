import dotenv from "dotenv"

dotenv.config();

const config = {
  port: process.env.API_PORT || "3001",
  host: process.env.API_host || "localhost",
  cors: process.env.CORS || "http://localhost:5173/",
  secret: process.env.JWT_SECRET || "seAcuerdanDeTuSecreto.com?",
  gmail: process.env.GMAIL_MAIL || "walletwise23@gmail.com",
  pass: process.env.GMAIL_PASS || "pfqvibvndccryvlm",
};

export default config;
