import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class RankItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rankData: null,
            ranks: [],
        solutions: [],
        comments: [],
        };
        this.rankId = window.location.href.split('/').pop();
    }

    componentDidMount() {
        axios.get('/api/getRank/?rankId=' + this.rankId).then((res) => {
            let rank = res.data.data[0];
            let file = new Blob([rank.fields.fileContent], { type: 'application/octet-stream'});
            rank.downloadUrl = URL.createObjectURL(file);
            this.setState({ rankData: rank });
            console.log(rank);
            axios.get(`/api/solutions/?rankId=${this.rankId}`).then((res) => this.setState({solutions: res.data.data}));
            axios.get(`/api/comments/?rankId=${this.rankId}`).then((res) => this.setState({comments: res.data.data}));
        });
        
    }
    
    renderItemsComment = () => {
        const newItems = this.state.comments;
        return newItems.map((item) => (
        <tr className="odd:bg-[#3c3c3c] even:bg-[#272727] border-black">
            <td className="px-6 py-4"><Link to={'/profile/' + item.fields.username}>{item.fields.username}</Link></td>
            <td className="px-6 py-4">{item.fields.description}</td>
            <td className="px-6 py-4">{item.fields.created_at.split('T')[0]}</td>
                  </tr>
        ));
      }
      renderItemsSolitions = () => {
        const newItems = this.state.solutions;
        return newItems.map((item) => (
        <tr className="odd:bg-[#3c3c3c] even:bg-[#272727] border-black">
            <td className="px-6 py-4"><Link to={'/profile/' + item.fields.username}>{item.fields.username}</Link></td>
            <td className="px-6 py-4">{item.fields.description}</td>
                <td
                    key = {item.fields.id}
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                    <a className="text-[#9ACC13]" href={URL.createObjectURL(new Blob([item.fields.fileContent], { type: 'application/octet-stream'}))} download={item.fields.fileName}>{item.fields.fileName}</a>
                </td>
                <td className="px-6 py-4">{item.fields.created_at.split('T')[0]}</td>
            </tr>
        ));
      }

    handleNewCommentSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.target);
        let data = {};
        for(const [key, item] of formData){
            data[key] = item;
        }
        let url = '/api/newComment/?description=' + encodeURIComponent(data['description']) + '&rankId=' + window.location.href.split('/').pop();
        axios.get(url).then((res) => {
            if(res.data.ok) {
                alert('new comment submitted!');
                window.location.reload();
            }
            else {
                alert('error: ' + res.data.msg);
                console.log(res.data);
            }
        });
    }

    handleNewSolutionSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.target);
        let data = {};
        for(const [key, item] of formData){
            data[key] = item;
        }
        let url = '/api/newSolution/?description=' + encodeURIComponent(data['description']) + '&rankId=' + window.location.href.split('/').pop();
        var file = data.file;

        // Create a FileReader object
        var reader = new FileReader();

        // Set up a callback function to handle the file content
        reader.onload = function(event) {
            // The result property contains the file content
            let fileContent = event.target.result;
            let fileName = data.file.name;
            
            url += '&fileName=' + encodeURIComponent(fileName);
            url += '&fileContent=' + encodeURIComponent(fileContent);
            axios.get(url).then((res) => {
                if(res.data.ok)
                {
                    alert('solution submitted!');
                    window.location.reload();
                }
                else
                {
                    alert('error: ' + res.data.msg);
                    console.log(res.data);
                }
            });
        };

        // Read the file as text or any other desired type
        reader.readAsBinaryString(file);
    }

    render() {
        return (
            <div className="flex flex-col text-white justify-center items-center pt-24 bg-[#272727]">
                <div className="grid grid-cols-4 gap-4 text-[#ffffff] bg-[#3C3C3C] w-[90%] ">
                    <div className='h-20 m-2' >Author: {this.state.rankData?.fields.Author}</div>
                    <div className='h-20 m-2'>Language: {this.state.rankData?.fields.Language}</div>
                    <div className='h-20 m-2'>Upload: {this.state.rankData?.fields.created_at}</div>
                    <div className='h-20 m-2'>Platform: {this.state.rankData?.fields.Platform}</div>
                    <div className='h-20 m-2'>Difficulty: {this.state.rankData?.fields.Difficulty}</div>
                    <div className='h-20 m-2'>Quality: {this.state.rankData?.fields.Quality}</div>
                    <div className='h-20 m-2'>Arch: {this.state.rankData?.fields.Arch}</div>
                    <div className='h-20 m-2'>DownLoad: <a href={this.state.rankData?.downloadUrl} download={this.state.rankData?.fields.fileName}>{this.state.rankData?.fields.fileName}</a></div>
                </div>
                <div className='h-20 m-2 flex flex-col items-start justify-start w-[90%] bg-[#3C3C3C]'>
                    <p className='m-2'>Description</p>
                    <p className='m-2'>Hopefully at least a little unconventional.</p>
                </div>
                            
                <div className="flex flex-row justify-between w-[90%]">
                                    <div className="flex flex-col">
                                        <h2 className="text-white ml-2 text-3xl my-2">Comments</h2> 
                                        <table className=" text-sm text-left rtl:text-right text-white">
                                            <thead className="text-xs text-white uppercase bg-[#171717]">
                                                <tr>
                                                    <th scope="col" className="px-4 py-2">user</th>
                                                    <th scope="col" className="px-4 py-2">comment</th>
                                                    <th scope="col" className="px-4 py-2">date</th>
                                                    
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
                                                    <th scope="col" className="px-4 py-2">user</th>
                                                    <th scope="col" className="px-4 py-2">description</th>
                                                    <th scope="col" className="px-4 py-2">file</th>
                                                    <th scope="col" className="px-4 py-2">created_at</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {this.renderItemsSolitions()}
                                            </tbody>
                                        </table>
                                    </div>
                            </div>
                <div className="flex flex-row justify-between w-[90%] pb-24">
                    <div className="flex flex-col">
                        <h2 className="text-white ml-2 text-3xl my-2">Comments</h2>  
                        <form onSubmit={this.handleNewCommentSubmit} className="flex gap-2.5" >
                            <input name="description" className="px-4 py-2 rounded-lg outline-none bg-zinc-700" placeholder="comment..." />
                            <button type="submit" className="px-3 py-2 rounded-lg outline-none bg-green-600 text-white">send</button>
                        </form>
                    </div>    
                    <div className="flex flex-col">
                        <h2 className="text-white ml-2 text-3xl my-2">solutions</h2> 
                        <form onSubmit={this.handleNewSolutionSubmit} className="w-80 flex flex-wrap gap-2.5" >
                            <input name="description" className="px-4 py-2 rounded-lg outline-none bg-zinc-700" placeholder="description..." />
                            <input name="file" type="file" className="px-4 py-2 rounded-lg outline-none bg-zinc-700" placeholder="comment..." />
                            <button type="submit" className="px-3 py-2 rounded-lg outline-none bg-green-600 text-white">send</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RankItem;