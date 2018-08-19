var mymod = require('./mymod.js').makeRequest;
var URL = "http://www.google.com";

mymod(URL, 200); //postive test
mymod(URL, 300); //negative test - will throw assertion error