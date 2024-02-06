let etherscan = 'https://testnet.bscscan.com/';
let contractAddress = '0x2AF2e621DFa5dB8a83b4841EC86eEB662f4afE34';
let contractABI = [
	{
		"inputs": [],
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721IncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721InsufficientApproval",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC721InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721NonexistentToken",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "newAddressReceiver",
				"type": "address"
			}
		],
		"name": "AddressReceiverChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_toTokenId",
				"type": "uint256"
			}
		],
		"name": "BatchMetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "EtherWithdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "GetEther",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newMaxMintOnTime",
				"type": "uint256"
			}
		],
		"name": "MaxMintOnTimeChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newMaxMintPerWallet",
				"type": "uint256"
			}
		],
		"name": "MaxMintPerWalletChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newMaxSupply",
				"type": "uint256"
			}
		],
		"name": "MaxSupplyChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "MetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "senderAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "newItemId",
				"type": "uint256"
			}
		],
		"name": "NFTMinted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newPrice",
				"type": "uint256"
			}
		],
		"name": "PriceChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "toAddAddresses",
				"type": "address[]"
			}
		],
		"name": "addToWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "allowMintPublic",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "allowMintWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseUri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "changeAddressReceiver",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newBaseJsonUrl",
				"type": "string"
			}
		],
		"name": "changeBaseJsonUrl",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newMaxMintOnTime",
				"type": "uint256"
			}
		],
		"name": "changeMaxMintOnTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newMaxMintPerWallet",
				"type": "uint256"
			}
		],
		"name": "changeMaxMintPerWallet",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newMaxSupply",
				"type": "uint256"
			}
		],
		"name": "changeMaxSupply",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newPrice",
				"type": "uint256"
			}
		],
		"name": "changePrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newPriceWhitelist",
				"type": "uint256"
			}
		],
		"name": "changePriceWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMaxMintOnTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMaxMintPerWallet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPriceWhitelist",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStatusHoldMintPublic",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStatusHoldMintWhitelist",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "walletAddress",
				"type": "address"
			}
		],
		"name": "getTokenIdsByAddress",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "holdMintPublic",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "holdMintWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "walletAddress",
				"type": "address"
			}
		],
		"name": "isWhitelistAddress",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minted",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "multiMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "toRemoveAddresses",
				"type": "address[]"
			}
		],
		"name": "removeFromWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const metamask = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(contractAddress, contractABI, metamask);
let address = '';
let isWhitelistAddress = false;
let disabledMint = false;
let price = 0;

async function connectMetamask() {
	address = await metamask.send("eth_requestAccounts", []);
	isWhitelistAddress = getIsWhitelistAddress();

	if(address.length > 0) {
		$connect = document.getElementById('connected');
		$connect.style.display = 'flex';

		$connect = document.getElementById('disconnected');
		$connect.style.display = 'none';

		const $addressWallet = document.getElementById('address-wallet');
		$addressWallet.href = etherscan + 'address/' + address;
		$addressWallet.textContent = address.toString().substring(0, 10);

		const $balance = document.getElementById('balance-wallet');
		$balance.href = 'https://testnets.opensea.io/collection/mynft-8056';
		let balance = await getBalance();
		$balance.textContent = balance + ' NFT';

		updatePrice();
		updateSupply();
		updateHoldMint();
	} else {
		$connect = document.getElementById('connected');
		$connect.style.display = 'none';

		$connect = document.getElementById('disconnected');
		$connect.style.display = 'flex';
	}

	updateButtonMint('Loading...', true);
	setTimeout(function() {
		if(address.length > 0) {
			updateButtonMint('MINT', false);
		}
	}, 2000);
}

async function getMaxSupply() {
    try {
        const metamaskSigner = metamask.getSigner();
        const contractWithSigner = contract.connect(metamaskSigner);
        const response = await contractWithSigner.totalSupply();
        return response;
    } catch (error) {
        popupMessages(error.message, 'Error');
        return 0;
    }
}

async function getMinted() {
    try {
        const metamaskSigner = metamask.getSigner();
        const contractWithSigner = contract.connect(metamaskSigner);
        const response = await contractWithSigner.minted();
        return response;
    } catch (error) {
        popupMessages(error.message, 'Error');
        return 0;
    }
}

async function getBalance() {
	try {
		const metamaskSigner = metamask.getSigner();
        const contractWithSigner = contract.connect(metamaskSigner);
		const response = await contractWithSigner.balanceOf(address[0]);
		return response;
	} catch (error) {
		console.log(error);
        popupMessages(error.message, 'Error');
        return 0;
    }
}

async function getIsWhitelistAddress() {
	try {
		const metamaskSigner = metamask.getSigner();
		const contractWithSigner = contract.connect(metamaskSigner);
		const response = await contractWithSigner.isWhitelistAddress(address[0]);
		return response;
	} catch (error) {
		popupMessages(error.message, 'Error');
		return false;
	}
}

