import { assert } from "chai";
import chai from "chai"
import chaiHttp from "chai-http";
import { describe } from "mocha";
import db from "../db/db.js";

// import "../server.js"

chai.should();

chai.use(chaiHttp);

describe("Database MySQL", function() {
  
    it("Check for connection", function() {
      assert.exists(db, `Connection established ${db.threadId}`)
    });

    it("Able to select", function() {
            let sql = `SELECT * FROM test_user`;
            let query = db.query(sql, (err, result) => {
                if(err) throw err;
                assert.exists(result, "Able to Get Data");
                db.end()
            })
      });

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