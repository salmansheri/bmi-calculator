const express = require("express");
const body = require("body-parser");
const app = express();

app.use(body.urlencoded({extended:true}));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req,res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var bmi = [weight/height/height] * 10000
  res.send("the bmi is " + bmi);
});
app.listen(3000,function() {
  console.log("server is running in port 3000");
});
