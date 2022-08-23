import { assert } from "chai";
import chai from "chai"
import chaiHttp from "chai-http";
import { describe } from "mocha";
import db from "../db/db.js";

// import "../server.js"

chai.should();

chai.use(chaiHttp);

describe("Database MySQL", function() {
  
    it('db.connection.connect should return a connection object using default config.js credentials ', function(){
        var result = "FAIL!";
        db.connection.connect(function(err, result) {
            if(err){
               done(err);
               return;
            } else {
                console.log("SQL CONNECT SUCCESSFUL.");
                result = "SQL CONNECT SUCCESSFUL.";
                //console.log("Test succeeded but result should show fail");
            }
        });
        expect(result).to.equal("SQL CONNECT SUCCESSFUL.");
        done();
    });

    // it("Able to select", function() {
    //         let sql = `SELECT * FROM test_user`;
    //         let query = db.query(sql, (err, result) => {
    //             if(err) throw err;
    //             assert.exists(result, "Able to Get Data");
    //             db.end()
    //         })
    //   });

  });

//   describe("API Testing", () => {
//     describe("GET /users", () => {
//         it("It should GET all the users", (done) => {
//             chai.request(server)
//             .get("/users")
//             .end((err, response) => {
//                 response.should.have.status(200);
//             })
//         })
//     })


//     //GET
//     //GET with id
//     //Post
//     //Update
//     //delete
//   })