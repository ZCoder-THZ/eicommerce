// productController.js
const prisma = require("../../config/db.config");
const { getItem, deleteItem } = require("../utils/itemUtils");
const { retrivedSuccess, createSuccess } = require("../utils/jsonResponse");
const { validationResult } = require("express-validator");
const multer = require("multer");
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		// Specify the destination directory where uploaded files should be stored
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		// Specify how the filenames should be determined
		cb(null, Date.now() + "-" + file.originalname);
	},
});

const upload = multer({ storage: storage });
const getProducts = async (req, res) => {
	const data = await prisma.products.findMany({});
	return retrivedSuccess(res, 200, "Products", data);
};
const createProduct = async (req, res, next) => {
	try {
		const {
			title,
			price,
			stock,
			brand_name,
			gender,
			product_image,
			description,
			category_id,
		} = req.body;

		// Create the product in the database
		const data = await prisma.products.create({
			data: {
				title,
				price,
				stock,
				brand_name,
				gender,
				product_image,
				description,
				category_id,
			},
		});

		// Send a successful response with the created product data
		createSuccess(res, 200, "Product", data);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
			error: error.message,
		});
	}
};
const deleteProduct = async (req, res) => {
	deleteItem(req, res, prisma.products);
};
const getProduct = (req, res) => {
	getItem(req, res, prisma.products);
};

const updateProduct = async (req, res) => {
	const id = req.params.id * 1;
	const updatedProduct = await prisma.products.update({
		where: {
			id,
		},
		data: req.body,
	});
	return res.json(updatedProduct);
};
const uploadImage = (req, res) => {
	upload.single("file")(req, res, function (err) {
		if (err instanceof multer.MulterError) {
			// A Multer error occurred when uploading.
			return res.status(500).json({ error: err.message });
		} else if (err) {
			// An unknown error occurred.
			return res
				.status(500)
				.json({ error: "An unknown error occurred", err });
		}

		// File upload succeeded
		res.status(200).json({
			message: "File uploaded successfully",
			file: req.file,
		});
	});
};

module.exports = {
	getProducts,
	createProduct,
	deleteProduct,
	getProduct,
	uploadImage,
	updateProduct,
};
