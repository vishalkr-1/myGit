import { describe, it } from 'mocha';
import { myClass } from '../src/myClass.js';
import { expect } from 'chai';  // Use named import for chai's expect
import sinon from 'sinon/lib/sinon.js';
// import chai from 'chai';
// import chaiAsPromised from 'chai-as-promised';
// chai.use(chaiAsPromised);

const myObj = new myClass();

describe.skip("Test code", function() {
    it("test the add method", function() {
        expect(myObj.add(1, 2)).to.be.equals(3);
    });
    it("test the add method", function() {
        expect(myObj.add(11, 12)).to.be.equals(3);
    });
    it("spy the add method", function() {
        var spy=sinon.spy(myObj,"add")
        var args1=10
        var args2=20
        myObj.callAnotherFunction(args1,args2)
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(args1,args2)).to.be.true;
    });
    it("mock the add method", function() {
        var mock=sinon.mock(myObj)
        var expectation=mock.expects("sayHello")
        expectation.exactly(1)
        myObj.callAnotherFunction(10,20)
        mock.verify();
    });
});
// stub
describe.skip("Test code", function() {
    it("stub  the add method", function() {
        var stub=sinon.stub(myObj,"add")
        stub.withArgs(10,20).returns(100);
        expect(myObj.callAnotherFunction(10,20)).to.be.equal(1000)
    });
})

describe.skip("Test for promise", function() {
    it("promise  test case", function(done) {
        this.timeout(0)
        myObj.testPromise().then(function (result){
            expect(result).to.be.equal(6)
            expect(false).to.be.false;
            done();
        })
    });
})
describe.skip("Test for promise", function() {
    it("promise  test case", function() {
        this.timeout(0)
      return expect(myObj.testPromise()).to.eventually.equal(62)
    });
})
