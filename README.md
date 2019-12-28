# Friend_Finder

##Introduction

In this activity, I built a compatibility-based "FriendFinder" application using famous movie stars. This full-stack site takes in results from the users' surveys, then compares their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

##Live Link

https://friendfinderjr.herokuapp.com/

##How to Use

Go to the live link and take the Friend Finder Survey.  Immediately after submitting the survey, your perfect friend will pop up.  There is also an API you can access to the friends on the network and their personalised information.

##Details of Requirements

-  The survey has 10 questions. Each answer is on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
-  NPM packages used include Express, Path and Body-Parser.
-  Separate JavaScript files for routing (htmlRoutes.js and apiRoutes.js)
-   The htmlRoutes.js file includes:
      -  A GET Route to /survey which displays the survey page.
      -  A default, catch-all route that leads to home.html which displays the home page.
-  The apiRoutes.js file includes:
      -  A GET route with the url /api/friends. This is used to display a JSON of all possible friends.
      -  A POST routes /api/friends. This is used to handle incoming survey results. This route will also be used to handle the
          compatibility logic.
-  The application's data is saved inside of app/data/friends.js as an array of objects.
-  The best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object.
-  A modal is then toggled, displaying the best match to the user who took the survey.

