const { UserInputError } = require("apollo-server");
const Pin = require("../../models/Pin");
const checkAuth = require("../../utils/checkAuth");

module.exports = {
	Query: {
		async getPins() {
			try {
				const pins = await Pin.find();
				return pins;
			} catch (err) {
				throw new Error(err);
			}
		},

		async getPin(_, { pinId }) {
			try {
				const pin = Pin.findById(pinId);
				if (pin) return pin;
				else throw new Error("Pin Not found");
			} catch (err) {
				throw new Error(err);
			}
		},
	},

	Mutation: {
		async createPin(_, { name, phone, rating, desc, lat, long }, context) {
			if (name === "") {
				throw new UserInputError("Title Cannot be empty");
			}
			if (desc.trim() === "") {
				throw new UserInputError("Body cannot be empty");
			}
			const newPin = new Pin({
				name,
				phone,
				rating,
				desc,
				lat,
				long,
			});
			const pin = await newPin.save();

			return pin;
		},
	},
};
