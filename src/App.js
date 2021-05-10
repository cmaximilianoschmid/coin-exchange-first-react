import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance'
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import styled from 'styled-components'

const Div = styled.div`
  text-align: center;
  background-color: antiquewhite;
  color: rgb(1, 1, 36);
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 9000,
      showBalance: true,
      coinData: [
        {
          name: 'Bitcoin', ticker:'BTC', balance: 0.5, price: 9999.99
        },
        {
          name: 'Ether', ticker:'ETH', balance: 32.5, price: 299.99
        },
        {
          name: 'Tether', ticker:'USDT', balance: 0, price: 1.00
        },
        {
          name: 'Ripple', ticker:'XRP', balance: 1000, price: 0.2
        },
        {
          name: 'Cardano', ticker:'ADA', balance: 0, price: 1.2
        },
      ]
    }
    this.handleBalanceVisibilityChange = this.handleBalanceVisibilityChange.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleBalanceVisibilityChange() {
    this.setState( function(oldState) {
      return{
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });
  }

  handleRefresh(valueChangeTicker){
    const newCoinData = this.state.coinData.map(function({ticker, name, price, balance}) {
      let newPrice = price
      if(valueChangeTicker === ticker){
        const randomPercentage = 0.995 + Math.random() * 0.01;
                newPrice = newPrice * randomPercentage
      }
      return {
        ticker, //or ticker: ticker
        name, //or name: name
        price: newPrice,
        balance
      }
    });
    this.setState({coinData: newCoinData});
  }

  render() {
    return (
      <Div className="App">
        <ExchangeHeader/>
        <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} handleBalanceVisibilityChange={this.handleBalanceVisibilityChange}/>
        <CoinList coinData={this.state.coinData} showBalance={this.state.showBalance} handleRefresh={this.handleRefresh}/>
      </Div>
    );
  }
}

export default App;
