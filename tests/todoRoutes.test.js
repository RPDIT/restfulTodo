import chai from "chai";
import chaiHttp from "chai-http";
import server from "../index.js";
import {faker} from "@faker-js/faker";

const should = chai.should();
chai.use(chaiHttp);

describe ( "Testing the todo API", () => {
    let TODO_LIST, REQUEST_TODO;
    describe ("Get :/", () => {
        it ("It should return an array of todos", () => {
            chai.request(server)
            .get("/api/v1")
            .end((err, res) => {
                res.body.should.be.a("array");
                TODO_LIST = res.body;
                REQUEST_TODO = TODO_LIST[0];
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
                res.body.should.be.a('array');
                res.body[0].should.be.a('object');
            });
        }); 
    });
    describe ("Get :/:id", () => {
        it ("It should return a single todo", () => {
            chai.request(server)
            .get("/api/v1/" + REQUEST_TODO.id)
            .end((err, res) => {
                res.body.should.be.a("array");
                res.body[0].should.be.a("object");
            });
        }); 
    });
    describe ("POST /:id/name", () => {
        it ("It should retur a todo with an updated name", () => {
            chai.request(server)
            .get("/api/v1/" + REQUEST_TODO.id + "/name")
            .set("content-type", "application/json")
            .send({
                "name": faker.word.verb() + " " + faker.word.noun()
            })
            .end((err, res) => {
                res.body.should.be.a('object');
            });
        }); 
    });
    describe ("GET /:id/status", () => {
        it ("It should return a todo with an updated completion status", () => {
            chai.request(server)
            .get("/api/v1/" + REQUEST_TODO.id + "/status")
            .end((err, res) => {
                res.body.should.be.a('array');
                res.body[0].should.be.a('object');
            });
        }); 
    });
    describe ("Delete :/:id", () => {
        it ("It should return string", () => {
            let delete_id = 9 
            chai.request(server)
            .delete("/api/v1/deletion/"+ delete_id)
            .end((err, res) => {
                res.body.should.be.a('object');
            });
        }); 
    });
}); 
