// console log

console.log('Welcome');

// insert HTML

document.getElementById('click-me').innerHTML = '<center><button type="button">click me</button></center>';

// insert HTML on click

document.getElementById('click-me').addEventListener('click', function(){
    document.getElementById('show-me').innerHTML = '<p style="text-align:center">show me</p>';
});
