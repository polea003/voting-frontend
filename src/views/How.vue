<!-- Page to explain how it works TODO: nothing really here Yet -->
<template>
  <div class="how">
    <!-- Local Title Header-->
    <h1 class="text-5xl font-extrabold p-5">How It Works</h1>
    <!--<div class='flex flex-col mx-64'>
      <div class="text-xl font-bold my-5">Secured by Blockchain.</div>
      <div class="text-xl font-bold my-5">Protected with Biometrics.</div>
      <div class="text-xl font-bold my-5">Paws Up!</div>

    </div>-->
    <h2>Signing Up & Logging In</h2>
    <div class='flex flex-col justify-center mx-4 my-2 mb-4'>
      <p>
        This requires you to enter a name, FIU email address, password of at least seven characters, 
        and a clear picture of your face.
      </p>
      <p> 
        Now that you have signed up you will need to <b>Login</b> at the login page. 
        You will enter the emailed and password you used to sign up. 
      </p>
      <p>
        Once you click the Login button, you will be taken to the face biometrics verification page. 
        This will automatically turn on your camera if permission is given. 
        When ready, take a clear image of your face (<u>NO OTHER FACES CAN BE SHOWN IN THE IMAGE YOU TAKE</u>).
        The circle button with the camera will take the image and then the system will compare that image with 
        the image you uploaded when you first signed up. If all went according to plan, you should be in!  
  
      </p>
      <h2>Understanding the Election Ballot</h2>
      <p>
        The ballots can be found on the Election Dashboard Page or via the Club Elections 
        page by first finding the club’s page. On the dashboard, you see active, upcoming, 
        and past elections by clicking the drop-down menu. 
      </p>
      <div class="py-4">
          <img :src="require(`../assets/how/electionDropdown.png`)"  class="howImgs rounded-2xl border-4 border-gray-300"/>
      </div>
      <p>
        At the top of each ballot (from top to bottom), you will see the club's name, 
        the name of the election, and the candidates' position. Below that, you can click 
        a hyperlink that will take you to where the votes are being stored on the Solana blockchain. 
        Finally, just under that is the start date of the election and the end date.  
      </p>
      <div class="py-4">
          <img :src="require(`../assets/how/ballotTop.png`)"  class="howImgs2 rounded-2xl border-4 border-gray-300"/>
      </div>
      <p>
      At the bottom of the ballot, there are three sections in columns (from left to right), Candidates, Selection, and Tally: 
      <br>• The Candidate section displays each candidate's name. You can click on the name where a popup will appear that 
      displays the entire name and profile of the candidate.
      <br>• The Selection column displays a corresponding button for each candidate. When ready, you can click on the 
      button for the candidate you want to vote for. This opens a popup asking you to confirm your selection. There are NO do-overs; 
      confirm your selection from the name displayed in the popup!
      <br>• The Tally section displays the amount of votes each candidate has received. There are two numbers displayed. 
      The first number is the vote count stored in a traditional database. The second number is the vote count stored on the blockchain.
       These two numbers should always be the same. 
      </p>
      <div class="py-4">
        <img :src="require(`../assets/how/ballotBottom.png`)"  class="howImgs2 rounded-2xl border-4 border-gray-300"/>
      </div>
      <h2>Setting Up an Election</h2>
      <p>    
      You must first visit the Club Elections page to set up an election. Next, click on a club, or you can click on the 
      FIU logo to create a general election. The elections can be viewed by club on each of their corresponding pages, 
      or every election available can be found on the Election Dashboard page.
      <br>Click on the New Election button that will take you to the New Election page. You can then enter an Election Name 
      and Position for the election. These are optional selections. 
      </p>
      <div class="py-4">
        <img :src="require(`../assets/how/newElectionIntro.png`)"  class="howImgs2 rounded-2xl border-4 border-gray-300"/>
      </div>
      <p>
      Below this is the Candidates section. You can click the Add button to add a candidate or the Remove button to remove a candidate. 
      </p>
      <div class="py-4">
        <img :src="require(`../assets/how/candidates.png`)"  class="howImgs2 rounded-2xl border-4 border-gray-300"/>
      </div>
      <p>
      When the Add button is clicked, a candidate card will appear on the screen. Here you can enter the candidate's First Name, 
      Last Name, and a Description Profile. The description is set to a maximum of 305 characters. The description section can 
      also be expanded by clicking and dragging the text box's lower right corner for better viewing. The First and Last Names 
      are mandatory entries; you must enter the first and last name of the candidate. 
      </p>
      <div class="py-4">
        <img :src="require(`../assets/how/candidateCard.png`)"  class="howImgs2 rounded-2xl border-4 border-gray-300"/>
      </div>
      <p>
      Under the candidates’ card, there is a Date/Time section. This will help all will-be voters find your election in the election 
      dashboard. It is not currently a mandatory section, but it is still recommended you take the time to fill out these sections. 
      </p>
      <div class="py-4">
        <img :src="require(`../assets/how/dateTime.png`)"  class="howImgs2 rounded-2xl border-4 border-gray-300"/>
      </div>
      <p>
      Click on the input field where you can choose a date. Next, click the little clock image to set the time. Once you have made 
      your selection, click “Select” in the lower right of the menu. The date and time will display in the input box. 
      </p>
      <div class="py-4">
        <img :src="require(`../assets/how/dateTimeSelect.png`)"  class="howImgs2 rounded-2xl border-4 border-gray-300"/>
      </div>
      <p>
      Finally, review the form and make any corrections. Then click Create Election! Give it a few moments for all the data to be saved. 
      Click on the Election Dashboard link in the nav bar at the top of the website to confirm it worked. If not displayed yet, wait 
      another moment and click Election Dashboard again. Success! Happy voting 😊
      </p>  
      <div class="py-4">
        <img :src="require(`../assets/how/create.png`)"  class="howImgs2 rounded-2xl border-4 border-gray-300"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.how{ max-width: 700px;
  margin:auto;

}
p{
  text-align: justify;
  text-indent: 50px;
  word-spacing: -2px;
  font-size: 1.25rem/* 20px */;
  line-height: 1.75rem/* 28px */;
  margin-top: 0.5rem/* 8px */;
}
h2{
  padding-top: 18px;
  padding-bottom: 5px;
  font-size: 1.875rem/* 30px */;
  line-height: 2.25rem/* 36px */;
  font-weight: 700;
}
.howImgs{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  height: auto;
}
.howImgs2{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  height: auto;
}
</style>
