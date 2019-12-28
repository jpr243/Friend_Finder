//Pull in required dependencies
var path = require("path");

//Import the list of friend entries
var friends = require("../data/friends");

//Export API routes
module.exports = function(app) {
  //Total list of friend entries
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  //Add new friend entry
  app.post("/api/friends", function(req, res) {
    var totalDifference;
    //Compute best friend match
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000 //Make the initial value big for comparison
    };

    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    console.log("Name: " + userName);
    console.log("User score: " + userScores);

    console.log("Best match friend diff: " + bestMatch.friendDifference);
    console.log(
      "-------------------------------------------------------------"
    );

    //Check all existing friends in the list
    for (var i = 0; i < friends.length; i++) {
      var currentFriends = friends[i];
      console.log(friends[i].name);
      totalDifference = 0;
      console.log("Total Diff " + totalDifference);
      console.log("Best match friend diff " + bestMatch.friendDifference);

      for (var j = 0; j < currentFriends.scores.length; j++) {
        var currentfriendScore = currentFriends.scores[j];
        var currentuserScore = userScores[j];
        totalDifference += Math.abs(
          parseInt(currentuserScore) - parseInt(currentfriendScore)
        );
      }

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

    console.log(bestMatch);
    friends.push(userData);
    console.log("New User Added");
    console.log(userData);
    res.json(bestMatch);
  });
};
