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
        return (
            <Section className = "balanceDisplay">
            <br></br>
            Balance: ${this.props.amount}
            </Section>
        );
    }
}

AccountBalance.propTypes = { //typechecking
    amount: PropTypes.number.isRequired
}