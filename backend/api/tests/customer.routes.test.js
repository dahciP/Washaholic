const axios = require("axios");

describe("POST @ /customer endpoint", () => {
	it("should register a customer and and return type", async () => {
		try {
			const res = axios.post("http://localhost:5000/customers/register", {
				name: "Nikhil Milkhe",
				email: "nikhilmilkhe@gmail.com",
				password: "nikhil123",
				mobile: "0764343435",
				createdAt: new Date(),
				updatedAt: new Date(),
			});

			expect(res.status).toEqual(201);
		} catch (error) {
			console.log(error.response);
		}
	});
});

describe("GET @ /customers endpoint", () => {
	it("should return an customers array and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:5000/customers");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});
