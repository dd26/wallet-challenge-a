import React from 'react'
import { Navbar } from 'react-bootstrap';
import logo from '../logo.svg';
import '../styles/layout.layout.scss';


export default function Layout({ children }) {
    return (
        <>
            <Navbar className="header-content">
                <img src={logo} alt="logo_app" className="header-logo" />
                <h1 style={{fontSize: 15, lineHeight: 0}}>Mi Cartera</h1>
            </Navbar>
            {children}
        </>
    )
}
