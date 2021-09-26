pragma solidity >=0.4.22 <0.9.0;


//import "@openzeppelin/contracts/finance/PaymentSplitter.sol";

contract YieldBalancerBot {

	//This account will hold all the funds
	address public contractAccount;

	// modifier restricted() {
	// 	require(
	// 	msg.sender == owner,
	// 	"This function is restricted to the contract's owner"
	// 	);
	// };
	
	constructor( address _contractAccount ) public {
		contractAccount = _contractAccount;
	}
	
	function deposit() {
		//from = msg.sender;
	}

	function withdraw() {
		//to = msg.sender;
	}

	// function fill(pool) {
	// 	//to = pool;
	// }



}
