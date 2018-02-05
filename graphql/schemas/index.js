// schema.js
const { makeExecutableSchema } = require('graphql-tools');
const User = require('./user.js');
const resolvers = require('./resolvers/index.js');
const RootQuery = `
  type Query {
    user(id: Int): [User]
  }
`;
const SchemaDefinition = `
  schema {
    query: Query
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, User],
  resolvers
});