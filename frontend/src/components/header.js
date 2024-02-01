import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Functional Component

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  logout() {
    axios.get('api/logout/').then((res) => { window.location.replace('/') });
  }

  componentDidMount() {
    axios
      .get("/api/login")
      .then((res) => this.setState({isLoggedIn: (res.data.msg == 'user already logged in!' ? true : false)}))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div
      className="flex flex-row h-[40px] justify-between text-[#9ACC13] bg-[#171717]"
    >
      <div><a className="text-2xl hidden sm:inline hover:text-[#9ACC13]" href="/">crackmes.one</ a ></div>
      <div className="flex mt-2 justify-around lg:w-7/12 sm:w-8/12 w-full">
      <a className="text-sm sm:hidden inline font-bold" href="/home">Home</ a >
      <a className="text-sm" href="/search">Search</ a >
      <a className="text-sm" href="/rank">Lastest Crackmes</ a >
      <a className="text-sm" href="/faq">Faq</ a >
      {
        this.state.isLoggedIn ? 
        <>
          <a className="text-sm" href="/chats">chats</ a >
          <a className="text-sm" href="/upload">Upload Crackmes</ a >
          <a className="text-sm" href="/profile">Profile</ a >
          <a className="text-sm" href="#" onClick={this.logout}>Logout</ a >
        </>
        :
        <>
          <a className="text-sm" href="/login">Login</ a >
          <a className="text-sm" href="/register">Register</ a >
        </>
      }
      </div>
    </div>
    );
  };
}
export default Header;