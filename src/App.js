import * as React from 'react';
import Chatkit from '@pusher/chatkit';

import Config from './config';
import './style.css';

import MessageList from './components/MessageField/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            rooms: null,
            messages: []
        };
        this.sendMessage = this.sendMessage.bind(this);
    }

    //Instantiate Chatkit API.
    componentDidMount() {
        // Get configs
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: Config.ChatCredentials().instanceLocator,
            userId: Config.ChatUser().id,
            tokenProvider: new Chatkit.TokenProvider({ url: Config.ChatTokenProvider() })
        });
        // Init conn
        chatManager.connect()
            .then(currentUser => {
                this.setState({
                    rooms: currentUser.rooms
                });
                this.currentUser = currentUser;
                this.currentUser.subscribeToRoom({
                    roomId: this.currentUser.rooms[0].id,
                    hooks: {
                        onNewMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message]
                            });
                        }
                    }
                })
            })
            .catch(err => {
                console.log('Error on connection', err)
            })
    }

    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: this.currentUser.rooms[0].id
        })
    }

    render() {
        return (
            <div className="app">
                <RoomList rooms={this.state.rooms} />
                <MessageList messages={this.state.messages}/>
                <SendMessageForm sendMessage={this.sendMessage}/>
                <NewRoomForm />
            </div>
        );
    }
}