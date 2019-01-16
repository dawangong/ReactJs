import React, { Component }  from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.list = [
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
    }

    render() {
        return (
            <div>
                {this.list.map(item =>
                    <div key={item.objectID}>
                        <p><a href={item.url}>{item.title}</a></p>
                        <p>{item.author}</p>
                        <p>{item.num_comments}</p>
                        <p>{item.points}</p>
                    </div>)}
            </div>
        );
    }
}