import React, { Component }  from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

export default class List extends Component {

    constructor(props) {
        super(props);
    }

    isSearched(searchTerm) {
        return item => item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    onDismiss(id) {
        const { list } = this.props;
        const updatedList = list.filter(item => item.objectID !== id);
        this.setState({ list: updatedList });
    }

    render() {
        const { list, pattern } = this.props;
        return (
            <div>
                {list.filter(this.isSearched(pattern)).map(item =>
                    <div key={item.objectID}>
                        <p><a href={item.url}>{item.title}</a></p>
                        <p>{item.author}</p>
                        <p>{item.num_comments}</p>
                        <p>{item.points}</p>
                        <button
                            onClick={() => this.onDismiss(item.objectID)}
                        > Dismiss</button>
                    </div>)}
            </div>
        );
    }
}