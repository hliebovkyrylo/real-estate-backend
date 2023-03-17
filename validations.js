import { body } from "express-validator";

export const registerValidator = [
    body('email', 'invalid mail format').isEmail(),
    body('password', 'password must be at least 8 characters long').isLength({ min: 8 }),
    body('firstName', 'enter your real first name').isLength({ min: 3 }),
    body('lastName', 'enter your real last name').isLength({ min: 3 }),
    body('avatarUrl', 'wrong image format').optional().isURL(),
];

export const loginValidator = [
    body('email', 'Wrong email').isEmail(),
    body('password', 'Wrong password').isLength({ min: 8 })
];