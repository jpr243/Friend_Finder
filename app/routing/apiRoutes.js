//Pull in required dependencies
var path = require("path");

//Import the list of friend entries
var friends = require("../data/friends.js");

//Export API routes
module.exports = function(app) {
  //Total list of friend entries
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //Add new friend entry
  app.post("/api/friends", function(req, res) {
    //Capture the user input object
    var userInput = req.body;

    var userResponses = userInput.scores;

    //Compute best friend match
    var matchName = "";
    var matchImage = "";
    var totalDifference = 1000; //Make the initial value big for comparison

    //Check all existing friends in the list
    for (var i = 0; i < friends.length; i++) {
      // console.log("friends = "" + JSON.stringify(friends[i]));

      //Compute differences for each question
      var difference = 0;
      for (var j = 0; j < userResponses.length; j++) {
        difference += Math.abs(friends[i].scores[j] - userResponses[j]);
      }
      //console.log("difference = " + difference);

      //If lowest difference, record the friend match
      if (difference < totalDifference) {
        //console.log("Closest match found =" + difference);
        //console.log("Friend name = " + friends[i].name);
        //console.log("Friend image = " + friends[i].photo);

        totalDifference = difference;
        matchName = friends[i].name;
        matchImage = friends[i].photo;
      }
    }
    //after finding match, add user to friend array
    friends.push(userInput);
    //console.log("New User added");
    //console.log(userInput);

    //send back to browser the best friend match
    res.json({ status: "OK", matchName: matchName, matchImage: matchImage });
  });
};
