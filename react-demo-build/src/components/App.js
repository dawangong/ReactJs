import React, { Component } from 'react';
import LikeButton from './button';
import Header from './header';
import List from './list';
import Search from './search';
import FilterableProductTable from '../components/searchInput/FilterableProductTable';

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

        const data = [
            {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
            {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
            {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
            {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
            {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
            {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
        ];

        this.state = {
            list,
            searchTerm: '',
            data
        };
    }

    onSearchChange(ev) {
        this.setState({ searchTerm: ev.target.value });
    }

    render() {
        const { searchTerm, list, data } = this.state;
        return (
            <div className="main">
                <div className="散件">
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
                <div className="搜索框">
                    <FilterableProductTable></FilterableProductTable>
                </div>
            </div>
        );
    }
}

