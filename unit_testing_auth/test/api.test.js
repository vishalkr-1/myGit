// var chai =require('chai')
// var expect=chai.expect
// var server=require('../index')
// let chai_http=require('chai-http')
// chai.use(chai_http)
// describe('task api',function(){
//     it('get user',function(done){
//         chai.request(server)
//         .get('/user')
//         .end((err,res)=>{
//             expect(res.status).to.be.equal(200)
//             done()
//         })
//     })
// })

(
    async()=>{
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js'); 
const { expect } = chai;

chai.use(chaiHttp);

describe('API Endpoints', function() {

    it('should get user information', function(done) {
        chai.request(server)
            .get('/user')
            .end((err, res) => {
                console.log(res)
                expect(res.status).to.be.equal(200);
                expect(res.body).to.be.an('object'); 
                done();
            });
    });

    it('should handle sign up', function(done) {
        chai.request(server)
            .post('/user/signup') 
            .send({
                username: 'testuser',
                password: 'password123'
            })
            .end((err, res) => {
                expect(res.status).to.be.equal(201); 
                expect(res.body).to.have.property('message'); 
                done();
            });
    });

    it('should upload a file', function(done) {
        chai.request(server)
            .post('/file/upload')
            .attach('file', 'path/to/file') 
            .end((err, res) => {
                expect(res.status).to.be.equal(200); 
                expect(res.body).to.have.property('filename'); 
                done();
            });
    });

    it('should soft delete a user', function(done) {
        chai.request(server)
            .delete('/user/softdelete/12345') 
            .end((err, res) => {
                expect(res.status).to.be.equal(200); 
                expect(res.body).to.have.property('message'); 
                done();
            });
    });

    it('should restore a soft deleted user', function(done) {
        chai.request(server)
            .post('/regain/12345') 
            .end((err, res) => {
                expect(res.status).to.be.equal(200); 
                expect(res.body).to.have.property('message'); 
                done();
            });
    });

    
});

    }
)()