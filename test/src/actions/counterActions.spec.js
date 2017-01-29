import chai from 'chai';
import chaiAP from 'chai-as-promised';
chai.use(chaiAP);
const expect = chai.expect;
import * as types from '../../../src/constants/index';

import {incrementCounter, doubleCounter, clearCounter} from '../../../src/actions/counterActions';

describe("counterActions", function(){
  describe("incrementCounter", function(){
    it("creates an action to increment the counter", function(){
      expect(incrementCounter(5)).to.eql({
        type: types.INCREMENT,
        value: 5,
      })
    })
  })
  describe("doubleCounter", function(){
    it("creates an action to double the counter", function(){
      expect(doubleCounter()).to.eql({
        type: types.DOUBLE,
      })
    })
  })
  describe("incrementCounter", function(){
    it("creates an action to clear the counter", function(){
      expect(clearCounter()).to.eql({
        type: types.CLEAR,
      })
    })
  })
})
