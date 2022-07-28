const supertest = require("supertest");
const chai = require("chai");
const { reverseFunction } = require("../utils/utilsFunctions");
const expect = chai.expect;

const request = supertest('http://localhost:3001');

describe("GET /iecho", function () {
  it("Return status 200", async function () {
    let text = 'Reverse'
    const response = await request.get(`/iecho?text=${text}`);
    expect(response.status).to.equal(200);
  });
  it("Return reversed text", async function () {
    let text = 'Reverse'
    const response = await request.get(`/iecho?text=${text}`);
    let reversedText = reverseFunction(text);
    expect(response.body.text).to.equal(reversedText);
  });
  it("Return true if text is palindrome", async function () {
    let text = 'Rotator'
    const response = await request.get(`/iecho?text=${text}`);
    expect(response.body.palindrome).to.equal(true);
  });
  it("Return false if text is not palindrome", async function () {
    let text = 'Computer'
    const response = await request.get(`/iecho?text=${text}`);
    expect(response.body.palindrome).to.equal(false);
  });
});