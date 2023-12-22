import React from 'react';

// Functional Component
const Rank = () => {
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
            <tr class="odd:bg-[#3c3c3c] even:bg-[#272727] border-black">
              <td
                scope="row"
                class="px-6 py-4 font-medium text-white whitespace-nowrap"
              >
                <a href="">Apple MacBook Pro 17"</a>
              </td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="odd:bg-[#3c3c3c] even:bg-[#272727] border-black">
              <td
                scope="row"
                class="px-6 py-4 font-medium text-white whitespace-nowrap"
              >
                <a href="">Apple MacBook Pro 17"</a>
              </td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default Rank;