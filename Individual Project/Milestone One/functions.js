// Loads contents first then tells the site what to do after a button is clicked
document.addEventListener('DOMContentLoaded',
function(){
  document.getElementById("quiz_select_submit").onclick = chose;
  document.getElementById("quiz_one_questions").onclick = timed_encouragment;
  document.getElementById("quiz_two_questions").onclick = timed_encouragment;
  document.getElementById("explanation_close").onclik = questions;
})
let counter = 0;
// Chooses an option of which quiz
    function chose(){
      document.getElementById("login").style.display = 'none';
      if (document.getElementById("quizes").selectedIndex == 0) {
        display_quiz_one()
      }
      else if (document.getElementById("quizes").selectedIndex == 1) {
        display_quiz_two()
      }
    }

// populate questions
// QUIZ 1
  function display_quiz_one (){
    document.getElementById("quiz1").style.display = 'block';
  }

// Quiz 2
  function display_quiz_two (){
      document.getElementById("quiz2").style.display = 'block';
  }

// Finds the score
  function score(){
    if(answer == correct answer){
        counter + 1;
      }
      else{
        counter + 0;
      }
  }

// Displays message or explanation for a set time
function timed_encouragment(){
  if(answer == correct answer){
    setTimeout(encouragment, 0000)
    setTimeout(questions, 10000)
  }
  else{
    explanation()
  }

  return false;
}

// Randomizes encourgament
function encouragment(){
  var encouragment = ["Goodjob", "Welldone", "Keep It Going"]
  var randomEncourgment = encouragment[Math.floor(Math.random()*encouragment.length)];
  document.getElementById("login").style.display = 'none';
  document.getElementById("quiz1").style.display = 'none';
  document.getElementById("quiz2").style.display = 'none';
  document.getElementById("encouragment_grid").style.display = 'block';
  document.getElementById("encouragment").innerHTML = randomEncourgment;
}

// shows explanation
function explanation(){
  document.getElementById("explanation").style.display = 'block'
  if(current question id == question id from json){
    document.getElementById("question_explanation").innerHTML = `explanation: ${question explanation}`
  }
}




// const fetch = require("node-fetch");
// async function fetch_users() {
//   try{
//     const response = await fetch('https://my-json-server.typicode.com/sguthrie16/CUS1172_Project_4/db')
//     const result = await response.json()
//     console.log(result)
//   }catch(err){
//     console.error(err);
//   }
// }
// fetch_users()
