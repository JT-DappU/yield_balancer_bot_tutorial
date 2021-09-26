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
	
	//contractAccount created upon deployment
	constructor( address _contractAccount ) public {
		contractAccount = _contractAccount;
	}

	//Track Balances
	mapping(address => uint256) public balanceOf;

	//ERC-20 Transfer From
	
	
	//Deposits
	function deposit(address _token, uint _amount) public {

		//All Deposits come into the contractAccount.
		transferFrom(address msg.sender, address contractAccount, uint256 _amount)
	}

	//Withdraw
	function withdraw() private {
		//ALL Withdraws are send to the msg.sender
		transferFrom(address contractAccount, address msg.sender, uint256 _amount)
	}

	//Fill Pool ???
	function fill(address _pool, uint _amount) {
		//Pools will be filled by contractAccount
		transferFrom(address contractAccount, address _pool, uint256 _amount)
	}

	//Drain Pool ???
	function drain(address _pool, uint _amount) {
		//Pools will be drained into contractAccount
		transferFrom(address _pool, address contractAccount, uint256 _amount)
	}



}
