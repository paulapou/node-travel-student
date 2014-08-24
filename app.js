var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {

  console.log("Travel application is running!");

  var myName = "Paula";

  app.get("/rating/:rating", function (req, resp) {
    var rating = parseInt(req.params.rating)
    db.findArray({rating: rating }, function (results){ 
      resp.render("index", {locations: results}); 
    })
  })
});
   