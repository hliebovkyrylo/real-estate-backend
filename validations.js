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
    body('neighbourhood', 'Error').isString(),
    body('propertyType', 'Error').isString(),
    body('acceptedCurrencies', 'Error').isString(),
    body('size', 'Error').isString(),
    body('bedrooms', 'Error').isString(),
    body('bathrooms', 'Error').isString(),
    body('yearBuilt', 'Error').isLength({ max: 4 }),
    body('floors', 'Error').isString(),
    body('description', 'Error').isString(),
    body('videoLink', 'Error').isString(),
    body('poster', 'Photo upload error').isString(),
];