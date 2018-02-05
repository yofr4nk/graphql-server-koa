const userDataMock = require('./userData.mock');
const { filter, map } = require('lodash');

const getUser = (id) => {
    const users = userDataMock.User;
    return (id) ? getUserById(id, users) : users;
}

const getUserById = (id, users) => {
    const userFilter = filter(users, { id });
	return userFilter;
}

module.exports = {
    getUser,
    getUserById
}