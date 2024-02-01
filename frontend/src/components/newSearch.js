import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class NewSerach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      RankList: [],
      Author: '',
      Language: '',
      Arch: '',
      Difficulty: '',
      Quality: '',
      Platform: '',
    };
    this.handleOne = this.handleOne.bind(this);
    this.handleTwo = this.handleTwo.bind(this);
    this.handleThree = this.handleThree.bind(this);
    this.handleFour = this.handleFour.bind(this);
    this.handleFive = this.handleFive.bind(this);
    this.handleSix = this.handleSix.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleOne(event) {
    this.setState({Author: event.target.value});
    
  }
  handleTwo(event) {
    this.setState({Language: event.target.value});
    
  }
  handleThree(event) {
    this.setState({Arch: event.target.value});
    
  }
  handleFour(event) {
    this.setState({Difficulty: event.target.value});
    
  }
  handleFive(event) {
    this.setState({Quality: event.target.value});
    
    
  }
  handleSix(event) {
    this.setState({Platform: event.target.value});
    
  }
  
  // componentDidMount() {
  //   this.refreshList();
  // }
  handleSubmit(event){
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = {};
    for(const [key, item] of formData){
      data[key] = item;
    }
    console.log(data);
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get(`/api/ranks/?Author=${this.state.Author}&Language=${this.state.Language}&Arch=${this.state.Arch}&Difficulty=${this.state.Difficulty}&Quality=${this.state.Quality}&Platform=${this.state.Platform}`)
      .then((res) => this.setState({ RankList: res.data.data }))
      .catch((err) => console.log(err));
  };

  renderItems = () => {
    const newItems = this.state.RankList;
    return newItems.map((item) =>(
      
    <tr className="odd:bg-[#3c3c3c] even:bg-[#272727] border-black">
        <td
          key = {item.fields.id}
          scope="row"
          className="px-6 py-4 font-medium text-white whitespace-nowrap"
        >
          <Link to={`/crack/${item.pk}`}>{item.fields.Name}</Link>
        </td>
        <td className="px-6 py-4"><Link to={`/profile/${item.fields.Author}`}>{item.fields.Author}</Link></td>
        <td className="px-6 py-4">{item.fields.Language}</td>
        <td className="px-6 py-4">{item.fields.Arch}</td>
        <td className="px-6 py-4">{item.fields.Difficulty}</td>
        <td className="px-6 py-4">{item.fields.Quality}</td>
        <td className="px-6 py-4">{item.fields.Platform}</td>
        <td className="px-6 py-4">{item.fields.created_at.split('T')[0]}</td>
        <td className="px-6 py-4">{item.fields.solutions}</td>
        <td className="px-6 py-4">{item.fields.comments}</td>
      </tr>
    ));
  };

  render() {
    return (
        <div>
            <div className="flex justify-center items-center bg-[#272727] text-[#ffffff] h-[85vh] ">
    <form onSubmit={this.handleSubmit}
    className='flex flex-col gap-4 w-full sm:w-[80%] md:w-[60%]'>
      <div className="grid sm:grid-cols-12 mt-5 ">
        <div className="col-span-3">
          <label className="ml-2" >Crackme name </label>
        </div>
        <div className="col-span-9 w-[98%] flex justify-center items-center">
          <input
            className="text-[#272727] w-[98%]"
            type="text"
            placeholder="name"
            name="Name"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-12">
        <div className="col-span-3"><label className="ml-2" >Author</label></div>
        <div className="col-span-9 w-[98%] flex justify-center items-center">
          <input
            className="text-[#272727] w-[98%]"
            type="text"
            name="Author"
            placeholder="Author"
            value={this.state.Author}
            onChange={this.handleOne}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-12">
        <div className="col-span-3">
          <label className="ml-2" >Difficulty between </label>
        </div>
        <div className="col-span-9 w-[98%] flex justify-center items-center">
          <input
            className="text-[#272727] w-[98%]"
            name="Difficulty"
            type="number"
            value={this.state.Difficulty}
            onChange={this.handleFour} 
          />
          
        </div>
      </div>
      <div className="grid sm:grid-cols-12">
        <div className="col-span-3">
          <label className="ml-2" >Quality </label>
        </div>
        <div className="col-span-9 w-[98%] flex justify-center items-center">
          <input className="text-[#272727] w-[98%]" list="Quality" type="number"
          name="Quality"
          value={this.state.Quality}
          onChange={this.handleFive}  />
          
        </div>
      </div>
      <div className="grid sm:grid-cols-12">
        <div className="col-span-3">
          <label className="ml-2" >Langage </label>
        </div>
        <div className="col-span-9 w-[98%] flex justify-center items-center">
          <input className="text-[#272727] w-[98%]" list="Langage"
          value={this.state.Language}
          onChange={this.handleTwo}  />
          <datalist id="Langage">
            <option value="C/C++"></option>
            <option value="Assembler"></option>
            <option value="Java"></option>
            <option value="(Visual) Basic"></option>
            <option value="Borland Delphi"></option>
            <option value="Turbo Pascal"></option>
            <option value=".NET"></option>
            <option value="Unspecified/other"></option>
          </datalist>
        </div>
      </div>
      <div className="grid sm:grid-cols-12">
        <div className="col-span-3"><label className="ml-2" >Arch </label></div>
        <div className="col-span-9 w-[98%] flex justify-center items-center">
          <input className="text-[#272727] w-[98%]" list="Arch"
          value={this.state.Arch}
          name="Arch"
          onChange={this.handleThree}  />
          <datalist id="Arch">
            <option value="x86"></option>
            <option value="x86-64"></option>
            <option value="Java"></option>
            <option value="ARM"></option>
            <option value="MIPS"></option>
            <option value="other"></option>
          </datalist>
        </div>
      </div>
      <div className="grid sm:grid-cols-12">
        <div className="col-span-3">
          <label className="ml-2" >Platform </label>
        </div>
        <div className="col-span-9 w-[98%] flex justify-center items-center">
          <input className="text-[#272727] w-[98%]" list="Platform"
          value={this.state.Platform}
          name="Platform"
          onChange={this.handleSix}  />
          <datalist id="Platform">
            <option value="DOS"></option>
            <option value="Mac OS X"></option>
            <option value="Multiplatform"></option>
            <option value="Unix/linux etc."></option>
            <option value="Windows"></option>
            <option value="Unspecified/other"></option>
          </datalist>
        </div>
      </div>

      <div className="flex justify-center items-center bg-[#9ACC13] m-5">
        <input type="submit"/>
      </div>
    </form>
    </div>    
        <div className="bg-[#272727] h-[85vh]">
        <div
          className="mx-2 relative md:flex md:flex-col md:justify-center md:items-center overflow-x-auto shadow-md sm:rounded-lg"
        >
          <h2 className="text-white ml-2 text-3xl my-2">Latest Crackmes</h2>
  
          <table className="w-[80vw] text-sm text-left rtl:text-right text-white">
            <thead className="text-xs text-white uppercase bg-[#171717]">
              <tr>
                <th scope="col" className="px-4 py-2">Name</th>
                <th scope="col" className="px-4 py-2">Author</th>
                <th scope="col" className="px-4 py-2">Language</th>
                <th scope="col" className="px-4 py-2">Arch</th>
                <th scope="col" className="px-4 py-2">Difficulty</th>
                <th scope="col" className="px-4 py-2">Quality</th>
                <th scope="col" className="px-4 py-2">Platform</th>
                <th scope="col" className="px-4 py-2">Date</th>
                <th scope="col" className="px-4 py-2">Solution</th>
                <th scope="col" className="px-4 py-2">Comments</th>
              </tr>
            </thead>
            <tbody>
              
            {this.renderItems()}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    );
  }
}

export default NewSerach;