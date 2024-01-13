// productValidation.js
const { body, validationResult } = require('express-validator');

const productValidationRules = [
    body('product_name').notEmpty().withMessage('Product name is required'),
    body('price').isFloat().withMessage('Price must be a  number'),
    body('stock_quantity').isInt().withMessage('Stock quantity must be a valid integer'),
    body('description').notEmpty().withMessage('Description is required'),
    body('category_id').isInt().withMessage('Category ID must be a valid integer'),
];


module.exports = { productValidationRules };
