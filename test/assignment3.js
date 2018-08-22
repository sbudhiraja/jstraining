var request = require('request');
var chai = require('chai');
var lodash = require('lodash');
var res, users, obj;

before(function(done) {
	request("https://jsonplaceholder.typicode.com/users", (error, response, body) => {
    res = response;
    users = response.body;
    obj = JSON.parse(users);
    done();
  });
}),

describe('Testing jsonplaceholder', () => {
  it('should return 200', () => {
    chai.assert.equal(res.statusCode, 200);
  });

  it('should return users', () => {
    
  });
});