async function getPricePublic() {
	try {
		const metamaskSigner = metamask.getSigner();
		const contractWithSigner = contract.connect(metamaskSigner);
		const response = await contractWithSigner.getPrice();
		price = response;
		return ethers.utils.formatEther(response);
	} catch (error) {
		popupMessages(error.message, 'Error');
		return 0;
	}
}

async function getPriceWhitelist() {
	try {
		const metamaskSigner = metamask.getSigner();
		const contractWithSigner = contract.connect(metamaskSigner);
		const response = await contractWithSigner.getPriceWhitelist();
		price = response;
		return ethers.utils.formatEther(response);
	} catch (error) {
		popupMessages(error.message, 'Error');
		return 0;
	}
}

async function getHoldMintPublic() {
	try {
		const metamaskSigner = metamask.getSigner();
		const contractWithSigner = contract.connect(metamaskSigner);
		const response = await contractWithSigner.getStatusHoldMintPublic();
		return response;
	} catch (error) {
		popupMessages(error.message, 'Error');
		return 0;
	}
}

async function getHoldMintWhitelist() {
	try {
		const metamaskSigner = metamask.getSigner();
		const contractWithSigner = contract.connect(metamaskSigner);
		const response = await contractWithSigner.getStatusHoldMintWhitelist();
		return response;
	} catch (error) {
		popupMessages(error.message, 'Error');
		return 0;
	}
}

async function mint() {
	try {
		const metamaskSigner = metamask.getSigner();
		const contractWithSigner = contract.connect(metamaskSigner);
		const response = await contractWithSigner.mint({value: price});
		updateButtonMint('MINT', false);
		historyMint(response.hash);
		popupMessages('Successful Minted', 'Success');

		setTimeout(function() {
			updateSupply();
		}, 2000);
	} catch (error) {
		updateButtonMint('MINT', false);
		popupMessages(error.message, 'Error');
	}
}

function popupMessages(message, type = 'Success') {
    const $ahref = document.getElementById('popup-message');
    $ahref.textContent = type + ': ' + (message ?? '');
    setTimeout(function() {
        $ahref.textContent = '';
    }, 5000);
}

function currency(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// HTML CONTROL
async function updateSupply() {
	let supply = 0;
	let minted = 0;

    try {
        const res = await getMaxSupply();
		supply = res;
        document.getElementById('supplyFull').textContent = currency(res);
    } catch (error) {
        console.error('Error updating supply:', error);
    }

	try {
        const res = await getMinted();
		minted = res;
        document.getElementById('supplyMinted').textContent = currency(res);
    } catch (error) {
        console.error('Error updating supply:', error);
    }

	if(supply == minted) {
		if(address.length > 0) {
			updateButtonMint('SOLD OUT', true);
		}
	}
}

async function updatePrice() {
	if(!isWhitelistAddress) {
		try {
			const res = await getPricePublic();
			document.getElementById('priceMinted').textContent = currency(res);
		} catch (error) {
			console.error('Error updating price:', error);
		}
	} else {
		try {
			const res = await getPriceWhitelist();
			document.getElementById('priceMinted').textContent = currency(res);
		} catch (error) {
			console.error('Error updating price:', error);
		}
	}
}

async function updateHoldMint() {
	if(!isWhitelistAddress) {
		try {
			const res = await getHoldMintPublic();
			if(res) {
				updateButtonMint('MINT', false);
			} else {
				updateButtonMint('DISABLED', true);
			}
		} catch (error) {
			console.error('Error updating hold mint:', error);
		}
	} else {
		try {
			const res = await getHoldMintWhitelist();
			if(res) {
				updateButtonMint('MINT', false);
			} else {
				updateButtonMint('DISABLED', true);
			}
		} catch (error) {
			console.error('Error updating hold mint:', error);
		}
	}
}

async function updateButtonMint(text, disabled) {
	const $button = document.getElementById('btn-mint');
	$button.textContent = text;
	$button.disabled = disabled;
	disabledMint = disabled;
}

async function historyMint(trx) {
	const $address = document.getElementById('address-target');
	$address.href = etherscan + 'address/' + address;
	$address.textContent = address.toString().substring(0, 6);

	const $transaction = document.getElementById('transaction-target');
	$transaction.href = etherscan + 'tx/' + trx;
	$transaction.textContent = trx.toString().substring(0, 6);

	const $history = document.getElementById('minted-history');
	$history.style.display = 'block';

	setTimeout(() => {
		$history.style.display = 'none';
	}, 30000);
}

connectMetamask();
updatePrice();
updateSupply();
updateHoldMint();

const $btnMint = document.getElementById('btn-mint');
$btnMint.addEventListener('click', function() {
	if(disabledMint) {
		return;
	}

	updateButtonMint('Loading Minted...', true);
	mint();
});