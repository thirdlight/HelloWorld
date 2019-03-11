var HelloEthSalon = artifacts.require("./HelloEthSalon.sol");

contract("HelloEthSalon", function (accounts) {
  it("should return a correct string", async() => {
    const contract = await HelloEthSalon.deployed();
    const result = await contract.GetMessage.call();
    assert.isTrue(result === "I know smart contract testing!!");
  });
});