const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			min: 3,
		},
		rating: {
			type: Number,
			required: true,
			min: 0,
			max: 5,
		},
		phone: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		lat: {
			type: Number,
			required: true,
		},
		long: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);
