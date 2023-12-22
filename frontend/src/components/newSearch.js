import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class NewSerach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      RankList: []
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/Ranks/")
      .then((res) => this.setState({ RankList: res.data }))
      .catch((err) => console.log(err));
  };

  renderItems = () => {
    const newItems = this.state.RankList;
    console.log(newItems);
    return newItems.map((item) => (
      
    //  
    <tr class="odd:bg-[#3c3c3c] even:bg-[#272727] border-black">
                <td
                  key = {item.id}
                  scope="row"
                  class="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                  <Link to={item.NameLink}>{item.Name}</Link>
                </td>
                <td class="px-6 py-4"><Link to={item.AuthorLink}>{item.Author}</Link></td>
                <td class="px-6 py-4">{item.Language}</td>
                <td class="px-6 py-4">{item.Arch}</td>
                <td class="px-6 py-4">{item.Difficulty}</td>
                <td class="px-6 py-4">{item.Quality}</td>
                <td class="px-6 py-4">{item.Platform}</td>
                <td class="px-6 py-4">{item.Date}</td>
                <td class="px-6 py-4">{item.Solution}</td>
                <td class="px-6 py-4">{item.Comments}</td>
              </tr>
    ));
  };

  render() {
    return (
        <div>
            <div class="flex justify-center items-center bg-[#272727] text-[#ffffff] h-[85vh] ">
    <form className='flex flex-col gap-4 w-full sm:w-[80%] md:w-[60%]'>
      <div class="grid sm:grid-cols-12 mt-5 ">
        <div class="col-span-3">
          <label class="ml-2" for="">Crackme name </label>
        </div>
        <div class="col-span-9 w-[98%] flex justify-center items-center">
          <input
            class="text-[#272727] w-[98%]"
            type="text"
            placeholder="name"
          />
        </div>
      </div>
      <div class="grid sm:grid-cols-12">
        <div class="col-span-3"><label class="ml-2" for="">Author</label></div>
        <div class="col-span-9 w-[98%] flex justify-center items-center">
          <input
            class="text-[#272727] w-[98%]"
            type="text"
            placeholder="Author"
          />
        </div>
      </div>

      <div class="grid sm:grid-cols-12">
        <div class="col-span-3">
          <label class="ml-2" for="">Difficulty between </label>
        </div>
        <div class="col-span-9 w-[98%] flex justify-center items-center">
          <input
            class="text-[#272727] w-[98%]"
            list="diff"
            name="dif"
            id="dif"
          />
          <datalist id="diff">
            <option value="1-2"></option>
            <option value="2-3"></option>
            <option value="3-4"></option>
            <option value="5-6"></option>
          </datalist>
        </div>
      </div>
      <div class="grid sm:grid-cols-12">
        <div class="col-span-3">
          <label class="ml-2" for="">Quality </label>
        </div>
        <div class="col-span-9 w-[98%] flex justify-center items-center">
          <input class="text-[#272727] w-[98%]" list="Quality" />
          <datalist id="Quality">
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
            <option value="6"></option>
          </datalist>
        </div>
      </div>
      <div class="grid sm:grid-cols-12">
        <div class="col-span-3">
          <label class="ml-2" for="">Langage </label>
        </div>
        <div class="col-span-9 w-[98%] flex justify-center items-center">
          <input class="text-[#272727] w-[98%]" list="Langage" />
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
      <div class="grid sm:grid-cols-12">
        <div class="col-span-3"><label class="ml-2" for="">Arch </label></div>
        <div class="col-span-9 w-[98%] flex justify-center items-center">
          <input class="text-[#272727] w-[98%]" list="Arch" />
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
      <div class="grid sm:grid-cols-12">
        <div class="col-span-3">
          <label class="ml-2" for="">Platform </label>
        </div>
        <div class="col-span-9 w-[98%] flex justify-center items-center">
          <input class="text-[#272727] w-[98%]" list="Platform" />
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

      <div class="flex justify-center items-center bg-[#9ACC13] m-5">
        <input type="submit" value="Search" />
      </div>
    </form>
    </div>    
        <div class="bg-[#272727] h-[85vh]">
        <div
          class="mx-2 relative md:flex md:flex-col md:justify-center md:items-center overflow-x-auto shadow-md sm:rounded-lg"
        >
          <h2 class="text-white ml-2 text-3xl my-2">Latest Crackmes</h2>
  
          <table class="w-[80vw] text-sm text-left rtl:text-right text-white">
            <thead class="text-xs text-white uppercase bg-[#171717]">
              <tr>
                <th scope="col" class="px-4 py-2">Name</th>
                <th scope="col" class="px-4 py-2">Author</th>
                <th scope="col" class="px-4 py-2">Language</th>
                <th scope="col" class="px-4 py-2">Arch</th>
                <th scope="col" class="px-4 py-2">Difficulty</th>
                <th scope="col" class="px-4 py-2">Quality</th>
                <th scope="col" class="px-4 py-2">Platform</th>
                <th scope="col" class="px-4 py-2">Date</th>
                <th scope="col" class="px-4 py-2">Solution</th>
                <th scope="col" class="px-4 py-2">Comments</th>
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