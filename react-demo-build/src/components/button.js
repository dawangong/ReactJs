import React, { Component }  from 'react';

export default class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    handleClick(e) {
        this.setState({ liked: !this.state.liked });
    }

    render() {
        const text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <button onClick={this.handleClick.bind(this)}>
                You {text} this. Click to toggle.
            </button>
        );
    }
}