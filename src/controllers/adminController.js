const prisma = require("../../config/db.config");

exports.getAdmin = async (req, res) => {
	const data = await prisma.admin.findMany();
	return res.json(data);
};

exports.createAdmin = async (req, res) => {
	const { name, email, password } = req.body;
	const createdAdmin = await prisma.admin.create({
		data: req.body,
	});
	return res.json(createdAdmin);
};

exports.updateAdmin = async (req, res) => {
	const { name, email, password } = req.body;
	const id = req.params.id * 1;
	const updatedAdmin = await prisma.admin.update({
		where: {
			id,
		},
		data: { name, password },
	});
	return res.json(updatedAdmin);
};
