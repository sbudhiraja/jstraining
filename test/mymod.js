var request = require('request');
var chai = require('chai');

module.exports = {
    makeRequest: (url, expectedStatusCode) => {
        request(url, (error, response, body) => {
            chai.assert.equal(response.statusCode, expectedStatusCode);
        });
    }
};
