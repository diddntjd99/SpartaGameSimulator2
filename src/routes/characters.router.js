import express from 'express';
import authMiddleware from '../../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/characters', authMiddleware, async (req, res, next) => {
  const { user_id } = req.user;

  return res.status(200).json({ user_id });
});

export default router;
