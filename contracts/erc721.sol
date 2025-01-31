// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ArtCollectibles is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    event NFTMinted(address recipient, uint256 tokenId, string tokenURI);
    mapping(string => bool) private _usedTokenURIs;

    constructor(
        address initialOwner
    ) ERC721("ArtCollectibles", "ART") Ownable(initialOwner) {
        tokenCounter = 0;
    }

    function mintNFT(
        address recipient,
        string memory tokenURI
    ) public returns (uint256) {
        require(!_usedTokenURIs[tokenURI], "Token URI already used");

        uint256 newTokenId = tokenCounter;
        _safeMint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _usedTokenURIs[tokenURI] = true;
        tokenCounter++;

        emit NFTMinted(recipient, newTokenId, tokenURI);
        return newTokenId;
    }

    function uintToString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + (value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}
