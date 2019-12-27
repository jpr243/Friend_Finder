//Pull in required dependency
var path = require("path");

//Export HTML routes
module.exports = function(app) {
  //Survey Page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
  //Home Page
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
