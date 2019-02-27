import React, { Component }  from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow'

export default class ProductTable extends Component {

    constructor(prop) {
        super(prop);
    }

    render() {
        return(
            <div>
                <ProductCategoryRow />
                <ProductRow />
            </div>
        );
    }

}