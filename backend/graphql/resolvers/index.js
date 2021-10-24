const pinResolvers = require("./pins");
const userResolvers = require("./users");

module.exports = {
	Query: {
		...pinResolvers.Query,
	},
	Mutation: {
		...userResolvers.Mutation,
		...pinResolvers.Mutation,
	},
};
