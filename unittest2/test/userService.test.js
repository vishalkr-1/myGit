import { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import { fetchUserData } from '../userService';


describe('UserService', function() {
  let axiosStub;

  before(function() {
    axiosStub = sinon.stub(axios, 'get');
  });

  after(function() {
    axiosStub.restore();
  });

  beforeEach(function() {
    axiosStub.reset();
  });

  it('should return user data for a valid userId', async function() {
    const fakeData = { id: 1, name: 'John Doe' };
    axiosStub.resolves({ data: fakeData });

    const result = await fetchUserData(1);

    expect(axiosStub.calledOnceWithExactly('https://jsonplaceholder.typicode.com/users/1')).to.be.true;
    expect(result).to.deep.equal(fakeData);
  });

  it('should throw an error for invalid userId', async function() {
    const error = new Error('User not found');
    axiosStub.rejects(error);

    try {
      await fetchUserData(999);
    } catch (err) {
      expect(err).to.equal(error);
    }
  });
});
