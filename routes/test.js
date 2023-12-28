userRouter.get("/:userId", async(req, res) => {
    try {
        const { userId } = req.params;
        const findUser = await User.findById(userId).exec();
        console.log(findUser);
        if(!findUser){
            return res.status(404).json({errorMessage: 'none'})
        }
        return res.json([{ message:'Complete', data: findUser }])
    } catch(err){
        console.log(err.message)
        return res.status(404).json({errorMessage: err.message})
    }


})
