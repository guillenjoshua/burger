const express = require("express");

const router = express.Router();


const burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/", function(req, res) {
    burger.create([
      "burger_name",
      "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function() {
      
      res.redirect("/")
    });
  });
  
  router.post("/update", function(req, res) {
    var condition = "id = " + req.body.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function() {
    
        res.redirect('/');
      
    });
  });
  
  


router.delete("/:id", function(req, res) {
  var condition = "id =" + req.params.id; 

  burger.delete(condition, function (){
    res.redirect("/");
  })
})

  
  // Export routes for server.js to use.
  module.exports = router;
  