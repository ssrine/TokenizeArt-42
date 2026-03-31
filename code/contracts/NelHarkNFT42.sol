// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title NelHarkNFT42
 * @dev ERC721 NFT contract with URI storage. Features: owner-gated minting, metadata URIs, token ownership tracking.
 */
contract NelHarkNFT42 is ERC721, ERC721URIStorage, Ownable {
    
    // Token ID counter
    uint256 private tokenIdCounter;

    /// @dev Initialize contract with token name and symbol
    constructor() ERC721("NelHarkNFT42", "NH42NFT") Ownable(msg.sender) {
        tokenIdCounter = 0;
    }

    /// @dev Mint NFT with metadata URI. Owner-only.
    /// @param to Recipient address
    /// @param nftTokenURI Metadata URI (IPFS)
    function mintNFT(address to, string memory nftTokenURI) external onlyOwner returns (uint256) {
        require(to != address(0), "Invalid address");
        require(bytes(nftTokenURI).length > 0, "Token URI cannot be empty");

        uint256 tokenId = tokenIdCounter;
        tokenIdCounter++;

        _safeMint(to, tokenId);
        _setTokenURI(tokenId, nftTokenURI);

        return tokenId;
    }

    /// @dev Return metadata URI for token
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    /// @dev Return total tokens minted
    function getTokenIdCounter() external view returns (uint256) {
        return tokenIdCounter;
    }

    /// @dev Support interface detection (ERC721 + URIStorage)
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    /// @dev Internal token update override
    function _update(address to, uint256 tokenId, address auth) internal override(ERC721) returns (address) {
        return super._update(to, tokenId, auth);
    }

    /// @dev Internal balance update override
    function _increaseBalance(address account, uint128 value) internal override(ERC721) {
        super._increaseBalance(account, value);
    }
}
