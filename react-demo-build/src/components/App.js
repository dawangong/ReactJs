import React, { Component } from 'react';
import LikeButton from './button';
import Header from './header';
import List from './list';
import Search from './search';

export default class App extends Component {
    constructor(props) {
        super(props);

        const list = [
            {
                title: 'React',
                url: 'https://facebook.github.io/react/',
                author: 'Jordan Walke',
                num_comments: 3,
                points: 4,
                objectID: 0,
            },
            {
                title: 'Redux',
                url: 'https://github.com/reactjs/redux',
                author: 'Dan Abramov, Andrew Clark',
                num_comments: 2,
                points: 5,
                objectID: 1,
            },
        ];

        this.state = {
            list,
            searchTerm: ''
        };
    }

    onSearchChange(ev) {
        this.setState({ searchTerm: ev.target.value });
    }

    render() {
        const { searchTerm, list } = this.state;
        return (
            <div className="main">
                主页
                <Header />
                <LikeButton />
                <Search
                    value={searchTerm}
                    onChange={() => this.onSearchChange(event)}
                />
                <List
                    list={list}
                    pattern={searchTerm}
                />
            </div>
        );
    }
}

