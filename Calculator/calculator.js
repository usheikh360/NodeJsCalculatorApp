//jshint esversion: 6
const express = require("express"); //require express
const bodyParser = require("body-parser");

const app = express(); //set up express
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

var a = Number(req.body.num1);
var b = Number(req.body.num2);
var result = a + b;
  res.send("The result is: " +result);
});

app.get("/bmiCalculator", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});


app.post("/bmiCalculator", function(req,res){

var a = parseFloat(req.body.weight);
var b = parseFloat(req.body.height);
var result = a/(b*b);
  res.send("The result is: " +result);
});





// app.get("/bmiCalculator", function(req,res){
//   res.sendFile(__dirname + "/bmiCalculator.html");
// });
//
// app.post("/bmiCalculator", function(req,res){
// var weight = parseFloat(req.body.weight);
// var height = parseFloat(req.body.height);
//
// var result = wieght/(height*height);
// res.send("Your BMI is: " + rsult);
// });


app.listen(3000,function(){
  console.log("Server running on port 3000");
});
