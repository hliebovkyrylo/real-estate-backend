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

export const projectValidator = [
    body('address', 'invalid address').isString(),
    body('price', 'invalid mail format').isString(),
    body('neighbourhood', 'invalid mail format').isString(),
    body('propertyType', 'invalid mail format').isString(),
    body('firstName', 'invalid mail format').isLength({ min: 3 }),
    body('lastName', 'invalid mail format').isLength({ min: 3 }),
    body('email', 'invalid mail format').isEmail(),
    body('phoneNumber', 'invalid mail format').isLength({ min: 9, max: 13 }),
    body('avatarUrl', 'wrong image format').optional().isURL(),
    body('acceptedCurrencies', 'invalid mail format').isString(),
    body('size', 'invalid mail format').isString(),
    body('bedrooms', 'invalid mail format').isString(),
    body('rathrooms', 'invalid mail format').isString(),
    body('yearBuilt', 'invalid mail format').isLength({ max: 4 }),
    body('floors', 'invalid mail format').isString(),
    body('description', 'invalid mail format').isString(),
    body('videoLink', 'wrong image format').optional().isURL(),
];