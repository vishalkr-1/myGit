let chai, expect, chaiHttp, server;

before(async () => {
  chai = await import('chai');
  expect = chai.expect;
  chaiHttp = await import('chai-http');
  chai.use(chaiHttp.default); 
  server = await import('../index.js'); 
});

describe('API Endpoints', function() {
  it('should get user information', function(done) {
    chai.request(server.default) 
      .get('/user')
      .end((err, res) => {
        if (err) return done(err); 
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('object'); 
        done();
      });
  });

  it('should handle sign up', function(done) {
    chai.request(server.default)
      .post('/user/signup') 
      .send({
        username: 'testuser',
        password: 'password123'
      })
      .end((err, res) => {
        if (err) return done(err); 
        expect(res.status).to.be.equal(201); 
        expect(res.body).to.have.property('message'); 
        done();
      });
  });

  it('should upload a file', function(done) {
    chai.request(server.default)
      .post('/file/upload')
      .attach('file', '../uploads.js') // Ensure the file path is correct
      .end((err, res) => {
        if (err) return done(err); // Handle errors
        expect(res.status).to.be.equal(200); 
        expect(res.body).to.have.property('filename'); 
        done();
      });
  });

  it('should soft delete a user', function(done) {
    chai.request(server.default)
      .delete('/user/softdelete/12345') 
      .end((err, res) => {
        if (err) return done(err); // Handle errors
        expect(res.status).to.be.equal(200); 
        expect(res.body).to.have.property('message'); 
        done();
      });
  });

  it('should restore a soft deleted user', function(done) {
    chai.request(server.default)
      .post('/regain/12345') 
      .end((err, res) => {
        if (err) return done(err); // Handle errors
        expect(res.status).to.be.equal(200); 
        expect(res.body).to.have.property('message'); 
        done();
      });
  });
});



