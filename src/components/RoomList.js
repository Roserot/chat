import React from 'react'

export default class RoomList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render () {
        return (
            <div className="rooms-list">
                <div className="help-text">RoomList</div>
                {this.renderRoomList()}
            </div>
        )
    }
    renderRoomList() {
        if (this.props.rooms === null) return null;
        return (
                <ul>
                    {this.props.rooms.map((room,idx) => <li key={idx} className='room'><a>{room.name}</a></li>)}
                </ul>
        )
    }
}