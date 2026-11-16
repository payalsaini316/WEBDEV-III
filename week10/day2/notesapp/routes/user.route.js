
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../model/user.model");

const userRouter = express.Router();

// REGISTER API
userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    console.log(name, email, password);

    try {
        bcrypt.hash(password, 5, async (err, hash) => {

            if (err) {
                return res.send("Password hashing failed");
            }

            if (hash) {
                try {
                    const user = new userModel({
                        name,
                        email,
                        password: hash
                    });

                    await user.save();

                    res.send("User Registered successfully");

                } catch (error) {
                    res.send("Can't Register the user");
                }
            }
        });

    } catch (error) {
        res.send("Can't Register the user");
    }
});


// LOGIN API
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.find({ email });

        console.log(user);

        if (user.length > 0) {

            bcrypt.compare(password, user[0].password, (err, result) => {

                if (err) {
                    return res.send("Password comparison failed");
                }

                if (result) {

                    const token = jwt.sign(
                        { userID: user[0]._id },
                        "coding"
                    );

                    res.send({
                        msg: "Login Successfully",
                        token
                    });

                } else {
                    res.send("Wrong Password");
                }
            });

        } else {
            res.send("User is not Registered");
        }

    } catch (error) {
        res.send("User is not Registered");
    }
});

module.exports = { userRouter };
