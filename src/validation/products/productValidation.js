// productValidation.js
const { body, validationResult } = require('express-validator');

const productValidationRules = [
    body('title').notEmpty().withMessage('Product name is required'),
    body('price').isFloat().withMessage('Price must be a  number').notEmpty().withMessage('price is required'),
    body('stock').isInt().withMessage('Stock quantity must be a valid integer'),
    body('description').notEmpty().withMessage('Description is required'),
    body('category_id').isInt().withMessage('Category ID must be a valid integer'),
];


module.exports = { productValidationRules };
