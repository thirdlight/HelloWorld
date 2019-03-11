pragma solidity ^0.4.24;
// complains about public and won't compile
// complains about view but will compile without
// complains about (var-type memory) and won't compile

contract HelloEthSalon {
  string message = "I know smart contract testing!!";
  
  constructor() public {
  }
  function GetMessage() public view returns (string memory) {
    return message;
  }
}
