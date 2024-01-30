import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



// Functional Component

class Profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null,
        ranks: [],
        solutions: [],
        comments: [],
      };
      this.user = null;
    }
  
    componentDidMount() {

        axios.get('/api/getUser/').then((res) => {
            this.user = res.data.data;
            this.setState({user: this.user});
            axios.get(`/api/ranks/?Author=${this.user.username}`).then((res) => this.setState({ranks: res.data.data}));
            axios.get(`/api/solutions/?userId=${this.user.id}`).then((res) => this.setState({solutions: res.data.data}));
            axios.get(`/api/comments/?userId=${this.user.id}`).then((res) => this.setState({comments: res.data.data}));
        });

    }
    renderItemsComment = () => {
        const newItems = this.state.comments;
        return newItems.map((item) => (
        <tr className="odd:bg-[#3c3c3c] even:bg-[#272727] border-black">
            <td className="px-6 py-4">{item.fields.description}</td>
                    <td
                      key = {item.fields.id}
                      scope="row"
                      className="px-6 py-4 font-medium text-white whitespace-nowrap text-[#9ACC13]"
                    >
                      <Link className="text-[#9ACC13]" to={`/crack/${item.rankId}`}>Link</Link>
                    </td>
                    
                    
                  </tr>
        ));
      };
      renderItemsSolitions = () => {
        const newItems = this.state.solutions;
        return newItems.map((item) => (
        <tr className="odd:bg-[#3c3c3c] even:bg-[#272727] border-black">
            <td className="px-6 py-4">{item.fields.description}</td>
                <td
                    key = {item.fields.id}
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                    <Link className="text-[#9ACC13]" to={`/crack/${item.rankId}`}>{item.fields.fileName}</Link>
                </td>
                <td
                    key = {item.fields.id}
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                    <Link className="text-[#9ACC13]" to={`/crack/${item.rankId}`}>Link</Link>
                </td>
            </tr>
        ));
      };
      renderItems = () => {
        const newItems = this.state.ranks;
        return newItems.map((item) => (
        <tr className="odd:bg-[#3c3c3c] even:bg-[#272727] border-black">
                    <td
                      key = {item.fields.id}
                      scope="row"
                      className="px-6 py-4 font-medium text-white whitespace-nowrap"
                    >
                      <Link  to={`/crack/${item.pk}`}>{item.fields.Name}</Link>
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
   
  render (){
    return (
        <div className="flex flex-col text-[#ffffff] bg-[#272727] items-center">
            <div className="w-full md:w-[80vw] lg:w-[60vw] p-2">
                <div className="">
                    <h1 className="text-3xl mb-4 pl-2 mt-4"><a>{this.state.user?.username}</a>'s profile</h1>
                </div>
                <div className="flex flex-col justify-around mt-8">
                    <div className="flex flex-row justify-evenly">
                        <div className="bg-[#3C3C3C] w-1/4 h-32">
                            <p>Number of comments:</p>
                            <h1 className="text-center m-8 text-xl">{this.state.comments.length}</h1>
                        </div>
                        <div className="bg-[#3C3C3C] w-1/4 h-32">
                            <p>Number of crackmes:</p>
                            <h1 className="text-center m-8 text-xl">{this.state.ranks.length}</h1>
                        </div>
                        <div className="bg-[#3C3C3C] w-1/4 h-32">
                            <p>Number of solutions:</p>
                            <h1 className="text-center m-8 text-xl">{this.state.solutions.length}</h1>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#272727] ">
                                <div className="mx-2 relative md:flex md:flex-col md:justify-center md:items-center overflow-x-auto shadow-md sm:rounded-lg">
                                    <h2 className="text-white ml-2 text-3xl my-2">Latest Crackmes</h2> 
                                    <table className=" text-sm text-left rtl:text-right text-white">
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
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col">
                                        <h2 className="text-white ml-2 text-3xl my-2">Comments</h2> 
                                        <table className=" text-sm text-left rtl:text-right text-white">
                                            <thead className="text-xs text-white uppercase bg-[#171717]">
                                                <tr>
                                                    <th scope="col" className="px-4 py-2">comment</th>
                                                    <th scope="col" className="px-4 py-2">link</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.renderItemsComment()}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex flex-col">
                                    <h2 className="text-white ml-2 text-3xl my-2">solutions</h2> 
                                        <table className=" text-sm text-left rtl:text-right text-white">
                                            <thead className="text-xs text-white uppercase bg-[#171717]">
                                                <tr>
                                                    <th scope="col" className="px-4 py-2">solutions</th>
                                                    <th scope="col" className="px-4 py-2">file</th>
                                                    <th scope="col" className="px-4 py-2">link</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {this.renderItemsSolitions()}
                                            </tbody>
                                        </table>
                                    </div>
                                                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    ); 
  };
}
export default Profile;