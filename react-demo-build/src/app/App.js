import React, { Component } from 'react';
import LikeButton from '../components/button';
import Header from '../components/header';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">

                主页
                <Header />
                <LikeButton />
            </div>
        );
    }
}

