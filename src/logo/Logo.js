import React from 'react';
import '../css/App1.css';
import '../css/App2.css';
import logo from './logo.jpg';

class Logo extends React.Component {
    render() {
        return (
            <img src={logo} alt="Logo" class="pict"/>
        )
    }
 }
 
 export default Logo;