pragma solidity >=0.4.22 <0.9.0;

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}
//import "@openzeppelin/contracts/finance/PaymentSplitter.sol";
//import "@openzeppelin/contracts/??/OnlyOwner.sol";


contract YieldBalancerBot {

	//This account will hold all the funds
	const contractAccount = address public owner;
	address public contractAccount = address(this);
	address public DAI = "";

	// modifier restricted() {
	// 	require(
	// 	msg.sender == owner,
	// 	"This function is restricted to the contract's owner"
	// 	);
	// };
	
	//Track Balances
	mapping(address => uint256) public balanceOf;

	//EVENTS
	event Deposit( address indexed from, address indexed to, uint256  indexed amount );
	event Withdraw( address indexed from, address indexed to, uint256 indexed amount );
	event Fill( string indexed name, address indexed from, uint256 indexed amount );
	event Drain( string indexed name, address indexed to, uint256 indexed amount ); 
	
	//Deposits
	function deposit(address _token, uint _amount) public {
		uint amount = IERC20(DAI).balanceOf(msg.sender);
		IERC20(DAI).transferFrom(address msg.sender, address contractAccount, uint256 amount)
		emit Deposit(msg.sender, contractAccount, amount);
	}

	//Withdraw
	function withdraw() public onlyOwner {
		uint amount = IERC20(DAI).balanceOf(contractAccount);
		IERC20(DAI).transferFrom(address contractAccount, address msg.sender, uint256 amount);
		emit Withdraw(msg.sender, contractAccount, amount);
	}

	//Fill Pool ???
	function fill(address _pool, uint _amount, string _name ) {
		uint amount = IERC20(DAI).balanceOf(contractAccount);
		IERC20(DAI).transferFrom(address contractAccount, address _pool, uint256 _amount)
		emit Fill(_name, contractAccount, _amount);
	}

	//Drain Pool ???
	function drain(address _pool, uint _amount, string _name ) {
		uint amount = IERC20(DAI).balanceOf(_pool); //WHAT? How does this work?
		IERC20(DAI).transferFrom(address _pool, address contractAccount, uint256 _amount)
		emit Drain(_name, contractAccount, _amount);
	}

}
