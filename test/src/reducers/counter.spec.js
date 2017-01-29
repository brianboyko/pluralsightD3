import chai from 'chai';
import chaiAP from 'chai-as-promised';
chai.use(chaiAP);
const expect = chai.expect;
import * as types from '../../../src/constants/index';

import counter from '../../../src/reducers/counter';

describe("reducer: counter", function(){
  it('returns 0 as default', function(){
    expect(counter()).to.equal(0);
  })
  it('increments from default', function(){
    expect(counter(undefined, {type: types.INCREMENT, value: 7})).to.equal(7);
  })
  it('increments from existing', function(){
    expect(counter(11, {type: types.INCREMENT, value: 9})).to.equal(20);
  })
  it('doubles', function(){
    expect(counter(11, {type: types.DOUBLE})).to.equal(22);
  })
  it('clears', function(){
    expect(counter(11, {type: types.CLEAR})).to.equal(0);
  })
})
