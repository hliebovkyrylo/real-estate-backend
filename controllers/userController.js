import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../models/user.js";

export const register = async (req, res) => {
    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(password, salt);

        const doc = new userModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            passwordHash: hash,
        });

        const user = await doc.save();

        const token = jwt.sign(
            {
                _id: user._id
            },
            'password',
            {
                expiresIn: '30d'
            },
        );

        const { passwordHash, ...userData } = user._doc;

        res.json({
            ...userData,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to register"
        })
    }
};

export const login = async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.body.email});

        if (!user) {
            res.status(404).json({
                message: "User is not found"
            });
        };

        const correctPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

        if (!correctPass) {
            res.status(400).json({
                message: "Wrong login or password"
            });
        };

        const token = jwt.sign(
            {
                _id: user._id
            },
            'password',
            {
                expiresIn: '30d'
            },
        );

        const { passwordHash, ...userData } = user._doc;

        res.json({
            ...userData,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to login"
        });
    };
};

export const getMe = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId);

        if (!user) {
            res.status(404).json({
                message: "User is not found"
            });
        };

        const { passwordHash, ...userData } = user._doc;

        res.json({
            ...userData
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "No access"
        });
    }
};