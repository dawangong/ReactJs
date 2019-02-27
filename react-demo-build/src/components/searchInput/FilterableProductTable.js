import React, { Component }  from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {

    constructor(prop) {
        super(prop);
    }

    render() {
        return(
            <div>
                <ProductTable />
                <SearchBar />
            </div>
        );
    }
}