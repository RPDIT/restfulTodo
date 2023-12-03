import chai from "chai";
import chaiHttp from "chai-http";
import server from "../index.js";
import {faker} from "@faker-js/faker";

const should = chai.should();
chai.use(chaiHttp);

describe ( "Testing the todo API", () => {
    describe ("Get :/", () => {
        it ("It should return an array of todos", () => {
            chai.request(server)
            .get("/api/v1")
            .end((err, res) => {
                console.log(res.body);
                            });
        }); 
    });
    describe ("POST :/", () => {
        it ("It should return a new todo", () => {
            chai.request(server)
            .post("/api/v1/creation")
            .set("content-type", "application/json")
            .send({
                "name": faker.word.verb() + " " + faker.word.noun()
            })
            .end((err, res) => {
                console.log(res.body);
              //  res.body.should.be.a('object');
            });
        }); 
    });
    describe ("Get :/:id", () => {
        it ("It should return a specific todo", () => {
            chai.request(server)
            .get("/api/v1")
            .end(() => {});
        }); 
    });
    describe ("Update :/:id", () => {
        it ("It should retur a todo with an updated name", () => {
            chai.request(server)
            .get("/api/v1")
            .end(() => {});
        }); 
    });
    describe ("Update :/:id", () => {
        it ("It should return a todo with an updated completion status", () => {
            chai.request(server)
            .get("/api/v1")
            .end(() => {});
        }); 
    });
    describe ("Delete :/:id", () => {
        it ("It should return string", () => {
            let delete_id = 1
            chai.request(server)
            .delete("/api/v1/deletion/"+ delete_id)
            .end((err, res) => {
                console.log(res.body);
  //              res.body.should.be.a('string');
            });
        }); 
    });
}); 
