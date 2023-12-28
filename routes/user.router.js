import express from "express";
import User from "../schemas/user.schema.js";

const userRouter = express.Router();

// 회원 전체 조회 
userRouter.get("/", async (req, res) => {
    try {
        const users = await User.find().exec();
        const modifiedUsers = users.map(user => ({
            userId: user._id,
            name: user.name,
            email: user.email,
            pw: user.pw
        }));
        return res.status(200).json([{ data: modifiedUsers }]);
    } catch (err) {
        console.log(err.message);
        return res.status(404).json({ errorMessage: err.message });
    }
});


// 임시 유저 등록 API
// userRouter.post("/", async (req, res) => {
//     try {
//         const { name, email, pw } = req.body;
//         const createUser = await User.create({
//             name: name,
//             email: email,
//             pw: pw
//         })
//         return res.status(200).json([{ user: createUser }])
//     } catch(err) {
//         console.log(err.message)
//         return res.status(404).json({errorMessage: err.message})
//     }
// })


// 회원 상세 정보 API
userRouter.get("/:userId", async (req, res) => {
    try {
        const { userId } = req.params;
        const findUser = await User.findById(userId).exec();
        console.log(findUser);
        if (!findUser) {
            return res.status(404).json({ errorMessage: 'none' });
        }
        
        const modifiedUser = {
            userId: findUser._id,
            name: findUser.name,
            email: findUser.email,
            pw: findUser.pw
        };

        return res.json([{ message: 'Complete', data: modifiedUser }]);
    } catch (err) {
        console.log(err.message);
        return res.status(404).json({ errorMessage: err.message });
    }
});



export default userRouter
