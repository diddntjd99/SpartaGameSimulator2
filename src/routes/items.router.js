import express from 'express';
import { gamePrisma } from '../utils/prisma/game.cilent.js';
import { userPrisma } from '../utils/prisma/user.cilent.js';

const router = express.Router();

// 아이템 생성 API
router.post('/items', async (req, res, next) => {
  try {
    const { item_name, item_stat, item_price } = req.body;
    if (!item_name || !item_stat || !item_price) {
      return res
        .status(400)
        .json({ message: '데이터를 올바르게 입력해주세요.' });
    }

    if (!item_stat.health && !item_stat.power) {
      return res
        .status(400)
        .json({ message: '아이템 스탯 데이터가 존재하지 않습니다.' });
    }

    const item = await gamePrisma.items.findFirst({
      where: {
        item_name,
      },
    });
    if (item) {
      return res.status(409).json({ message: '이미 존재하는 아이템입니다.' });
    }

    const createItem = await gamePrisma.items.create({
      data: {
        item_name,
        item_stat,
        item_price,
      },
    });

    return res.status(200).json({ createItem });
  } catch (error) {
    next(error);
  }
});

// 아이템 수정 API
router.patch('/items/:item_code', async (req, res, next) => {
  try {
    const { item_name, item_stat } = req.body;
    const { item_code } = req.params;

    if (!item_name || !item_stat) {
      return res
        .status(400)
        .json({ message: '데이터를 올바르게 입력해주세요.' });
    }
    if (!item_stat.health && !item_stat.power) {
      return res
        .status(400)
        .json({ message: '아이템 스탯 데이터가 존재하지 않습니다.' });
    }

    const item = await gamePrisma.items.findFirst({
      where: {
        item_code: +item_code,
      },
    });
    if (!item) {
      return res
        .status(401)
        .json({ message: '해당 아이템이 존재하지 않습니다.' });
    }

    const sameNameItem = await gamePrisma.items.findFirst({
      where: {
        item_name,
      },
    });
    if (sameNameItem) {
      if (sameNameItem.item_code !== item.item_code) {
        return res.status(409).json({ message: '이미 존재하는 아이템입니다.' });
      }
    }

    let oldHealth = item.item_stat.health;
    let oldPower = item.item_stat.power;

    const updateItem = await gamePrisma.items.update({
      data: {
        item_name,
        item_stat,
      },
      where: {
        item_code: +item_code,
      },
    });

    // 수정된 아이템을 끼고 있는 캐릭터가 있으면 해당 캐릭터의 스탯도 변동된 아이템 스탯이 적용
    const equipments = await userPrisma.equipments.findMany({
      where: {
        item_code: +item_code,
      },
    });

    equipments.forEach(async (equipment) => {
      const character = await userPrisma.characters.findFirst({
        where: {
          character_id: equipment.Character_id,
        },
      });

      let totalHealth = character.health;
      let totalPower = character.power;
      if (item_stat.health) {
        totalHealth -= oldHealth;
        totalHealth += item_stat.health;
      }
      if (item_stat.power) {
        totalPower -= oldPower;
        totalPower += item_stat.power;
      }

      await userPrisma.characters.update({
        data: {
          health: totalHealth,
          power: totalPower,
        },
        where: {
          character_id: equipment.Character_id,
        },
      });
    });

    return res.status(200).json({ updateItem });
  } catch (error) {
    next(error);
  }
});

// 아이템 목록 조회 API
router.get('/items', async (req, res, next) => {
  try {
    const items = await gamePrisma.items.findMany({
      select: {
        item_code: true,
        item_name: true,
        item_price: true,
      },
    });
    return res.status(200).json({ items });
  } catch (error) {
    next(error);
  }
});

// 아이템 상세 조회 API
router.get('/items/:item_code', async (req, res, next) => {
  try {
    const { item_code } = req.params;
    const items = await gamePrisma.items.findFirst({
      where: {
        item_code: +item_code,
      },
    });
    return res.status(200).json({ items });
  } catch (error) {
    next(error);
  }
});

export default router;
