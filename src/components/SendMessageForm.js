import React from 'react'

export default class SendMessageForm extends React.Component {

    constructor() {
        super();
        this.state = {
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.sendMessage(this.state.message);
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <form className="send-message-form" onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange}
                    placeholder="Type message"
                    type="text"
                    value={this.state.message}/>
            </form>
        )
    }
}