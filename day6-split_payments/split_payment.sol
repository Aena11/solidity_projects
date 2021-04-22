pragma solidity ^0.5.0;

contract split_payment{
    address public owner;
    
    constructor(address _owner) public{
        owner = _owner;
    }
    
    function send(address payable[] memory to,uint[] memory amount)
    payable
    public
    onlyowner
    {
        require(to.length == amount.length,'to and amount arrays length should be equal');
        for(uint i=0;i<to.length;i++){
            to[i].transfer(amount[i]);
        }
    }
    modifier onlyowner(){
        require(msg.sender == owner,'only owner can do this');
        _;
    }
}