import express from 'express';
import authMiddleware from '../../middlewares/auth.middleware.js';
import { gamePrisma } from '../utils/prisma/game.cilent.js';
import { userPrisma } from '../utils/prisma/user.cilent.js';

const router = express.Router();

// 캐릭터가 장착한 아이템 목록 조회 API
router.get('/characters/:character_id/equipments', async (req, res, next) => {
  try {
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

    const equipment = await userPrisma.equipments.findMany({
      where: {
        Character_id: +character_id,
      },
      select: {
        item_code: true,
        item_name: true,
      },
    });
    return res.status(200).json({ equipment });
  } catch (error) {
    next(error);
  }
});

// 아이템 장착 API
router.post(
  '/characters/:character_id/equipments',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { user_id } = req.user;
      const { character_id } = req.params;
      const { item_code } = req.body;

      if (!item_code) {
        return res
          .status(400)
          .json({ message: '데이터를 올바르게 입력해주세요.' });
      }

      const character = await userPrisma.characters.findFirst({
        where: {
          User_id: user_id,
          character_id: +character_id,
        },
      });
      if (!character) {
        return res
          .status(401)
          .json({ message: '해당 캐릭터가 존재하지 않습니다.' });
      }

      const item = await gamePrisma.items.findFirst({
        where: {
          item_code,
        },
      });
      if (!item) {
        return res.status(401).json({ message: '존재하지 않는 아이템입니다.' });
      }

      const inventory = await userPrisma.inventorys.findFirst({
        where: {
          Character_id: +character_id,
          item_code,
        },
      });
      if (!inventory) {
        return res
          .status(401)
          .json({ message: '인벤토리에 해당 아이템이 존재하지 않습니다.' });
      }

      const equipment = await userPrisma.equipments.findFirst({
        where: {
          Character_id: +character_id,
          item_code,
        },
      });
      if (equipment) {
        return res
          .status(401)
          .json({ message: '이미 장착 중인 아이템입니다.' });
      }

      await userPrisma.equipments.create({
        data: {
          Character_id: +character_id,
          item_code,
          item_name: item.item_name,
        },
      });

      let totalHealth = character.health;
      let totalPower = character.power;
      if (item.item_stat.health) {
        totalHealth += item.item_stat.health;
      }
      if (item.item_stat.power) {
        totalPower += item.item_stat.power;
      }

      const updateCharacter = await userPrisma.characters.update({
        data: {
          health: totalHealth,
          power: totalPower,
        },
        where: {
          User_id: user_id,
          character_id: +character_id,
        },
      });
      return res.status(200).json({ updateCharacter });
    } catch (error) {
      next(error);
    }
  }
);

// 아이템 탈착 API
router.delete(
  '/characters/:character_id/equipments',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { user_id } = req.user;
      const { character_id } = req.params;
      const { item_code } = req.body;

      if (!item_code) {
        return res
          .status(400)
          .json({ message: '데이터를 올바르게 입력해주세요.' });
      }

      const character = await userPrisma.characters.findFirst({
        where: {
          User_id: user_id,
          character_id: +character_id,
        },
      });
      if (!character) {
        return res
          .status(401)
          .json({ message: '해당 캐릭터가 존재하지 않습니다.' });
      }

      const item = await gamePrisma.items.findFirst({
        where: {
          item_code,
        },
      });
      if (!item) {
        return res.status(401).json({ message: '존재하지 않는 아이템입니다.' });
      }

      const equipment = await userPrisma.equipments.findFirst({
        where: {
          Character_id: +character_id,
          item_code,
        },
      });
      if (!equipment) {
        return res
          .status(401)
          .json({ message: '장착 중인 아이템이 아닙니다.' });
      }

      await userPrisma.equipments.delete({
        where: {
          equipment_id: equipment.equipment_id,
        },
      });

      let totalHealth = character.health;
      let totalPower = character.power;
      if (item.item_stat.health) {
        totalHealth -= item.item_stat.health;
      }
      if (item.item_stat.power) {
        totalPower -= item.item_stat.power;
      }

      const updateCharacter = await userPrisma.characters.update({
        data: {
          health: totalHealth,
          power: totalPower,
        },
        where: {
          User_id: user_id,
          character_id: +character_id,
        },
      });
      return res.status(200).json({ updateCharacter });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
