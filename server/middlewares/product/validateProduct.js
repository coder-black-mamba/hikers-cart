import { check, validationResult } from 'express-validator';
import validator from 'validator';

export const validatorChecks = [
    check('title')
        .isLength({ min: 5, max: 50 })
        .trim()
        .withMessage('product length must be between 5-15'),
    check('description')
        .isLength({ min: 30, max: 300 })
        .trim()
        .withMessage('description length must be between 30-300'),
    check('price').isNumeric({ min: 5, max: 10000 }).withMessage('price must be a number'),
    check('images')
        .isArray({ min: 1, max: 5 })
        .withMessage('imges url must be included')
        .custom((value, { req }) => {
            value.forEach((imageUrl, index) => {
                // Check if each element is a URL
                if (!validator.isURL(imageUrl)) {
                    throw new Error(`Element at index ${index} in "images" is not a valid URL.`);
                }
            });
            return true; // Return true to indicate successful validation
        }),
    check('category').isLength({ min: 3, max: 15 }).withMessage('category must be between 3-15'),
    check('quantity')
        .isNumeric({ min: 1, max: 10000 })
        .withMessage('quantity must be a number and between 1-10000'),
    // i have to have add some strict validation there but for now it skipped
    check('sold')
        .isNumeric({ min: 1, max: 10000 })
        .withMessage('sold must be a number and between 1-10000'),
    check('brand')
        .isAlpha()
        .isLength({ min: 3, max: 10 })
        .withMessage('brand length must be between 3-10'),
    check('sizes')
        .isAlpha()
        .isLength({ min: 1, max: 3 })
        .isIn(['XS', 'S', 'M', 'L', 'XL', 'XXL'])
        .withMessage("The Size field must be one of this 'XS', 'S', 'M', 'L', 'XL', 'XXL'"),
    check('color')
        .isAlpha()
        .isLength({ min: 3, max: 10 })
        .withMessage('color length must be between 3-10'),
    // reviews must be validated strictly
    check('reviews').isArray().withMessage('reviews must be an array'),
];

export const validateProduct = (req, res, next) => {
    const result = validationResult(req);
    console.log(result);
    if (!result.isEmpty()) {
        return res.status(400).json({
            message: 'validation error',
            errors: result.array(),
            status: 400,
        });
    }
    return next();
};
