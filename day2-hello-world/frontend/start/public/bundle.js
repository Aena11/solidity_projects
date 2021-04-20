var contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ];
var ContractAddress ='0xce21485Ff9401ee07308C41155Cd4fa2D4A43e03';
var web3 = new Web3('http://localhost:9545');
var helloWorld = new web3.eth.Contract(contractABI,ContractAddress);

document.addEventListener('DOMContentLoaded', () => {

helloWorld.methods.hello().call()
  .then(result => {
    document.getElementById('hello').innerHTML = result;
  });
});

