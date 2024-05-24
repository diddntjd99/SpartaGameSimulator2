import jwt from 'jsonwebtoken';
import { userPrisma } from '../src/utils/prisma/user.cilent.js';

export default async function (req, res, next) {
  try {
    const { authorization } = req.cookies;

    if (authorization) {
      const [tokenType, token] = authorization.split(' ');

      const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
      const user_id = decodedToken.user_id;

      const user = await userPrisma.users.findFirst({
        where: {
          user_id,
        },
      });
      if (!user) {
        res.clearCookie('authorization');
      }

      req.user = user;
    }

    next();
  } catch (error) {
    res.clearCookie('authorization');

    switch (error.name) {
      default:
        return res
          .status(401)
          .json({ message: error.message ?? '비 정상적인 요청입니다.' });
    }
  }
}
