import express from 'express';
import authMiddleware from '../../middlewares/auth.middleware.js';
import { gamePrisma } from '../utils/prisma/game.cilent.js';
import { userPrisma } from '../utils/prisma/user.cilent.js';

const router = express.Router();

export default router;
