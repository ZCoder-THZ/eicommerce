const prisma = require("../../config/db.config");

exports.getUsers = async (req, res) => {
	try {
		const users = await prisma.user.findMany();
		if (users) {
			return res.json(users);
		} else {
			return res.send("No User Found!");
		}
	} catch (error) {
		return res.send(error);
	}
};

exports.createUser = async (req, res) => {
	try {
		const { full_name, email, password, phone } = req.body;

		// Create the product in the database
		const data = await prisma.user.create({
			data: { full_name, email, password, phone },
		});
		return res.json(data);
	} catch (error) {
		return res.send(error);
	}
};

exports.updateUser = async (req, res) => {
	try {
		const id = req.params.id * 1;

		// Create the product in the database
		const update = await prisma.user.update({
			where: {
				id,
			},
			data: req.body,
		});
		return res.json(update);
	} catch (error) {
		return res.send(error);
	}
};

exports.deleteUser = async (req, res) => {
	try {
		const id = req.params.id * 1;

		const deleted = await prisma.user.delete({
			where: {
				id,
			},
		});
		return res.json(deleted);
	} catch (error) {
		return res.send(error);
	}
};
