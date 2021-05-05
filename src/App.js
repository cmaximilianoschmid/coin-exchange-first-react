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
      coinData: [
        {
          name: 'Bitcoin', ticker:'BTC', price: 9999.99
        },
        {
          name: 'Ether', ticker:'ETH', price: 299.99
        },
        {
          name: 'Tether', ticker:'USDT', price: 1.00
        },
        {
          name: 'Ripple', ticker:'XRP', price: 0.2
        },
        {
          name: 'Cardano', ticker:'ADA', price: 1.2
        },
      ]
    }
  }

  render() {
    return (
      <Div className="App">
        <ExchangeHeader/>
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
      </Div>
    );
  }
}

export default App;
