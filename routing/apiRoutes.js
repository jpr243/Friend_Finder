// ===============================================================================
// LOAD DATA
// Linking the routes to the arrays of information on friends.
// ===============================================================================

var friends = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // When a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // Then the server saves the data to the userData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    var totalDifference = 0;
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    var userData = req.body;
    var userName = userData.name;
    var userScores = userData.scores;

    var b = userScores.map(function(item){
      return parseInt(item, 10);
    });
    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };

    console.log("name" + userName);
    console.log("User score" + userScores);

    var sum = b.reduce((a, b) => a + b, 0);
    console.log("Sum of users score " + sum);
    console.log("Best match friend diff " + bestMatch.friendDifference);
    console.log("=====================================================");

    for(var i = 0; i < friends.length; i++) {
        console.log(friends[i].name);
        totalDifference = 0;
        console.log ("Total Diff " + totalDifference);
        console.log("Best match friend diff " + bestMatch.friendDifference);

        var bfriendScore = friends[i].scores.reduce((a,b) => a + b, 0);
        console.log("Total friend score " + bfriendScore);
        totalDifference += Math.abs(sum - bfriendScore);
        console.log("----------------> " + totalDifference);

        if(totalDifference <= bestMatch.friendDifference) {
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
        console.log(totalDifference + " Total Difference");
    }
    console.log(bestMatch);
    friends.push(userData);
    console.log("New User added");
    console.log(userData);
    res.json(bestMatch);
  });
};
    

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
