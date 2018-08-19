var request = require('request');
var chai = require('chai');

describe('Testing google.com', () => {
    it('should return 200', (done) => {
	    request("http://www.google.com", (error, response, body) => {
		    chai.assert.equal(response.statusCode, 200);
		    done();
		  });
    });
});