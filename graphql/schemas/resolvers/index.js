const User = require('./user.js');
const resolvers = {
	Query: {
		user: User
	}
};
module.exports = resolvers;