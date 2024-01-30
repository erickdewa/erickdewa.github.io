// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    bool private _holdMintPublic = true;
    bool private _holdMintWhitelist = true;
    uint256 private _price = 0 ether;
    uint256 private _priceWhitelist = 0 ether;
    uint256 private _maxSupply = 10000;
    uint256 private _mintedCount = 0;
    uint256 private _maxMintOnTime = 2;
    uint256 private _maxMintPerWallet = 10;
    address private _addressReceiver;

    mapping(address => bool) private _whitelistAddress;
    mapping(address => uint256) private _mintedCountByAddress;

    string private _baseJsonUrl = "ipfs://QmReXuSbeGdTYSwKRRUtXp1hZdsgq24saCZ3QLnWBnT7iV/";

    constructor() ERC721("MyNFT", "MNFT") Ownable(msg.sender) payable {
        _addressReceiver = msg.sender;
    }

    event NFTMinted(address indexed senderAddress, uint256 indexed newItemId);
    event MaxSupplyChanged(uint256 newMaxSupply);
    event PriceChanged(uint256 newPrice);
    event MaxMintPerWalletChanged(uint256 newMaxMintPerWallet);
    event MaxMintOnTimeChanged(uint256 newMaxMintOnTime);
    event AddressReceiverChanged(address newAddressReceiver);
    event EtherWithdrawn(address indexed owner, uint256 amount);
    event GetEther(uint256 amount);

    //********************************//
    //              Mint              //
    //********************************//
    function mint() public payable {
        uint256 price = _price;

        // check on whitelist
        if(_whitelistAddress[msg.sender]){
            price = _priceWhitelist;
            
            require(!_holdMintWhitelist, "Minting Whitelist is currently on hold");
        } else {
            require(!_holdMintPublic, "Minting Public is currently on hold");
        }

        require(_mintedCountByAddress[msg.sender] < _maxMintPerWallet, "Exceeded maximum minting limit per wallet");
        require(_mintedCount < _maxSupply, "Max supply reached");
        require(msg.value >= price, "Insufficient funds sent with the transaction");
        require(msg.value <= address(this).balance, "Insufficient funds in the contract");

        _tokenIds.increment();
        _mintedCountByAddress[msg.sender]++;
        _mintedCount++;

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);

        _setTokenURI(newItemId, string(abi.encodePacked(_baseJsonUrl, Strings.toString(newItemId), ".json")));

        if(price != 0){
            payable(_addressReceiver).transfer(msg.value);
        }

        emit NFTMinted(msg.sender, newItemId);
    }

    function multiMint(uint256 amount) public payable {
        uint256 _totalPrice = amount * _price;

        // check on whitelist
        if(_whitelistAddress[msg.sender]){
            _totalPrice = amount * _priceWhitelist;

            require(!_holdMintWhitelist, "Minting Whitelist is currently on hold");
        } else {
            require(!_holdMintPublic, "Minting Public is currently on hold");
        }

        require(amount > 0, "Amount must be greater than zero");
        require(amount <= _maxMintOnTime, "Exceeded maximum minting limit per transaction");
        require(amount <= _maxMintPerWallet, "Exceeded maximum minting limit per wallet");
        require((_mintedCountByAddress[msg.sender] + amount) <= _maxMintPerWallet, "Exceeded maximum minting limit per wallet");
        require((_mintedCount + amount) <= _maxSupply, "Max supply reached");
        require(msg.value >= _totalPrice, "Insufficient funds sent with the transaction");
        require(msg.value <= address(this).balance, "Insufficient funds in the contract");

        for (uint256 i = 0; i < amount; i++) {
            _tokenIds.increment();
            _mintedCountByAddress[msg.sender]++;
            _mintedCount++;

            uint256 newItemId = _tokenIds.current();
            _mint(msg.sender, newItemId);

            _setTokenURI(newItemId, string(abi.encodePacked(_baseJsonUrl, Strings.toString(newItemId), ".json")));
        }

        if(_totalPrice != 0){
            payable(_addressReceiver).transfer(msg.value);
        }
    }

    //********************************//
    //           Customable           //
    //********************************//
    function allowMintPublic() external onlyOwner {
        _holdMintPublic = false;
    }
    function holdMintPublic() external onlyOwner {
        _holdMintPublic = true;
    }
    function allowMintWhitelist() external onlyOwner {
        _holdMintWhitelist = false;
    }
    function holdMintWhitelist() external onlyOwner {
        _holdMintWhitelist = true;
    }
    function changeMaxSupply(uint256 newMaxSupply) external onlyOwner {
        require(newMaxSupply >= _mintedCount, "New max supply must be greater than or equal to the current total supply");
        _maxSupply = newMaxSupply;
        emit MaxSupplyChanged(newMaxSupply);
    }
    function changePrice(uint256 newPrice) external onlyOwner {
        _price = newPrice;
        emit PriceChanged(newPrice);
    }
    function changePriceWhitelist(uint256 newPriceWhitelist) external onlyOwner {
        _priceWhitelist = newPriceWhitelist;
        emit PriceChanged(newPriceWhitelist);
    }
    function changeMaxMintOnTime(uint256 newMaxMintOnTime) external onlyOwner {
        _maxMintOnTime = newMaxMintOnTime;
        emit MaxMintOnTimeChanged(newMaxMintOnTime);
    }
    function changeMaxMintPerWallet(uint256 newMaxMintPerWallet) external onlyOwner {
        _maxMintPerWallet = newMaxMintPerWallet;
        emit MaxMintPerWalletChanged(newMaxMintPerWallet);
    }
    function changeAddressReceiver(address receiver) external onlyOwner {
        _addressReceiver = receiver;
        emit AddressReceiverChanged(_addressReceiver);
    }
    function changeBaseJsonUrl(string memory newBaseJsonUrl) external onlyOwner {
        _baseJsonUrl = newBaseJsonUrl;
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
    function getStatusHoldMintPublic() public view returns (uint256) {
        return _holdMintPublic ? 0 : 1;
    }
    function getStatusHoldMintWhitelist() public view returns (uint256) {
        return _holdMintWhitelist ? 0 : 1;
    }
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        if(_mintedCount < tokenId){
            return "";
        }

        string memory baseURI = _baseJsonUrl;
        return string(abi.encodePacked(baseURI, Strings.toString(tokenId), ".json"));
    }
    function baseUri() public view returns (string memory) {
        return _baseJsonUrl;
    }
    function getPrice() public view returns (uint256) {
        return _price;
    }
    function getPriceWhitelist() public view returns (uint256) {
        return _priceWhitelist;
    }
    function getMaxMintOnTime() public view returns (uint256) {
        return _maxMintOnTime;
    }
    function getMaxMintPerWallet() public view returns (uint256) {
        return _maxMintPerWallet;
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

    //********************************//
    //            Whitelist           //
    //********************************//
    function addToWhitelist(address[] calldata toAddAddresses) external onlyOwner{
        for (uint i = 0; i < toAddAddresses.length; i++) {
            _whitelistAddress[toAddAddresses[i]] = true;
        }
    }
    function removeFromWhitelist(address[] calldata toRemoveAddresses) external onlyOwner {
        for (uint i = 0; i < toRemoveAddresses.length; i++) {
            delete _whitelistAddress[toRemoveAddresses[i]];
        }
    }
    function isWhitelistAddress(address walletAddress) external view returns (bool) {
        return _whitelistAddress[walletAddress];
    }
}