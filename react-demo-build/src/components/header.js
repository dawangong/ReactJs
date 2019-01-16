import React, { Component }  from 'react';
import './header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.title = '我是header';
    }

    render() {
        return (
           <div className="header">
               <p>{this.title}</p>
           </div>
        );
    }
}