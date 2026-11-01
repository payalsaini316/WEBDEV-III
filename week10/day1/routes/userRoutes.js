const express = require("express");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (hash) {
                const user = new userModel({ name, email, password: hash });
                await user.save();
                res.send({  "User has been registered" });
            } catch (err) {
                res.send({ "can't register the user" });
            }
        });