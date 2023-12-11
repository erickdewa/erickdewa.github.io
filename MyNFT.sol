// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract RandomDiamonds is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    bool private _holdMint = true;
    uint256 public _price = 0 ether;
    uint256 public _maxSupply = 2000;
    uint256 public _mintedCount = 0;
    uint256 public _maxMintPerWallet = 10;
    address public _addressReceiver;
    
    mapping(address => uint256) private _mintedCountByAddress;

    string private _baseJsonUrl = "https://erickdewa.github.io/Generate/Json/";

    constructor() ERC721("Miumicream", "MMI") Ownable(msg.sender) {
        _addressReceiver = msg.sender;
    }

    event NFTMinted(address indexed senderAddress, uint256 indexed newItemId);
    event MaxSupplyChanged(uint256 newMaxSupply);
    event PriceChanged(uint256 newPrice);
    event MaxMintPerWalletChanged(uint256 newMaxMintPerWallet);
    event AddressReceiverChanged(address newAddressReceiver);
    event EtherWithdrawn(address indexed owner, uint256 amount);
    event GetEther(uint256 amount);

    //********************************//
    //              Mint              //
    //********************************//
    function mint() public payable {
        require(!_holdMint, "Minting is currently on hold");
        require(msg.value >= _price, "Insufficient funds sent with the transaction");
        require(msg.value <= address(this).balance, "Insufficient funds in the contract");
        require(_mintedCountByAddress[msg.sender] < _maxMintPerWallet, "Exceeded maximum minting limit per wallet");
        require(_mintedCount < _maxSupply, "Max supply reached");

        _tokenIds.increment();
        _mintedCountByAddress[msg.sender]++;
        _mintedCount++;

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);

        // _setTokenURI(newItemId, string(abi.encodePacked(_baseJsonUrl, Strings.toString(newItemId))));
        _setTokenURI(newItemId, string(abi.encodePacked(_baseJsonUrl, Strings.toString(newItemId), ".json")));

        if(_price != 0){
            payable(_addressReceiver).transfer(msg.value);
        }

        emit NFTMinted(msg.sender, newItemId);
    }

    //********************************//
    //           Customable           //
    //********************************//
    function allowMint() external onlyOwner {
        _holdMint = false;
    }
    function holdMint() external onlyOwner {
        _holdMint = true;
    }
    function changeMaxSupply(uint256 newMaxSupply) external onlyOwner {
        require(newMaxSupply >= _mintedCount, "New max supply must be greater than or equal to the current total supply");
        _maxSupply = newMaxSupply;
        emit MaxSupplyChanged(newMaxSupply);
    }
    function changePrice(uint256 newPrice) external onlyOwner {
        price = newPrice;
        emit PriceChanged(newPrice);
    }
    function changeMaxMintPerWallet(uint256 newMaxMintPerWallet) external onlyOwner {
        _maxMintPerWallet = newMaxMintPerWallet;
        emit MaxMintPerWalletChanged(newMaxMintPerWallet);
    }
    function changeAddressReceiver(address receiver) external onlyOwner {
        _addressReceiver = receiver;
        emit AddressReceiverChanged(_addressReceiver);
    }

    //********************************//
    //             Getter             //
    //********************************//
    function totalSupply() public view returns (uint256) {
        return _maxSupply;
    }
    function minted() public view returns (uint256) {
        return _mintedCount;
    }
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        string memory baseURI = _baseJsonUrl;
        return string(abi.encodePacked(baseURI, Strings.toString(tokenId), ".json"));
    }
    function baseUri() public view returns (string memory) {
        return _baseJsonUrl;
    }
    function getPrice() public view returns (uint256) {
        return _price;
    }
    function getTokenIdsByAddress(address walletAddress) external view returns (uint256[] memory) {
        uint256[] memory tokenIds = new uint256[](_mintedCountByAddress[walletAddress]);

        uint256 currentIndex = 0;
        for (uint256 i = 1; i <= _tokenIds.current(); i++) {
            if (ownerOf(i) == walletAddress) {
                tokenIds[currentIndex] = i;
                currentIndex++;
            }
        }

        return tokenIds;
    }
}