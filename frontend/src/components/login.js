import React, { Component } from "react";
import axios from "axios";



// Functional Component

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {password: '',username: ''};
  
      this.handleChangepassword = this.handleChangepassword.bind(this);
      this.handleChangeusename = this.handleChangeusename.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangepassword(event) {
      this.setState({password: event.target.value});
    }
    handleChangeusename(event) {
      this.setState({username: event.target.value});
      
    }
  
    handleSubmit(event) {
      event.preventDefault();
      let url = `/api/login/?username=${this.state.username}&password=${this.state.password}`;
      axios
      .get(url)
      .then((res) => {
        if(res.data.ok)
        {
          window.location.replace('/home');
        }
        else
        {
          console.log(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
      
    }
 

  render (){
    return (
      <div
        className="flex text-white justify-center items-center h-[85vh] bg-[#272727]"
      >
        <form 
          onSubmit={this.handleSubmit}
          className="w-[80vw] sm:w-[60vw] md:w-62 border border-5 border-[#9ACC13] rounded-2xl flex flex-col justify-around items-around p-5"
        >
          <div
            className="flex flex-col sm:flex-row p-3 sm:justify-between justify-center items-center"
          >
            <label>Username</label>
            <input
              className="indent-5 mt-2 sm:mt-0 h-[30px] md:h-[38px] w-[60%] rounded-md text-black"
              type="text"
              placeholder="Username"
              value={this.state.username} onChange={this.handleChangeusename} 
            />
          </div>

          <div
            className="flex flex-col sm:flex-row p-3 sm:justify-between justify-center items-center"
          >
            <label>Password </label>
            <input
              className="indent-5 mt-2 sm:mt-0 h-[30px] md:h-[38px] w-[60%] rounded-md text-black"
              type="password"
              placeholder="Password"
              value={this.state.password} onChange={this.handleChangepassword} 
            />
          </div>

          <div
            className="flex justify-center items-center bg-[#9ACC13] m-5 rounded-md"
          >
            <input
              type="submit"
              className="text-[#272727] text-lg font-bold h-8"
              value="Login"
              
            />
          </div>
          <div className="flex justify-center items-center">
            <a className="text-[#9ACC13]" href="/register">i want Register</a>
          </div>
        </form>
      </div>

    );
  };
}
export default Login;