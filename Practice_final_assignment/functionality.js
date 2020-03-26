// Changes question
document.addEventListener('DOMContentLoaded',
function(){
  document.querySelector("button").onclick=submit;
})
let counter = 1;
let current_score = 0;
let smartscore =0;
function submit(){
  counter = counter + 1
  var x = Math.floor((Math.random() * 10) + 1);
  var y = Math.floor((Math.random() * 10) + 1);
  var values =[x,y,counter],
      valueToUse = values[Math.floor(Math.random()* counter)];
  var one = Number(document.getElementById("number1").innerHTML)
  var two = Number(document.getElementById("number2").innerHTML)
  var three = Number(document.getElementById("number3").innerHTML)
  var answers = []
  var options = ["question1", "question2", "question3"]
  var correct = []
  var right = false;

  // Changes the question
  document.querySelector("#question").innerHTML = `Pick Every ${counter}`;
  document.getElementById("number1").innerHTML = x;
  document.getElementById("number2").innerHTML = counter;
  document.getElementById("number3").innerHTML = y;


  // Completed test
      if(counter >= 11){
        document.querySelector("#question").innerHTML = "Completed"
        document.querySelector("#choices").innerHTML =""
      }

  // Generates the score

// Gets the correct answers
//   if(one == (counter - 1)){
//     answers[0] = true
//   }
//   else {
//     answers[0] = false
//   }
//   if(two == (counter - 1)){
//     answers[1] = true
//   }
//   else {
//     answers[1] = false
//   }
//   if(three == (counter - 1)){
//     answers[2] = true
//   }
//   else {
//     answers[2] = false
//   }
//
// //Compares correct asnwers with answers
//   for (var i = 0; i < answers.length; i++) {
//     if(answers[i] == document.getElementById("number1").checked){
//       right = true;
//       console.log("This is True");
//     }
//     else {
//       right = false;
//       console.log("This is False");
//     }
//
//     console.log(answers[i]);
//
//   }
//
// // Changes score
//   for (var i = 0; i < correct.length; i++) {
//     if (correct[i] == answers[i]) {
//       right =true;
//     }
//     else {
//       right = false
//     }
//
//   }


  if (document.getElementById("question1").checked == answer) {
      current_score = current_score + 1
      console.log(`Number we are comparing ${one}`);
      console.log(`Checking ${counter -1 }`);
      document.getElementById("score").innerHTML = `Score: ${current_score}`;
    }
  if (document.getElementById("question2").checked && two == (counter - 1)) {
      current_score = current_score + 1
      console.log(`Number we are comparing ${two}`);
      console.log(`Checking ${counter -1 }`);
      document.getElementById("score").innerHTML = `Score: ${current_score}`;
    }
    if (document.getElementById("question3").checked && three == (counter - 1)) {
        current_score = current_score + 1
        console.log(`Number we are comparing ${three}`);
        console.log(`Checking ${counter -1 }`);
        document.getElementById("score").innerHTML = `Score: ${current_score}`;
      }
    //
    //
    //
    //
    //
    // // Generates Smartscore
    // smartscore = (current_score * 100)/10;
    // document.querySelector("#smart_score").innerHTML = `SmartScore : ${smartscore}`
}
