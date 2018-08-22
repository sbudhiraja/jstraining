var request = require('request');
var chai = require('chai');
var res, users, actualEmail;

before(function(done) {
	request("https://jsonplaceholder.typicode.com/users", (error, response, body) => {
    res = response;
    users = JSON.parse(response.body);
    done();
  });
}),

describe('Testing jsonplaceholder', () => {

  it('jsonplaceholder should return 200', (done) => {
    chai.assert.equal(res.statusCode, 200);
    done();
  });

  it('should verify email for username Samantha', (done) => {
    const expectedEmail = 'Nathan@yesenia.net';
    for (var i = users.length - 1; i >= 0; i--) {
      if(users[i].username === "Samantha") {
        actualEmail = users[i].email;
      }
    }
    chai.expect(actualEmail).to.equal(expectedEmail);
    done();
  });

});
