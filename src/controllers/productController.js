// productController.js
const prisma = require('../../config/db.config');
const { retrivedSuccess, createSuccess } = require('../utils/jsonResponse');
const { validationResult } = require('express-validator');


const getProducts = async (req, res) => {
    const data = await prisma.products.findMany({});
    return retrivedSuccess(res, 200, 'Products', data);
};

const createProduct = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // If validation passed, continue with the logic
        const { product_name, price, stock_quantity, description, category_id } = req.body;

        // Create the product in the database
        const data = await prisma.products.create({
            data: { product_name, price, stock_quantity, description, category_id },
        });

        // Send a successful response with the created product data
        createSuccess(res, 200, 'Product', data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
    }
};
const deleteProduct = async (req, res) => {
    const id = req.params.id * 1;
    const product = await prisma.products.findUnique({
        where: {
            id
        },
    });

    return res.status(200).json({ product })
    // return retrivedSuccess(res, 200, 'Products', data);

}


module.exports = { getProducts, createProduct, deleteProduct };
