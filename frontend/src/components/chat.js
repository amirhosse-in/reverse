import React, { Component } from "react";
import axios from "axios";

// Functional Component

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            user: null,
            msg: null,
        };
        this.userId = window.location.href.split('/').pop();
        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            axios.get('/api/getMessages/?userId=' + this.userId).then((res) => {
                this.setState({ messages: res.data.data });
            });
        }, 1000);

        axios.get('/api/getUser/?userId=' + this.userId).then((res) => {
            this.setState({ user: res.data.data });
        });
    }

    renderItems() {
        return this.state.messages.map((msg) => {
            if(this.userId == msg.fields.senderUserId)
                return ( <div className="self-start text-white py-2 px-2.5 text-sm bg-zinc-900 rounded-xl m-2">{ msg.fields.text }</div> );
            return ( <div className="self-end py-2 px-2.5 text-sm bg-zinc-300 rounded-xl m-2">{ msg.fields.text }</div> );
        });
    }

    handleChange(event) {
        this.setState({ msg: event.target.value });
    }

    sendMessage() {
        axios.get(`/api/sendMessage/?userId=${this.userId}&text=${encodeURIComponent(this.state.msg)}`).then((res) => {
            if(!res.data.ok) {
                alert('message not sent!');
            }
            this.setState({ msg: '' });
        });
    }

    render () {
        return (    
            <div className="w-full flex flex-col items-center py-12">
                <div className="w-72 h-[80vh] rounded-xl bg-zinc-700 overflow-hidden flex flex-col items-center">
                    <div className="title w-full flex items-center justify-center bg-zinc-900 py-3">
                        <p className="text-white"> chat with { this.state.user?.username ?? '' } </p>
                    </div>
                    <div className="chat-place w-full grow flex flex-col items-center text-sm overflow-y-auto">
                        {this.renderItems()}
                    </div>
                    <div className="send-place flex items-center gap-2.5 py-2 border-t">
                        <input type='text' className="message-box w-48 text-sm h-full rounded-lg px-4 py-2 text-white bg-zinc-700 outline-none" placeholder="type here..." id='send-box' value={this.state.msg} onChange={this.handleChange} />
                        <button className="send-box px-4 py-2 text-sm bg-green-600 text-white rounded-lg" id='send-btn' onClick={this.sendMessage}> send </button>
                    </div>
                </div>
            </div>
        );
    };
}
export default Chat;