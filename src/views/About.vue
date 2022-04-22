<template>
  <body>
    <div class="pt-6 pb-12 bg-gray-300">
      <div id="card" class="">
        <h2 class="text-center">About Us</h2>
        <!-- container for all cards -->
        <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">




          <!-- card -->
          <div class="recent-work flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-50">
            <!-- media -->
            <div class="pic-img">
              <img class="object-center h-80 w-80 object-cover" style="margin:0px" :src="require(`../assets/tyler1.jpg`)" alt="" />
            </div>
            <!-- content -->
            <div class="content w-full py-4 px-6 text-gray-800 flex flex-col">
              <h3>Tyler Jas Salzberg</h3>
              <h4>B.S. Computer Engineering, Minor in Mathematics</h4>

              <div class="">
                <p>Tyler is a current CyberCorps®: Scholarship for Service recipient who has completed many projects under FIU.
                    He has also participated in previous eCTF and hackathons throughout his bachelors career.
                    He is graduating with a Bachelor of Science in Computer Engineering and Cybersecurity with a minor in Mathematics.
                    His concentrations include Embedded Systems and Programming, Cybersecurity and digital forensics.</p>
                <p>Tyler will be attending FIU’s graduate school this Fall to begin his Master’s degree in Computer Engineering and Cybersecurity.
                   His research will be focused on the virtualization of PLCs for security testing purposes.</p>
<br>
                  <p>
                  <strong>Email:</strong> tsalz004@fiu.edu
                </p>
              </div>
            </div>
          </div>
          <!--/ card-->







          <br>




                    <!-- card -->
          <div class="recent-work flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-50">
            <!-- media -->
            <div class="pic-img">
              <img class="object-center h-80 w-80 object-cover" style="margin:0px" :src="require(`../assets/Pat.png`)" alt="" />
            </div>
            <!-- content -->
            <div class="content w-full py-4 px-6 text-gray-800 flex flex-col">
              <h3>Patrick O'Leary</h3>
              <h4>B.S. Computer Engineering</h4>

              <div class="">
                <p>Patrick is graduating with a B.S. in Computer Engineering with concentrations in Embedded Systems, Data Structures and Cybersecurity.
                   He is a full stack developer, Web3 entuthiast and former carpenter!</p>
                <p>After graduation, Patrick will be joining MITRE as a Full Stack Web3 developer.</p>
<br>                
<p>
                  <strong>Email:</strong> polea003@fiu.edu
                </p>
              </div>
            </div>
          </div>
          <!--/ card-->





          <br>




          <!-- card -->
          <div class="recent-work flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-50">
            <!-- media -->
            <div class="pic-img">
              <img class="object-center h-80 w-80 object-cover" style="margin:0px" :src="require(`../assets/Isa.jpeg`)" alt="" />
            </div>
            <!-- content -->
            <div class="content w-full py-4 px-6 text-gray-800 flex flex-col">
              <h3>Isabela Fernandez Pujol</h3>
              <h4>B.S. Computer Engineering</h4>

              <div class="">
                <p>Isabela is graduating with a Bachelor's in Computer Engineering. Her concentrations are in Cybersecurity and Data System Software. 
                  She is an REU Research Assistant at the Advanced Wireless and Security Lab (ADWISE), researching the incentive protocols of different blockchain applications.</p>
                <p>After graduation, she will join Stryker as a Data Engineering Intern. In the Fall, she will resume her studies at 
                  FIU's graduate school as an ECE PhD candidate, doing research into 5G Wireless Conectivity and Quantum Algorithms.</p>
<br>                
<p>
                  <strong>Email:</strong> ifern093@fiu.edu
                </p>
              </div>
            </div>
          </div>
          <!--/ card-->






          <br>



          <!-- card -->
          <div class="recent-work flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-50">
            <!-- media -->
            <div class="pic-img">
              <img class="object-center h-80 w-80 object-cover" style="margin:0px" :src="require(`../assets/Karl.jpg`)" alt="" />
            </div>
            <!-- content -->
            <div class="content w-full py-4 px-6 text-gray-800 flex flex-col">
              <h3>Karl Richard Urban</h3>
              <h4>B.S. Electrical Engineering</h4>

              <div class="">
                <p>Karl spent his teenage years interested in art and music.
                   As an adult, he developed a career as an automotive technician. He's worked on a full range of vehicles types, from standard
                    to luxury to high-line vehicles. Karl will be graduating with a B.S. in Electrical Engineering with concentrations in 
                    Embedded Systems, Computer Architecture & Microprocessor Design, and Control Systems.
</p>
                <p>Karl was accepted into the CIE (Chrysler Institute of Engineering) program, where he'll attend post graduation. 
                   He will be moving to Michigan to work for Setallantis (formally FCA) while pursuing my Master's degree.</p>
<br>                
                  <p>
                  <strong>Email:</strong> kurba005@fiu.edu
                </p>
              </div>
            </div>
          </div>
          <!--/ card-->





          <br>




          <!-- card -->
          <div class="recent-work flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-xl mt-4 w-50">
            <!-- media -->
            <div class="pic-img">
              <img class="object-center h-80 w-80 object-cover" style="margin:0px" :src="require(`../assets/Luis.jpeg`)" alt="" />
            </div>
            <!-- content -->
            <div class="content w-full py-4 px-6 text-gray-800 flex flex-col">
              <h3>Luis Hernandez</h3>
              <h4>B.S. Computer Engineering</h4>

              <div class="">
                <p>Luis will be graduating this Spring with a Bachelor’s in Computer Engineering. His concentrations are in Cybersecurity, and Embedded Systems.</p>
                <p>After graduation he is looking forward to working full-time in the Cybersecurity field, while working towards his Security+ certification.</p>
<br>                
                  <p>
                  <strong>Email:</strong> lhern266@fiu.edu
                </p>
              </div>
            </div>
          </div>
          <!--/ card-->




        </div>
        <!--/ flex-->
      </div>
    </div>
  </body>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;900&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

.recent-work {
  display: flex;
  padding: 30px;
  background-color: rgb(255, 255, 255);
}

.pic-img {
  display: block;
  object-fit: cover;
}

h2 {
  display: block;
  font-size: 38px;
  margin-top: 0.30em;
  font-family: 'Merriweather', serif;
  font-weight: bold;
  text-align: left;
  color: black;

}

h3 {
  display: block;
  font-size: 26px;
  margin-top: 0.30em;
  font-family: 'Merriweather', serif;
  font-weight: bold;
  text-align: left;
  color: black;

}

h4 {
  display: block;
  font-size: 20px;
  margin-bottom: 0.30em;
  font-family: 'Merriweather', sans-serif;
  font-weight: bold;
  text-align: left;
  color: black;

}

p{
  text-align: left;
  color: black;
  text-align: left;
}
</style>
message.txt
8 KB