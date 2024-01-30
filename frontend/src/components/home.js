import React from 'react';


// Functional Component
const Home = () => {
  return (
    <div class="flex h-[85vh] flex-col text-[#ffffff] bg-[#272727] items-center">
      <div class="w-full md:w-[80vw] lg:w-[60vw] p-2">
      <div class="">
        <h1 class="text-3xl mb-4 pl-2 mt-4">Welcome!</h1>
        <p class="text-justify px-2">
          This is a simple place where you can download crackmes to improve your
          reverse engineering skills. If you want to submit a crackme or a
          solution to one of them, you must register. But before that, I
          strongly recommend you to read the&nbsp;
          <a href="/faq" class="text-[#9ACC13]">FAQ</a> . If you have any kind of
          question regarding the website, a crackme, feel free to join the &nbsp;
          <a href="https://t.me/+989369360015" class="text-[#9ACC13]">telegram chat.</a>
        </p>
      </div>
      <div class="flex flex-row justify-around mt-8">
        <div class="bg-[#3C3C3C] w-1/4 h-32">
          <p>Number of users:</p>
          <h1 class="text-center m-8 text-xl">47044</h1>
        </div>
        <div class="bg-[#3C3C3C] w-1/4 h-32">
          <p>Number of crackmes:</p>
          <h1 class="text-center m-8 text-xl">3767</h1>
        </div>
        <div class="bg-[#3C3C3C] w-1/4 h-32">
          <p>Number of solutions:</p>
          <h1 class="text-center m-8 text-xl">5419</h1>
        </div>
      </div>
      </div>
    </div>
    
  );
};

export default Home;