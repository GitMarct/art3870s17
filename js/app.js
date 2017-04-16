console.log("Date Time Script");

var  date = new Date();  //this creates a snapshot of the current time and day using the date object and stores it in a variable called date

var day = date.getDay(); // getDay() pulls the day out of the date object and stores it in a new variable called day. Days are recalled as integers 0,1,...6  - starting on Sunday

// Use comments to disable pieces of code
/* this is a way to comment a bunch of code */

switch(day) // a javascript switch statement evaluates the day and creates a message based on the day
{
case 0:
  document.getElementById("output").innerHTML = "Today is Sunday. If you're religious, don't forget to attend your mass today! Otherwise, make today a family day!";
 
  break;
case 1:
  document.getElementById("output").innerHTML = "Today is Monday. Don't feel tired: the week has only just begun!";
  document.getElementById("output").style.color = "red"; 
  break;
 case 2:
 document.getElementById("output").innerHTML = "Today is Tuesday. I like Tuesdays: they're usually just... well, that one cool day of the week, you know?";
  break; 
case 3:
 document.getElementById("output").innerHTML = "It's Wednesday today. Because it's a long name, does that mean today is a long day, too? Hang in there!";
  break;
case 4:
 document.getElementById("output").innerHTML = "Today is Thursday. It's a good day to look forward to the weekend! You're almost at the end of the week!";
  break;    
case 5:
 document.getElementById("output").innerHTML = "Thank goodness it's Friday! Can you feel the weight from the week coming off your shoulders?";
document.getElementById("output").style.color = "#23bc82";
  break;
  case 6:
 document.getElementById("output").innerHTML = "Aren't you happy it's Saturday today?";
  break;
    
  default:
 document.getElementById("output").innerHTML = "Not sure what day it is, actually. :P";
}