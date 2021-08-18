const loginModerator = async (req, res) => {
	// * request body validation
	if (req.body) {
		const { username, password } = req.body;

		// * user inputs validation
		if (!username || !password) {
			return res.status(400).json({ message: "Please fill all the fields" });
		}

		try {
			// * checking for email existence
			const existingUser = await Moderator.findOne({ username: username });
			if (!existingUser) {
				return res.status(401).json({
					message: "Wrong username or password",
				});
			}

			let userRole;

			switch (username) {
				case username.includes("@admin"):
					userRole = "admin";
					break;
				case username.includes("@manager"):
					userRole = "manager";
					break;
				case username.includes("@deliverer"):
					userRole = "deliverer";
					break;
			}

			// * checking for password existence
			const isPasswordCorrect = await bcrypt.compare(
				password,
				existingUser.password
			);

			if (!isPasswordCorrect) {
				return res.status(401).json({
					message: "Wrong username or password",
				});
			}

			// * logging the user
			const token = jwt.sign(
				{ user: existingUser._id, type: userRole },
				process.env.JWT_SECRET
			);

			//* sending token as a cookie
			return res.cookie("token", token, { httpOnly: true }).send();
		} catch (err) {
			console.error(err.message);
			return res.status(500).send();
		}
	}

	return res.status(406).send();
};
