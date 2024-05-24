import express from 'express';
import authMiddleware from '../../middlewares/auth.middleware.js';
import { gamePrisma } from '../utils/prisma/game.cilent.js';
import { userPrisma } from '../utils/prisma/user.cilent.js';

const router = express.Router();

// 아이템 구매 API
router.post(
  '/characters/:character_id/buyItem',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { user_id } = req.user;
      const { character_id } = req.params;
      const { item_code, count } = req.body;

      if (!item_code || !count) {
        return res
          .status(400)
          .json({ message: '데이터를 올바르게 입력해주세요.' });
      }

      const item = await gamePrisma.items.findFirst({
        where: {
          item_code,
        },
      });
      if (!item) {
        return res.status(401).json({ message: '존재하지 않는 아이템입니다.' });
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

      if (character.money >= item.item_price * count) {
        const inventory = await userPrisma.inventorys.findFirst({
          where: {
            Character_id: +character_id,
            item_code,
          },
        });
        if (inventory) {
          // 해당 아이템이 인벤토리 안에 이미 있으면 구입한 개수만 증가
          await userPrisma.inventorys.update({
            data: {
              count: inventory.count + count,
            },
            where: {
              inventory_id: inventory.inventory_id,
            },
          });
        } else {
          // 해당 아이템이 인벤토리 안에 없으면 인벤토리 데이터 생성
          await userPrisma.inventorys.create({
            data: {
              Character_id: +character_id,
              item_code,
              count,
            },
          });
        }

        const updateCharacter = await userPrisma.characters.update({
          data: {
            money: character.money - item.item_price * count,
          },
          where: {
            User_id: user_id,
            character_id: +character_id,
          },
          select: {
            character_id: true,
            character_name: true,
            money: true,
          },
        });

        return res.status(200).json({ updateCharacter });
      } else {
        return res.status(402).json({ message: '캐릭터에 돈이 부족합니다.' });
      }
    } catch (error) {
      next(error);
    }
  }
);

// 아이템 구매 API
router.delete(
  '/characters/:character_id/sellItem',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { user_id } = req.user;
      const { character_id } = req.params;
      const { item_code, count } = req.body;

      if (!item_code || !count) {
        return res
          .status(400)
          .json({ message: '데이터를 올바르게 입력해주세요.' });
      }

      const item = await gamePrisma.items.findFirst({
        where: {
          item_code,
        },
      });
      if (!item) {
        return res.status(401).json({ message: '존재하지 않는 아이템입니다.' });
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
      if (inventory.count < count) {
        return res.status(401).json({
          message: '인벤토리에 해당 개수만큼 아이템이 존재하지 않습니다.',
        });
      }

      if (inventory.count === count) {
        // 팔 아이템과 인벤토리 아이템 개수가 똑같으면 인벤토리 데이터 삭제
        await userPrisma.inventorys.delete({
          where: {
            inventory_id: inventory.inventory_id,
          },
        });
      } else {
        // 팔 아이템과 인벤토리 아이템 개수가 똑같지 않으면 인벤토리의 count 데이터만 수정
        await userPrisma.inventorys.update({
          data: {
            count: inventory.count - count,
          },
          where: {
            inventory_id: inventory.inventory_id,
          },
        });
      }

      // 원가의 60% 가격으로 정산
      const soldMoney = (item.item_price * count * 60) / 100;
      const updateCharacter = await userPrisma.characters.update({
        data: {
          money: character.money + soldMoney,
        },
        where: {
          User_id: user_id,
          character_id: +character_id,
        },
        select: {
          character_id: true,
          character_name: true,
          money: true,
        },
      });

      return res.status(200).json({ updateCharacter });
    } catch (error) {
      next(error);
    }
  }
);

// 인벤토리 조회 API
router.get(
  '/characters/:character_id/inventory',
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
          .json({ message: '해당 캐릭터가 존재하지 않습니다.' });
      }

      const inventory = await userPrisma.inventorys.findMany({
        where: {
          Character_id: +character_id,
        },
        select: {
          item_code: true,
          count: true,
        },
      });

      return res.status(200).json({ inventory });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
