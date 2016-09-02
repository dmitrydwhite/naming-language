var testLang = require('../lib/index.js');
var chai = require('chai');
var expect = chai.expect;

describe('NamingLanguage, generally', function () {
  it('should be defined', function () {
    expect(testLang).to.be.an('object');
  });

  describe('makeName', function () {
    var testLanguageObj;

    beforeEach(function () {
      testLanguageObj = testLang.makeRandomLanguage();
    });

    it('should be defined', function () {
      expect(testLang.makeName).to.be.a('function');
    });

    it('should execute without errors', function () {
      expect(testLang.makeName(testLanguageObj)).to.be.a('object');
    });
  });

  describe('makeRandomLanguage', function () {
    it('should be defined', function () {
      expect(testLang.makeRandomLanguage).to.be.a('function');
    });

    it('should return an object', function () {
      expect(testLang.makeRandomLanguage()).to.be.an('object');
    });
  });
});