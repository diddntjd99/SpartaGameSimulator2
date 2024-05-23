import { PrismaClient as UserPrisma } from '../../../prisma/generated/userCilent/index.js';

export const userPrisma = new UserPrisma({
  log: ['query', 'info', 'warn', 'error'],

  errorFormat: 'pretty',
  datasources: {
    db: {
      url: process.env.USER_DATABASE_URL,
    },
  },
});
