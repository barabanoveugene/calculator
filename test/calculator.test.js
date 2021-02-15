import { Calculator } from '../src/calculator.js'

describe('calculator', function () {
  it('calculations done correctly', function () {
    chai.expect(Calculator().evaluate('2 + 2 * 2')).to.equal(6)
  }),
  it('calculations done correctly', function () {
    chai.expect(Calculator().evaluate('(2 + 2) * 2')).to.equal(8)
  }),
  it('calculations done correctly', function () {
    chai.expect(Calculator().evaluate('(8 - 2) / 3')).to.equal(2)
  }),
  it('calculations done correctly', function () {
    chai.expect(Calculator().evaluate('3 *3 ** 3 * 2')).to.equal(162)
  })
})
