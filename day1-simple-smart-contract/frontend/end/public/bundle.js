var contractABI = [];
var contractAddress = '0x5bC153857d15d94F1aA9B7346E528EaDF56FE3eB';
var web3 = new Web3('http://localhost:9595');
var simpleSmartContract = new web3.eth.Contract(contractABI,contractAddress);
console.log(simpleSmartContract);
web3.eth.getAccounts()
.then(console.log);