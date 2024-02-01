import React, { Component } from "react";
import axios from "axios";

// Functional Component

class Chats extends Component {
    constructor(props) {
        super(props);
        this.state = {
        ChatList: [],   
      };
    }

    componentDidMount() {
        axios.get('/api/getChats').then((res) => {
            this.setState({ ChatList: res.data.data });
        });
    }

    renderItems = () => {
        const newItems = this.state.ChatList;
        return newItems.map((item) =>(
            <a className="py-2 rounded-lg w-20 flex justify-center items-center m-2 bg-[#9ACC13]" href={`/chat/${item.id}`}>{item.username}</a>
        ));
    }
    render () {
        return (    
            <div className="h-[85vh] flex justify-center items-center">
                <div className="flex flex-col justify-center items-center bg-[#3c3c3c] w-[20%] py-4 rounded-lg">
                    {this.renderItems()}
                </div>
            </div>
        );
    };
}
export default Chats;