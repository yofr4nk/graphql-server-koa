const path = require('path');
const userModel = require(path.resolve('models', 'user'));
const userDataMock = require(path.resolve('models', 'userData.mock'));
const {assert, sinon} = require('unit.js');

describe('Models queries resolve', () => {
    describe('user Models', () => {
        let userInputData;
        beforeEach(() => {
            userInputData = [
                {
                    "id": 1,
                    "firstName": "Jhon", 
                    "lastName": "Steward",
                    "email": "jsteward@email.com"
                },
                { 
                    "id": 2, 
                    "firstName": "Nathy", 
                    "lastName": "Jackson",
                    "email": "nathson@email.com"
                }
            ];
        });

        afterEach(() => {
            userInputData = null;
        });

        it('Should be able to get a list of users', () => {
            const users = userModel.getUser();
            assert.deepEqual(users, userDataMock.User);
        });

        it('Should be able to get an user by Id', () => {
            const users = userModel.getUser(1);
            assert.deepEqual(users, Array(userDataMock.User[0]));
        });

        it('Should be able to get an user when pass an id and users lists', () => {
            const users = userModel.getUserById(2, userInputData);
            assert.deepEqual(users, Array(userDataMock.User[1]));
        });
    });
});