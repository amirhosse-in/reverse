import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

class NewSerach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      RankList: [],
     
      
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    var file = data.file;

    // Create a FileReader object
    var reader = new FileReader();

    // Set up a callback function to handle the file content
    reader.onload = function(event) {
        // The result property contains the file content
        let fileContent = event.target.result;
        let fileName = data.file.name;
        
        data['fileName'] = fileName;
        data['fileContent'] = fileContent;
        delete data['file'];

        let url = '/api/newRank/?';
        Object.keys(data).forEach((key, index) => {
            url += key + '=' + encodeURIComponent(data[key]);
            if(index != data.length - 1)
                url += '&';
        });

        axios.get(url).then((res) => {
            if(res.data.ok)
            {
                alert('crackmes created!');
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

  refreshList = () => {
    // axios
    //   .get(`/api/ranks/?Author=${this.state.Author}&Language=${this.state.Language}&Arch=${this.state.Arch}&Difficulty=${this.state.Difficulty}&Quality=${this.state.Quality}&Platform=${this.state.Platform}`)
    //   .then((res) => this.setState({ RankList: res.data.data }))
    //   .catch((err) => console.log(err));
  };

  render() {
    return (
       <div className="flex justify-center items-center bg-[#272727] text-[#ffffff] h-[85vh] ">
            <form onSubmit={this.handleSubmit} className='flex flex-col gap-4 w-full sm:w-[80%] md:w-[60%]'>
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
                    <div className="col-span-3">
                        <label className="ml-2" >Difficulty between </label>
                    </div>
                    <div className="col-span-9 w-[98%] flex justify-center items-center">
                        <input
                            className="text-[#272727] w-[98%]"
                            id="dif"
                            type="number"
                            name="Difficulty"
                        />
                    </div>
                </div>
                <div className="grid sm:grid-cols-12">
                    <div className="col-span-3">
                        <label className="ml-2" >Quality </label>
                    </div>
                    <div className="col-span-9 w-[98%] flex justify-center items-center">
                        <input className="text-[#272727] w-[98%]" list="Quality" type="number"
                       name="Quality"  />
                    </div>
                </div>
                <div className="grid sm:grid-cols-12">
                    <div className="col-span-3">
                        <label className="ml-2" >Langage </label>
                    </div>
                    <div className="col-span-9 w-[98%] flex justify-center items-center">
                        <input className="text-[#272727] w-[98%]" list="Langage"
                        name="Language"  />
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
                    <div className="col-span-3">
                        <label className="ml-2" >Arch </label>
                    </div>
                    <div className="col-span-9 w-[98%] flex justify-center items-center">
                        <input className="text-[#272727] w-[98%]" list="Arch"
                        name="Arch"  />
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
                    <   label className="ml-2" >Platform </label>
                    </div>
                    <div className="col-span-9 w-[98%] flex justify-center items-center">
                        <input className="text-[#272727] w-[98%]" list="Platform"
                        name="Platform"  />
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
                <div className="grid sm:grid-cols-12">
                    <div className="col-span-3">
                        <label className="ml-2" >File</label>
                    </div>
                    <div className="col-span-9 w-[98%] flex justify-center items-center">
                        <input
                            className="text-[#272727] w-[98%]"
                            type="file"
                            name="file"
                        />
                    </div>
                </div>
                <div className="grid sm:grid-cols-12">
                    <div className="col-span-3">
                        <label className="ml-2" >info</label>
                    </div>
                    <div className="col-span-9 w-[98%] flex justify-center items-center">
                        <input
                            className="text-[#272727] w-[98%]"
                            type="text"
                            placeholder="info"
                            name="description"
                             
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center bg-[#9ACC13] m-5">
                    <input type="submit"/>
                </div>
            </form>
        </div>    
    );
  }
}

export default NewSerach;