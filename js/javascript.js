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
