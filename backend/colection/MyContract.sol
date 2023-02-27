// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
import "./nft.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Deployer {
    mapping(address => ERC721) userToContract;

    function Deploy(
        string memory name,
        string memory tag,
        uint256 initialSupply
    ) public {
        ERC721 test = new TestNFT(name, tag, initialSupply);
        userToContract[msg.sender] = test;
    }

    function getDeployedContractAddress() public view returns (ERC721) {
        return userToContract[msg.sender];
    }
}
