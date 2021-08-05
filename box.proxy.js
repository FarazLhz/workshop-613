// test/Box.proxy.sol
// Load dependencies

const { expect } = require('chai')


let Box
let box

//start test block
describe('Box (proxy)', function() {
  beforeEach(async function() {
    Box = await ethers.getContractFactory("Box")
    box = await upgrades.deployProxy(Box, [42], { initializer: 'store' })
  })

  //Test case
  it('retrieve returns a value previously initialized',async function() {

    expect((await box.retrieve()).toString()).to.equal('42')
  })
})