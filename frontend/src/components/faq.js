import React from 'react';

// Functional Component
const Faq = () => {
  return (
    <div
      class="text-white bg-[#272727] flex h-fit md:h-[85vh] justify-center items-center"
    >
      <div class="text-justify w-[95%] md:w-[80%]">
        <h1 class="text-4xl">FAQ</h1>
        <h3 class="text-2xl">Where am i?</h3>
        <p>
          Crackmes.de does not exists anymore. Reversers need to find a place to
          upload their creation and help new people to learn from that great
          discipline. This place has been made in order to help you to improve
          your reversing skills. You can download some crackmes and submit
          solutions to them.
        </p>
        <div class="bg-[#6B6B6B] w-full h-px"></div>
        <h3 class="text-2xl">Is this legal?</h3>
        <p>
          Obviously, all crackmes available on this website have been made to be
          cracked.
        </p>
        <div class="bg-[#6B6B6B] w-full h-px"></div>
        <h3 class="text-2xl">
          I downloaded a crackme but it's password-protected.
        </h3>
        <p>
          The password for the files is "<b>crackmes.one</b>". If it does not
          work, this is probably because the crackme has been imported from
          crackmes.de, so use the password "<b>crackmes.de</b>" instead.
        </p>
        <div class="bg-[#6B6B6B] w-full h-px"></div>
        <h3 class="text-2xl">
          I submitted a crackme/solution but it does not appear on the website.
        </h3>
        <p>
          Every crackme/solution is validated before appearing on the website.
          This may take anywhere from a few hours to a couple of days
        </p>
        <div class="bg-[#6B6B6B] w-full h-px"></div>
        <h3 class="text-2xl">
          Some crackmes does not have any kind of information.
        </h3>
        <p>
          Indeed, but in most cases there's a README/instructions file within
          the archive.
        </p>
        <div class="bg-[#6B6B6B] w-full h-px"></div>
        <h3 class="text-2xl">How can I submit a solution.</h3>
        <p>
          First, you must login/register. Then, you can upload your solution on
          the crackme page. Text, markdown, HTML, and similar formats are
          preferred, but if you think that a video will be clearer, feel free to
          upload it!
        </p>
        <div class="bg-[#6B6B6B] w-full h-px"></div>
        <h3 class="text-2xl">
          Can I use those crackmes as free course material?
        </h3>
        <p>
          All crackmes available on this site can be used for non-commercial
          purposes. But please mention the author. :)
        </p>
        <div class="bg-[#6B6B6B] w-full h-px"></div>
        <h3 class="text-2xl">
          My solution does not appear on the website after many days!
        </h3>
        <p>
          This is probably because your solution got rejected. Please, upload an
          explaination of how you managed to solve the crackme, not just a
          simple keygen.py file. More generally there's only one rule: don't
          patch! Unless the author explicitely said that patching is a valid
          solution, don't do it. Write your keygen, write your solution. You'll
          learn more by doing this.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Faq;