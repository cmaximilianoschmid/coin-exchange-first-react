import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components'

const Table = styled.table`
    margin: 50px;
    display: inline-block;
    text-align: center;
`

export default class CoinList extends Component {
    render() {
        return (
            <Table className="coin-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ticker</th>
                        <th>Price</th>
                        <th>Balance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    /* this.props.coinData.map(value => <Coin name={value.name} ticker={value.ticker} price={value.price}/>) */
                    this.props.coinData.map( ({name, ticker, balance, price}) =>
                        <Coin key={ticker}
                            handleRefresh={this.props.handleRefresh}
                            name={name}
                            ticker={ticker}
                            balance={balance}
                            price={price} />
                    )
                }
                </tbody>
            </Table>
        )
    }
}
