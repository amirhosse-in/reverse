import React from 'react';

// Functional Component
const Register = () => {
  return (
<div
      class="flex text-white justify-center items-center h-[85vh] bg-[#272727]"
    >
      <form
        class="w-[80vw] sm:w-[60vw] md:w-62 border border-5 border-[#9ACC13] rounded-2xl flex flex-col justify-around items-around p-5"
      >
        <div
          class="flex flex-col sm:flex-row p-3 sm:justify-between justify-center items-center"
        >
          <label for="">Username </label>
          <input
            class="indent-5 mt-2 sm:mt-0 h-[30px] md:h-[38px] w-[60%] rounded-md text-black"
            type="text"
            placeholder="Username"
          />
        </div>
        <div
          class="flex flex-col sm:flex-row p-3 sm:justify-between justify-center items-center"
        >
          <label for="">Email </label>
          <input
            class="indent-5 mt-2 sm:mt-0 h-[30px] md:h-[38px] w-[60%] rounded-md text-black"
            type="email"
            placeholder="Email"
          />
        </div>
        <div
          class="flex flex-col sm:flex-row p-3 sm:justify-between justify-center items-center"
        >
          <label for="">Password </label>
          <input
            class="indent-5 mt-2 sm:mt-0 h-[30px] md:h-[38px] w-[60%] rounded-md text-black"
            type="password"
            placeholder="Password"
          />
        </div>
        <div
          class="flex flex-col sm:flex-row p-3 sm:justify-between justify-center items-center"
        >
          <label for="">Verify Password </label>
          <input
            class="indent-5 mt-2 sm:mt-0 h-[30px] md:h-[38px] w-[60%] rounded-md text-black"
            type="password"
            placeholder="Verify Password"
          />
        </div>

        <div
          class="flex justify-center items-center bg-[#9ACC13] m-5 rounded-md"
        >
          <input
            type="submit"
            class="text-[#272727] text-lg font-bold h-8"
            value="Register"
          />
        </div>
        <div class="flex justify-center items-center">
          <a class="text-[#9ACC13]" href="">i have acount</a>
        </div>
      </form>
    </div>
  );
};

export default Register;