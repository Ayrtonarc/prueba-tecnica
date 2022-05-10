const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Episode {
		id: ID!
		name: String!
		air_date: String!
	}
	type Character {
		id: ID!
		name: String!
		status: String!
		species: String!
		type: String!
		gender: String!
	}

	 type Query {
		
		getAllCharacteresQuery: [Character!]!
		getAllEpisodesQuery: [Episode!]!
		getEpsodesByNameQuery (name: String!): [Episode]
		getCharactersByNameQuery(name: String!): [Character]
			
	 }
`

module.exports = { typeDefs };

