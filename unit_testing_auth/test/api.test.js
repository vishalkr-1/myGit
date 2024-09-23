
// //   chai = await import('chai');
// //   expect = chai.expect;
// //   chaiHttp = await import('chai-http');
// //   chai.use(chaiHttp.default); 
// //   server = await import('../index.js'); 


// // describe('API Endpoints', function() {
// //   it('should get user information', function(done) {
// //     chai.request(server.default) 
// //       .get('/user')
// //       .end((err, res) => {
// //         if (err) return done(err); 
// //         expect(res.status).to.be.equal(200);
// //         expect(res.body).to.be.an('object'); 
// //         done();
// //       });
// //   });

// //   it('should handle sign up', function(done) {
// //     chai.request(server.default)
// //       .post('/user/signup') 
// //       .send({
// //         username: 'testuser',
// //         password: 'password123'
// //       })
// //       .end((err, res) => {
// //         if (err) return done(err); 
// //         expect(res.status).to.be.equal(201); 
// //         expect(res.body).to.have.property('message'); 
// //         done();
// //       });
// //   });

// //   it('should upload a file', function(done) {
// //     chai.request(server.default)
// //       .post('/file/upload')
// //       .attach('file', '../uploads.js') // Ensure the file path is correct
// //       .end((err, res) => {
// //         if (err) return done(err); // Handle errors
// //         expect(res.status).to.be.equal(200); 
// //         expect(res.body).to.have.property('filename'); 
// //         done();
// //       });
// //   });

// //   it('should soft delete a user', function(done) {
// //     chai.request(server.default)
// //       .delete('/user/softdelete/12345') 
// //       .end((err, res) => {
// //         if (err) return done(err); // Handle errors
// //         expect(res.status).to.be.equal(200); 
// //         expect(res.body).to.have.property('message'); 
// //         done();
// //       });
// //   });

// //   it('should restore a soft deleted user', function(done) {
// //     chai.request(server.default)
// //       .post('/regain/12345') 
// //       .end((err, res) => {
// //         if (err) return done(err); // Handle errors
// //         expect(res.status).to.be.equal(200); 
// //         expect(res.body).to.have.property('message'); 
// //         done();
// //       });
// //   });
// // });



// const request = require('supertest');
// const server = require('../index.js'); // Directly require the server at the top

// describe('API Endpoints', () => {

//   // it('should get user information', async () => {
//   //   const res = await request(server)
//   //     .post('/user'); // Send a GET request to the '/user' endpoint
    
//   //   expect(res.status).toBe(200); // Check if status code is 200
//   //   expect(res.body).toBeInstanceOf(Object); // Check if the response body is an object
//   // });

//   // it('should handle sign up', async () => {
//   //   const res = await request(server)
//   //     .post('/user/signup') // Send a POST request to the '/user/signup' endpoint
//   //     .send({
//   //       username: 'testuser',
//   //       password: 'password123',
//   //     }); // Send the request body with user credentials
    
//   //   expect(res.status).toBe(201); // Check if status code is 201
//   //   expect(res.body).toHaveProperty('message'); // Ensure the response body contains a 'message' property
//   // });

//   // it('should upload a file', async () => {
//   //   const res = await request(server)
//   //     .post('/file/upload') // Send a POST request to the '/file/upload' endpoint
//   //     .attach('file', '../uploads.js'); // Attach a file to upload (ensure the path is correct)

//   //   expect(res.status).toBe(200); // Check if status code is 200
//   //   expect(res.body).toHaveProperty('filename'); // Ensure the response body contains a 'filename' property
//   // });

//   // it('should soft delete a user', async () => {
//   //   const res = await request(server)
//   //     .delete('/user/softdelete/12345'); // Send a DELETE request to soft delete a user
    
//   //   expect(res.status).toBe(200); // Check if status code is 200
//   //   expect(res.body).toHaveProperty('message'); // Ensure the response body contains a 'message' property
//   // });

//   // it('should restore a soft deleted user', async () => {
//   //   const res = await request(server)
//   //     .post('/regain/12345'); // Send a POST request to restore a soft-deleted user
    
//   //   expect(res.status).toBe(200); // Check if status code is 200
//   //   expect(res.body).toHaveProperty('message'); // Ensure the response body contains a 'message' property
//   // });

//   it('should restore a soft deleted user', async () => {
//       const res = await request(server)
//         .get('/server'); // Send a POST request to restore a soft-deleted user
      
//       expect(res.status).toBe(200); // Check if status code is 200
//       expect(res.body).toHaveProperty('message'); // Ensure the response body contains a 'message' property
//     });

// });
