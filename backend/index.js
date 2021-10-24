const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({ req }),
});

mongoose
	.connect(
		"mongodb://admin:admin@cluster0-shard-00-00.5csgs.mongodb.net:27017,cluster0-shard-00-01.5csgs.mongodb.net:27017,cluster0-shard-00-02.5csgs.mongodb.net:27017/astrangeradvice?ssl=true&replicaSet=atlas-6e51qf-shard-0&authSource=admin&retryWrites=true&w=majority",
		{
			useUnifiedTopology: true,
			useCreateIndex: true,
			useNewUrlParser: true,
		}
	)
	.then(() => {
		console.log("mongo connected");
		return server.listen(process.env.PORT || 5000);
	})
	.then(() => console.log("Server Running"));
