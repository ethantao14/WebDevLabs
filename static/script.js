var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function SumNPrint(x1, x2)
{
    x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if(C.length > z)
{
    console.log(C);
}

else if(C.length < z)
{
    console.log(z);
}

else if(C.length === z)
{
    console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

/*
function findTheBanana(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        if(arr[i] === "Banana")
        {
            alert("Found the Banana in " + i);
        }
    }
}

findTheBanana(L1);
findTheBanana(L2);
*/

function findTheBanana(str)
{
    if(str === "Banana")
    {
        alert("We found a banana in the array");
        return;
    }
}

//L1.forEach(findTheBanana);
//L2.forEach(findTheBanana);

function greetingFunc()
{
    var d = new Date();
    var h;
    h = d.getHours();

    if(h >= 5 && h < 12)
        //console.log("Good morning");
        document.getElementById("time").innerHTML 
        = "Good morning, I am Ethan Tao";
    else if(h >= 12 && h < 18)
        //console.log("Good afternoon");
        document.getElementById("time").innerHTML 
        = "Good afternoon, I am Ethan Tao";
    else if(h >= 18 && h < 20)
        //console.log("Good evening");
        document.getElementById("time").innerHTML 
        = "Good evening, I am Ethan Tao";
    else if((h >= 20 && h < 24) || (h >= 0 && h < 5))
        //console.log("Good night");
        document.getElementById("time").innerHTML 
        = "Good night, I am Ethan Tao";
}

greetingFunc();

function addYear()
{
    var d = new Date();
    var y = d.getFullYear();

    document.getElementById("copyYear").innerHTML += " " + y;
}

function showList()
{
    document.getElementById("hobbiesList").style.display = "block";
    document.getElementById("viewButton").style.display = "none";
}

$(document).ready(function(){
    $("#long-bio, #read-less").hide();
  
    $("#read-more").click(function(){
      $("#long-bio").slideDown();
      $("#read-more").hide();
      $("#read-less").show();
    });
  
    $("#read-less").click(function(){
      $("#long-bio").slideUp();
      $("#read-less").hide();
      $("#read-more").show();
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("comment");
    const form = document.getElementById("contactForm");
    function validateName() {
      if (!nameInput.checkValidity()) {
        console.log("Please enter your name.");
        return false;
      }
      return true;
    }
    function validateEmail() {
      if (!emailInput.checkValidity()) {
        //console.log("Please enter a valid email address.");
        document.getElementById("feedback").innerHTML = "Please enter a valid email address.";
        return false;
      }
      return true;
    }
    function validateMessage() {
      if (!messageInput.checkValidity()) {
        console.log("Please enter your message.");
        return false;
      }
      return true;
    }
})