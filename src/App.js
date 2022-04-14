import React from 'react';
import Web3 from 'web3/dist/web3.min.js';
import { ContractABI } from './ContractABI'

import './App.css';

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];

const Contract = new web3.eth.Contract(
  ContractABI,
  "0x1852464Ff012ddE2C0c004cD3b030a95B8F8B741"
);

function App() {
  const subscribeEvent = async (e) => {
    e.preventDefault();
    console.log(window.ethereum)
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const result = await Contract.methods
      .subscribe()
      .send({ from: account, value: web3.utils.toWei("1", "ether") })
      .then(function (recieval) {
        console.log(recieval);
      });
    console.log(result);


  }
  return (
    <div className="App">
      <div className="bg">
        <h1 className="head"><span className="title">NETFLIX</span><br/>Unlimited movies, TV <br />shows, and more.</h1>
        <button className="Subs_Btn" onClick={subscribeEvent}><h3>Subscribe</h3></button> </div>
    </div>
  );
}

export default App;