// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const server = require('../index')
// const should = chai.should()
// const expect = chai.expect
// const db = require('../db')
// const config = require('../config')
//
// chai.use(chaiHttp)
//
// let loginDetails = {
//   'email': 'test1@test.com',
//   'password': 'password'
// }
//
// let registerDetails = {
//   'Email': 'admintestpilot@admintestpilot.com',
//   'Password': 'password',
//   'Kind': 'Admin',
//   'AdminPassword':`${config.adminPassword}`
// }
// // /**
// // * Test the following in on scoop:
// // * - Create an account, login with details, and check if token comes
// // */
//
// describe('Create Admin account, create mediator, then remove mediator', () => {
//   beforeEach((done) => {
//     // Reset user mode before each test
//     const text = `DELETE FROM "User"."User"
//     WHERE "Email"='${registerDetails.Email}' RETURNING *;`
//     db.query(text, (err, response) => {
//       if (err) {
//         console.log(err)
//       }
//       if (response.rowCount === 0) {
//         console.log({ message: 'no entry to be deleted found' })
//       }
//       // console.log({ message: 'record deleted' })
//       done()
//     })
//   })
//
//   describe('/POST Register', () => {
//     it('it should Register, Login, and check token', (done) => {
//       chai.request(server)
//       .post('/register')
//       .set('Content-Type', 'application/json')
//       .send(registerDetails) // this is like sending $http.post or this.http.post in Angular
//       .end((err, res) => { // when we get a response from the endpoint
//         // console.log(res.body.response.rows[0])
//         // in other words,
//         // the res object should have a status of 200
//         res.should.have.status(200)
//         // the property, res.body.state, we expect it to be true.
//
//         expect(res.body.message).to.equal('record inserted')
//
//         // follow up with login
//         chai.request(server)
//         .post('/login')
//         .set('Content-Type', 'application/json')
//         .send(loginDetails)
//         .end((err, res) => {
//           res.should.have.status(200)
//           let id = res.body.user.Id
//           res.body.should.have.property('token')
//
//           let token = res.body.token
//           // follow up with creating mediator
//           chai.request(server)
//           .post('/login')
//           .set('Content-Type', 'application/json')
//           .send(loginDetails)
//           .end((err, res) => {
//             res.should.have.status(200)
//             let id = res.body.user.Id
//             res.body.should.have.property('token')
//
//             let token = res.body.token
//           // follow up with requesting user protected page
//           chai.request(server)
//           .get('/user/mediator/' + id)
//           // we set the auth header with our token
//           .set('Authorization', token)
//           .set('Content-Type', 'application/json')
//           .end((err, res) => {
//             res.should.have.status(200)
//             // console.log(res.body)
//             // expect(res.body.Kind).to.be.true;
//             res.body.should.be.an('object')
//
//             done() // Don't forget the done callback to indicate we're done!
//           })
//         })
//
//       })
//     })
//   })
// })
