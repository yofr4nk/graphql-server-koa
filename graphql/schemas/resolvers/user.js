const { filter, map, has } = require('lodash');
const path = require('path');
const UserModel = require(path.resolve('models', 'user'));

const User = (_, args, ctx, info) => {
	return UserModel.getUser(args.id);
}

module.exports = User;