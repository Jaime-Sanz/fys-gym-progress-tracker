import dotenv from "dotenv";
import session from "express-session";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import prisma from "../lib/prisma.js";

dotenv.config();

const secret = process.env.SESSION_SECRET;

export const sessionMiddleware = session({
  secret,
  resave: false,
  saveUninitialized: false,
  store: new PrismaSessionStore(prisma, {
    checkPeriod: 2 * 60 * 1000,
    dbRecordIdIsSessionId: true,
  }),
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },
});