var questionCount = 0;
var score = 0;
var ans;
var timeOut = 0;
var rand;
var record = [];
var status = 0;

function $(id)
{
  return document.getElementById(id);
}
 var quiz = $("quiz");
var quizSet = $("quizSet");
var question = $("question");
var option1 = $(option1);
var option2 = $(option2);
var option3 = $(option3);
var option4 = $(option4);

var submit = $("submit");

var progress = $("progress");
var result = $("result");
var retake = $("retake");

 var button1 = $("btn1");
 var button2 = $("btn2");
 var button3 = $("btn3");
 var button4 = $("btn4");

 var tracker;
 var countDown;

 document.getElementById("first").addEventListener("click", displayQuestion); 

function displayQuestion()
{
  question.innerText = question.js.ques1.value;
}