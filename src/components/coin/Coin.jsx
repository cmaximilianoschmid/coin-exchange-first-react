import React, { Component } from 'react'
/* import "./Coin.css" */
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Td = styled.td`
    border: 1px solid #cccc;
    width: 25wh;
`

export default class Coin extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    /* to auto refresh: 
    componentDidMount() {
        const callback = () => {
            // set new state
            const randomPercentage = 0.995 + Math.random() * 0.01;
            this.setState(function(oldState){
                return{
                    price:oldState.price * randomPercentage
                };
            })
        }
        setInterval(callback, 1000);
    }
    */

    handleClick(event){
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
/*
        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState(function(oldState){
            return{
                price: oldState.price * randomPercentage
            };
        })
*/
    }

    render() {
        return (
                   <tr className="coin-row">
                    <Td>{this.props.name}</Td>
                    <Td>{this.props.ticker}</Td>
                    <Td>$ {this.props.price}</Td>
                    <Td>
                        <form action="#" method="POST">
                            <button onClick={this.handleClick}>Refresh</button>
                        </form>
                    </Td>

                   </tr>
        )
    }
}

Coin.propTypes = { //typechecking
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}