// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TestNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    uint256 private totalSupplyVariable;
    Counters.Counter private _tokenIdCounter;

    constructor(
        string memory name,
        string memory tag,
        uint256 initialSupply
    ) ERC721(name, tag) {
        totalSupplyVariable = initialSupply;
    }

    function safeMint(address to, string memory uri) public {
        require(
            _tokenIdCounter.current() < totalSupplyVariable,
            "No more tokens available to mint"
        );

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256
    ) internal pure {
        require(
            from == address(0) || to == address(0),
            "Not allowed to transfer token"
        );
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
