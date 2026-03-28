// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title NelHarkNFT42
 * @dev ERC721 NFT Contract with metadata URI storage:
 * - Mint NFTs with custom metadata URIs
 * - Store and retrieve token URIs
 * - Only owner can mint
 * - View owner of token via ownerOf()
 */
contract NelHarkNFT42 is ERC721, ERC721URIStorage, Ownable {
    
    // Token ID counter
    uint256 private tokenIdCounter;

    /**
     * @dev Initialize the NFT contract
     */
    constructor() ERC721("NelHarkNFT42", "NH42NFT") Ownable(msg.sender) {
        tokenIdCounter = 0;
    }

    /**
     * @dev Mint a new NFT with metadata URI (only owner)
     * @param to Address to mint the NFT to
     * @param nftTokenURI IPFS URI pointing to metadata
     * @return tokenId The ID of the newly minted token
     */
    function mintNFT(address to, string memory nftTokenURI) external onlyOwner returns (uint256) {
        require(to != address(0), "Invalid address");
        require(bytes(nftTokenURI).length > 0, "Token URI cannot be empty");

        uint256 tokenId = tokenIdCounter;
        tokenIdCounter++;

        _safeMint(to, tokenId);
        _setTokenURI(tokenId, nftTokenURI);

        return tokenId;
    }

    /**
     * @dev Get the URI of a token
     * @param tokenId Token ID
     * @return uri Metadata URI of the token
     */
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    /**
     * @dev Get current token ID counter
     * @return Current token ID counter
     */
    function getTokenIdCounter() external view returns (uint256) {
        return tokenIdCounter;
    }

    // Required override for supportsInterface
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    // Required override for _update
    function _update(address to, uint256 tokenId, address auth) internal override(ERC721) returns (address) {
        return super._update(to, tokenId, auth);
    }

    // Required override for _increaseBalance
    function _increaseBalance(address account, uint128 value) internal override(ERC721) {
        super._increaseBalance(account, value);
    }
}
