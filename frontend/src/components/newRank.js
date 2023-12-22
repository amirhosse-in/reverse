import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class Rank extends Component {
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
    );
  }
}

export default Rank;