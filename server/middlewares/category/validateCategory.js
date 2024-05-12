import { check, validationResult } from 'express-validator';

export const validatorChecks = [
    check('name')
        .isLength({ min: 5, max: 15 })
        .isAlpha()
        .trim()
        .withMessage('category length must be between 5-15'),
    check('description')
        .isLength({ min: 15, max: 50 })
        .trim()
        .withMessage('description length must be between 15-50'),
];

export const validateCategory = (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({
            message: 'validation error',
            errors: result.array(),
            status: 400,
        });
    }
    return next();
};
