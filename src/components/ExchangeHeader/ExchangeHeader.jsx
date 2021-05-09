import React, { Component } from 'react'
import logo from './logo.svg';
import styled from 'styled-components'

const Img = styled.img`
    height: 10vmin;
    pointer-events: none;
`

const Header = styled.header`
    background-color: #282c34;
    min-height: 15vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`

const H1 = styled.h1`
    font-size: 2rem;
`

export default class ExchangeHeader extends Component {
    render() {
        return (
            <Header className="App-header">
               <Img src={logo} alt="React logo" className="App-logo"/>
               <H1 className="App-title">Exchange</H1>
            </Header>
        )
    }
}
