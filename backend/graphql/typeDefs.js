const { gql } = require("apollo-server");

module.exports = gql`
	type User {
		id: ID!
		username: String!
		email: String!
		token: String!
		createdAt: String!
	}
	type Pin {
		id: ID!
		name: String!
		phone: String!
		rating: Int!
		desc: String!
		lat: Float!
		long: Float!
	}
	input RegisterInput {
		username: String!
		password: String!
		confirmPassword: String!
		email: String!
	}
	type Query {
		getPins: [Pin]
		getPin(pinId: ID!): Pin
	}
	type Mutation {
		register(registerInput: RegisterInput): User!
		login(username: String!, password: String!): User!
		createPin(
			name: String!
			phone: String!
			rating: Int!
			desc: String!
			lat: Float!
			long: Float!
		): Pin!
	}
`;
