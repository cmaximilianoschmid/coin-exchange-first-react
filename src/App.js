import React, {useState, useEffect} from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance'
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components'
import axios from'axios';

const Div = styled.div`
  text-align: center;
  background-color: antiquewhite;
  color: rgb(1, 1, 36);
`

const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(2));

function App(props) {
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id =>axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response){
      const coin = response.data;
      return{
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes.USD.price)
      };
    })
    setCoinData(coinPriceData);
  }

  useEffect(function(){
    if (coinData.length === 0){
      //component did mount scenario
      componentDidMount();
    } else {
      //component did update scenario
    }
  });

  const handleBalanceVisibilityChange = () => {
    setShowBalance(oldValue => !oldValue);
  }

  const addFunds = () => {
    setBalance(balance + 1200);
  }

  const handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = coinData.map(function(values) {
      let newValues = {...values};
      if(valueChangeId === values.ticker){
        newValues.price = newPrice;
      }
      return newValues;
    });
    setCoinData(newCoinData);
  }

    return (
      <Div className="App">
        <ExchangeHeader/>
        <AccountBalance 
          amount={balance}
          showBalance={showBalance}
          handleBalanceVisibilityChange={handleBalanceVisibilityChange}
          addFunds={addFunds}/>
        <CoinList
          coinData={coinData}
          showBalance={showBalance}
          handleRefresh={handleRefresh}/>
      </Div>
    );
}

export default App;
