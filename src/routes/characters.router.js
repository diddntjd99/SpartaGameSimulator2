import express from 'express';
import authMiddleware from '../../middlewares/auth.middleware.js';
import nonLoginMiddleware from '../../middlewares/non-login.auth.middleware.js';
import { userPrisma } from '../utils/prisma/user.cilent.js';

const router = express.Router();

// 캐릭터 생성 API
router.post('/characters', authMiddleware, async (req, res, next) => {
  try {
    const { user_id } = req.user;
    const { character_name } = req.body;

    if (!character_name) {
      return res
        .status(400)
        .json({ message: '데이터를 올바르게 입력해주세요.' });
    }

    const character = await userPrisma.characters.findFirst({
      where: {
        character_name,
      },
    });
    if (character) {
      return res.status(409).json({ message: '이미 존재하는 캐릭터입니다.' });
    }

    const createCharacter = await userPrisma.characters.create({
      data: {
        User_id: user_id,
        character_name,
      },
      select: {
        character_id: true,
        character_name: true,
      },
    });

    return res.status(200).json({ createCharacter });
  } catch (error) {
    next(error);
  }
});

// 캐릭터 삭제 API
router.delete(
  '/characters/:character_id',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { user_id } = req.user;
      const { character_id } = req.params;

      const character = await userPrisma.characters.findFirst({
        where: {
          User_id: user_id,
          character_id: +character_id,
        },
      });
      if (!character) {
        return res
          .status(401)
          .json({ message: '현재 계정에 해당 캐릭터가 존재하지 않습니다.' });
      }

      await userPrisma.characters.delete({
        where: {
          character_id: +character_id,
        },
      });

      return res.status(200).json({});
    } catch (error) {
      next(error);
    }
  }
);

// 캐릭터 상세 조회 API
router.get(
  '/characters/:character_id',
  nonLoginMiddleware,
  async (req, res, next) => {
    try {
      const cookie = req.user;
      const { character_id } = req.params;

      const character = await userPrisma.characters.findFirst({
        where: {
          character_id: +character_id,
        },
      });
      if (!character) {
        return res
          .status(401)
          .json({ message: '해당 캐릭터가 존재하지 않습니다.' });
      }

      if (cookie) {
        // 로그인 상태
        const showCharacter = await userPrisma.characters.findFirst({
          where: {
            character_id: +character_id,
          },
          select: {
            character_name: true,
            health: true,
            power: true,
            money: character.User_id === cookie.user_id ? true : false,
          },
        });
        return res.status(200).json({ showCharacter });
      } else {
        // 비로그인 상태
        const showCharacter = await userPrisma.characters.findFirst({
          where: {
            character_id: +character_id,
          },
          select: {
            character_name: true,
            health: true,
            power: true,
          },
        });
        return res.status(200).json({ showCharacter });
      }
    } catch (error) {
      next(error);
    }
  }
);

export default router;
