import React, { Component }  from 'react';

export default class SearchBar extends Component {

    constructor(prop) {
        super(prop);
    }

    render() {
        return(
            <div>
                <input type="text"/>
                <label>
                    only show products in stock
                    <input type="checkbox"/>
                </label>
            </div>
        )
    }
}