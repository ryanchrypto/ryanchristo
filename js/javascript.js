// console log

console.log('Welcome');

/* ---------------------------------------------------------------------------------------------------- */

// insert HTML

document.getElementById('click-me').innerHTML = '<button type="button" class="btn">click me</button>';

// insert HTML on click

document.getElementById('click-me').addEventListener('click', function(){
  document.getElementById('show-me').innerHTML = '<div class="button-clicked">the button was clicked</div>';
});

/* ---------------------------------------------------------------------------------------------------- */

// add style on click

document.getElementById('button-add').addEventListener('click', function(){
  document.getElementById('sample-text').classList.add('sample-text-add');
});

// remove style on click

document.getElementById('button-remove').addEventListener('click', function(){
  document.getElementById('sample-text').classList.remove('sample-text-add');
});

/* ---------------------------------------------------------------------------------------------------- */

// collect, append, and display data

document.getElementById("button-submit").addEventListener("click", function() {

  var username = document.getElementById("username").value;
  var message = "Your name is " + username;
  document.getElementById("display").innerHTML = message;

});

/* ---------------------------------------------------------------------------------------------------- */

document.getElementById("rps-submit").addEventListener("click", function() {

  var computer = Math.random();
  var human = document.getElementById("rps-input").value;

  if (computer > 0 && computer < 0.33) {

    computer = "rock";

  } else if (computer > 0.34 && computer < 0.66) {

    computer = "paper";

  } else if (computer > 0.67 && computer < 1){

    computer = "scissors";

  } else {

    computer = "dynamite";

  }

  document.getElementById("rps-human").innerHTML = "human: " + human;

  document.getElementById("rps-computer").innerHTML = "computer: " + computer;

  if ((computer === "rock" && human === "scissors") || (computer === "paper" && human === "rock") || (computer === "scissors" && human === "paper")) {

    document.getElementById("rps-result").innerHTML = "computer wins";

  } else if ((human === "rock" && computer === "scissors") || (human === "paper" && computer === "rock") || (human === "scissors" && computer === "paper")) {

    document.getElementById("rps-result").innerHTML = "human wins";

  } else if ((computer === "rock" && human === "rock") || (computer === "paper" && human === "paper") || (computer === "scissors" && human === "scissors")) {

    document.getElementById("rps-result").innerHTML = "nobody wins";

  } else if (computer === "dynamite" || human === "dynamite") {

    document.getElementById("rps-result").innerHTML = "everyone loses";

  } else {

    document.getElementById("rps-result").innerHTML = "incorrect input";

  }

});

/* ---------------------------------------------------------------------------------------------------- */
