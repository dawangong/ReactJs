import React, { Component }  from 'react';
import './header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div className="header">
               <p>
                   我是header
               </p>
           </div>
        );
    }
}