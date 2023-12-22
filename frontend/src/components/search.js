import React from 'react';

// Functional Component
const Search = () => {
  return (
    <div class="flex justify-center items-center bg-[#272727] text-[#ffffff] h-[85vh] ">
    <div className='flex flex-col gap-4 w-full sm:w-[80%] md:w-[60%]'>
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
    </div>
    </div>

  );
};

export default Search;