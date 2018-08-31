import React from 'react';

import {Message} from './Message';

export default class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">

                {this.renderSingleMessage()}
            </div>
        )
    }
    renderSingleMessage() {
        if (this.props.length === 0) return null;
        return (
            this.props.messages.map((message,idx) =>
                <Message key={idx} message={message}/>
            )
        )
    }
}