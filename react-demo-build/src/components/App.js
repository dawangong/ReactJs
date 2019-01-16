import React, { Component } from 'react';
import LikeButton from './button';
import Header from './header';
import List from './list';

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
                <List />
            </div>
        );
    }
}

