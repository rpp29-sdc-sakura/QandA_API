const helpers = require('../server/helpers.js');
const dummyData = require('./dummyData.js');
const chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const should = chai.should();

describe('Server Helpers', () => {

  it('yields a random integer to use as an id', (done) => {
    const randomNum = helpers.generateRandomInt();
    const timeStamp = new Date().getTime();
    expect(randomNum).to.be.greaterThan(parseInt(timeStamp + '' + 7000000));
    expect(randomNum).to.be.lessThan(parseInt(timeStamp + '' + 14000000));
    done();
  });

  it('correctly formats a question and its answers', (done) => {
    const formatQuestion = helpers.formatQuestions(dummyData.questions)

    expect(formatQuestion).to.eql(dummyData.correctQuestionsFormat)
    done();
  });

  it('correctly formats the results of a database query', (done) => {
    helpers.formatData(dummyData.data).should.eventually.eql(dummyData.correctDataFormat).notify(done);
  });

});