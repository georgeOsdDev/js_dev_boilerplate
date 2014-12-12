// For command line test
if (typeof module !== "undefined" && module.exports) {
  /*jshint -W079 */
  var chai = require("chai");
  var expect = chai.expect;
  var chaiAsPromised = require("chai-as-promised");
  var Promise = require("es6-promise").Promise;
  chai.use(chaiAsPromised);
  var MyLib = require("../index.js");
  /*jshint +W079 */
  this.MyLib = MyLib;
}

(function(global) {
  "use strict";

  describe("Test for MyLib:", function() {
    describe("When something description:", function() {
      context("Given something description: ", function() {
        before(function(done) {
          done();
        });

        it("will be something result", function() {
          // global.MyLib.mehod();
          expect(true).to.be.equal(true);
        });
        it("will be something promise", function() {
          return expect(Promise.resolve(1)).to.be.eventually.equal(1);
        });
      });
    });
  });
})((typeof module !== "undefined" && module.exports) ? this : typeof window !== "undefined" ? window : this);