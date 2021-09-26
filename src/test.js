
//CONNECT TO CONTRACT
const contract_yieldBalancerBot = artifacts.require('./contracts/YieldBalancerBot');

//is this  how to add the contract??
const contract_aavePool = artifacs.require('./contracts/');

//ADD CHAI
require('chai')
	.use(require('chai-as-promised'))
	.should()

//DEPLOYER
contract('YieldBalancerBot', ([deployer, contractAccount]) => {
	const contractAccount

	beforeEach(async () => {
		YieldBalancerBot = await contract_yieldBalancerBot.new(contractAccount)
	})
})


//CHAI TEST contractAccount
describe('deployment', ()=> {
	it('tracks the contract account', async () => {
		const result = await YieldBalancerBot.contractAccount()
		result.should.equal(contractAccount)
	})
})

//CHAI TEST deposit()
describe('deposits', ()=> {
	describe('success', () => {
		it('tracks the deposit', async () => {

		})
	})
})


