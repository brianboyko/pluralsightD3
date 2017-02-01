import chai from 'chai';
import chaiAP from 'chai-as-promised';
chai.use(chaiAP);
const expect = chai.expect;

import { getAusTaxRateAUD, getUSTaxRateUSD, getRate} from '../../app/util/currency';

describe('currency', function() {
  describe('getAusTaxRateAUD', function() {
    it('gets the right answer for 10000', function() {
      expect(getAusTaxRateAUD(10000)).to.equal(0);
    })
    it('gets the right answer for 20000', function() {
      expect(getAusTaxRateAUD(20000)).to.equal(342);
    })
    it('gets the right answer for 40000', function() {
      expect(getAusTaxRateAUD(40000)).to.equal(4547);
    })
    it('gets the right answer for 80000', function() {
      expect(getAusTaxRateAUD(80000)).to.equal(17547);
    })
    it('gets the right answer for 160000', function() {
      expect(getAusTaxRateAUD(160000)).to.equal(46832);
    })
    it('gets the right answer for 320000', function() {
      expect(getAusTaxRateAUD(320000)).to.equal(117232);
    })
    it('gets the right answer for 640000', function() {
      expect(getAusTaxRateAUD(640000)).to.equal(261232);
    })
  })

  describe('getUSTaxRateUSD', function() {
    it('gets the right answer for 5000', function() {
      expect(getUSTaxRateUSD(5000)).to.equal(500);
    })
    it('gets the right answer for 10000', function() {
      expect(getUSTaxRateUSD(10000)).to.equal(1036.25);
    })
    it('gets the right answer for 20000', function() {
      expect(getUSTaxRateUSD(20000)).to.equal(2536.25);
    })
    it('gets the right answer for 40000', function() {
      expect(getUSTaxRateUSD(40000)).to.equal(5771.25);
    })
    it('gets the right answer for 80000', function() {
      expect(getUSTaxRateUSD(80000)).to.equal(15771.25);
    })
    it('gets the right answer for 160000', function() {
      expect(getUSTaxRateUSD(160000)).to.equal(37836.75);
    })
    it('gets the right answer for 320000', function() {
      expect(getUSTaxRateUSD(320000)).to.equal(89129.25);
    })
    it('gets the right answer for 415000', function() {
      expect(getUSTaxRateUSD(415000)).to.equal(120512.25);
    })
    it('gets the right answer for 640000', function() {
      expect(getUSTaxRateUSD(640000)).to.equal(209609.95);
    })
  })

  describe('getRate', function(){
    it('gets the USD to AUD exchange rate', function(done){
      expect(getRate({from: 'USD', to: 'AUD'})).to.eventually.be.a('number').notify(done); 
    })
    it('gets the AUD to USD exchange rate', function(done){
      expect(getRate({from: 'AUD', to: 'USD'})).to.eventually.be.a('number').notify(done);
    })
    it('works asynchronously', function(done){
      getRate({from: 'USD', to: 'AUD'})
        .then((rate) => console.log(`The rate is: ${rate}`))
        .catch((err) => console.log(`ERR: ${err}`))
        .then(() => done())
    })
  })


})