import auctionAbi from './auctionAbi'

const Web3 = require('web3');

export function getAuctionContract(web3, contractAddress) {
  return new web3.eth.Contract(auctionAbi, contractAddress)
}

export function weiToEther(weiAmount) {
  return Web3.utils.fromWei(weiAmount, 'ether');
}

export function etherToWei(etherAmount) {
  return Web3.utils.toWei(etherAmount, 'ether')
}

