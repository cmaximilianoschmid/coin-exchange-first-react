import React from 'react'
/* import "./Coin.css" */
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Td = styled.td`
    border: 1px solid #cccc;
    width: 25wh;
`

export default function Coin(props) {

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

    const handleRefreshClick = (event) => {
        event.preventDefault();
        props.handleRefresh(props.tickerId);
        
/*
        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState(function(oldState){
            return{
                price: oldState.price * randomPercentage
            };
        })
*/
    }

        return (
                   <tr className="coin-row">
                    <Td>{props.name}</Td>
                    <Td>{props.ticker}</Td>
                    <Td>$ {props.price}</Td>
                    {props.showBalance ? <Td>$ {props.balance}</Td> : null}
                    <Td>
                        <form action="#" method="POST">
                            <button onClick={handleRefreshClick}>Refresh price</button>
                        </form>
                    </Td>

                   </tr>
        )
}

Coin.propTypes = { //typechecking
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}