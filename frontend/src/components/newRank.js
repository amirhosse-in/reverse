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
      .get("/api/ranks/")
      .then((res) => this.setState({ RankList: res.data.data }))
      .catch((err) => console.log(err));
  };

  renderItems = () => {
    const newItems = this.state.RankList;
    return newItems.map((item) => (
      
    //  
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
    );
  }
}

export default Rank;