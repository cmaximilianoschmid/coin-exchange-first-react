import React from 'react';
import PropTypes from 'prop-types';
import "./AccountBalance.css"
import styled from 'styled-components'

const Section = styled.section`
    border: 1px solid red;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;


export default function AccountBalance(props) {
        const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
        let showHideBalance = props.showBalance ? <>${props.amount}</> : null;
        return (
            <Section className = "balanceDisplay">
            {showHideBalance}
            <button onClick={props.handleBalanceVisibilityChange}>{buttonText}</button>
            </Section>
        );
}

AccountBalance.propTypes = { //typechecking
    amount: PropTypes.number.isRequired
}