const express = require("express");

const router = express.Router();


const burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/", function(req, res) {
    burger.create([
      "burger_name"  //FIX...............
    ], [
      req.body.burger_name //FIX..............
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });  //????? Dont Know
    });
  });
  
  router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured  //FIX.............
    }, condition, function(result) {
      if (result.changedRows == 0) {  ///????Dont Know
       
        return res.status(404).end();
      } else {
        res.redirect('/');
      }
    });
  });
  
  
  
  // Export routes for server.js to use.
  module.exports = router;
  