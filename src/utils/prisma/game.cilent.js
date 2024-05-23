import { PrismaClient as GamePrisma } from "../../../prisma/generated/gameCilent/index.js";

export const gamePrisma = new GamePrisma({
  log: ["query", "info", "warn", "error"],

  errorFormat: "pretty",
  datasources: {
    db: {
      url: process.env.GAME_DATABASE_URL,
    },
  },
});
