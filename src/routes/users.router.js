import express from "express";
import { userPrisma } from "../utils/prisma/user.cilent.js";

const router = express.Router();

// 회원가입 API
router.post("/sign-up", async (req, res, next) => {
  try {
    const { user_id, user_pw, user_pw_check, user_name } = req.body;

    //소문자 + 숫자 vaildation
    const idVaildation = /^[a-z0-9]+$/;
    if (!idVaildation.test(user_id)) {
      return res.status(400).json({ message: "아이디는 소문자 + 숫자 조합으로 만들어주세요." });
    }

    if (user_pw.length < 6) {
      return res.status(400).json({ message: "비밀번호는 6자 이상으로 만들어주세요." });
    }

    if (user_pw !== user_pw_check) {
      return res.status(400).json({ message: "비밀번호 확인이 일치하지 않습니다." });
    }

    const isExistUser = await userPrisma.users.findFirst({
      where: {
        user_id,
      },
    });
    if (isExistUser) {
      return res.status(409).json({ message: "이미 존재하는 유저 아이디입니다." });
    }

    const user = await userPrisma.users.create({
      data: {
        user_id,
        user_pw,
        user_name,
      },
    });

    return res.status(201).json({ message: "회원가입이 완료되었습니다." });
  } catch (error) {
    next(error);
  }
});

export default router;
