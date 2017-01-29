import chai from 'chai';
import chaiAP from 'chai-as-promised';
chai.use(chaiAP);
const expect = chai.expect;

import canary from '../app/canary';

describe("Canary Test", function(){
  it("establishes successful setup of mocha, chai, and babel", function(){
    expect(canary("cheep")).to.equal("CHEEP");
  })
})
