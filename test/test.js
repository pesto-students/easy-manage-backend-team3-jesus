var chai = require("chai"),
  expect = chai.expect,
  should = chai.should();
var request = require("request");
const { sequelize } = require("../models");


describe("Backend Deployment Check", function () {
  it("Base Url Content shoulbe equal to 'Hello Jym Space!'", function (done) {
    request(
      "https://jymspace-api.herokuapp.com/",
      function (error, response, body) {
        expect(body).to.equal("Hello Jym Space!");
        done();
      }
    );
  });
});

describe("Test DB connection", function () {
  it("Database authentication", function (done) {
    sequelize
      .authenticate()
      .then(function () {
        sequelize.close();
        done();
      })
      .catch(function (err) {
        console.log("SOMETHING DONE GOOFED", err);
        done();
      });
  });
});

describe("API Tests without JWT AUTH", function () {
  it("Super Admin cannot GET All Gym Data if not authorized", function (done) {
    request(
      "https://jymspace-api.herokuapp.com/superadmin/gym/allaccounts",
      function (error, response, body) {
        const obj = JSON.parse(body);
        expect(obj.message).to.equal("Auth Failed");
        done();
      }
    );
  });

  it("Super Admin cannot GET All Roles Data if not authorized", function (done) {
    request(
      "https://jymspace-api.herokuapp.com/superadmin/roles/allroles",
      function (error, response, body) {
        var obj = JSON.parse(body);
        expect(obj.message).to.equal("Auth Failed");
        done();
      }
    );
  });

  it("Super Admin cannot GET All Jym Plans Data if not authorized", function (done) {
    request(
      "https://jymspace-api.herokuapp.com/superadmin/jymplans/allplans",
      function (error, response, body) {
        var obj = JSON.parse(body);
        expect(obj.message).to.equal("Auth Failed");
        done();
      }
    );
  });

  it("Gyms cannot GET Gym Plans Data if not authorized", function (done) {
    request(
      "https://jymspace-api.herokuapp.com/gym/allPlans",
      function (error, response, body) {
        var obj = JSON.parse(body);
        expect(obj.message).to.equal("Auth Failed");
        done();
      }
    );
  });
});

// describe("Incorrect Credentials Login Test", function () {
//   it("Super Admin Login Test!'", function (done) {
//     request(
//       "https://jymspace-api.herokuapp.com/",
//       function (error, response, body) {
//         expect(body).to.equal("Authentication Failed. User not Found!");
//         done();
//       }
//     );
//   });

//   it("Gym Login Test!'", function (done) {
    
//     let headersList = {
//         "Accept": "*/*",
//         "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//         "Content-Type": "application/json"
//        }
       
//        let bodyContent = JSON.stringify({
//                  "email": "fake@email.com",
//                  "password": "fake password"
//                });
       
//        let response =  fetch("https://jymspace-api.herokuapp.com/gym/login", { 
//          method: "POST",
//          body: bodyContent,
//          headers: headersList
//        });
       
//        let data =  response.json();
//        console.log(data);
   
//         expect(data.message).to.equal("Authentication Failed. User not Found!");
//         done();

//   });
// });
