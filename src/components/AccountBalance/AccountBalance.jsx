import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./AccountBalance.css"
import styled from 'styled-components'

const Section = styled.section`
    border: 1px solid red;
    text-align: left;
    padding: 1.5rem 0 1.5rem 5rem;
`;

export default class AccountBalance extends Component {
    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';
        return (
            <Section className = "balanceDisplay">
            Balance: ${this.props.amount}
            <button>{buttonText}</button>
            </Section>
        );
    }
}

AccountBalance.propTypes = { //typechecking
    amount: PropTypes.number.isRequired
}