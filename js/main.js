$(document).ready(function() {

  $('body').fadeIn(500);

  // main navigation smooth scrolling

  $('#navbar-home').on('click', function () {
    $('.parallax').animate({
      scrollTop: $('#home').position().top - $('#navbar').height()
    }, 500);
  });

  $('#navbar-about').on('click', function () {
    $('.parallax').animate({
      scrollTop: $('#about').position().top - $('#navbar').height()
    }, 500);
  });

  $('#navbar-skills').on('click', function () {
    $('.parallax').animate({
      scrollTop: $('#skills').position().top - $('#navbar').height()
    }, 500);
  });

  $('#navbar-projects').on('click', function () {
    $('.parallax').animate({
      scrollTop: $('#projects').position().top - $('#navbar').height()
    }, 500);
  });

  $('#navbar-contact').on('click', function () {
    $('.parallax').animate({
      scrollTop: $('#contact').position().top - $('#navbar').height()
    }, 500);
  });

  // main navigation active navigation buttons

  $('.parallax').on('scroll', function () {

    var top = $('.parallax').scrollTop();
    var home = $('#home').position().top - $('#navbar').height() - 100;
    var about = $('#about').position().top - $('#navbar').height() - 100;
    var skills = $('#skills').position().top - $('#navbar').height() - 100;
    var projects = $('#projects').position().top - $('#navbar').height() - 100;
    var contact = $('#contact').position().top - $('#navbar').height() - 200;

    if (top > about) {
      $('#navbar-about').addClass('active');
    } else {
      $('#navbar-about').removeClass('active');
    }

    if (top > skills) {
      $('#navbar-skills').addClass('active');
      $('#navbar-about').removeClass('active');
    } else {
      $('#navbar-skills').removeClass('active');
    }

    if (top > projects) {
      $('#navbar-projects').addClass('active');
      $('#navbar-skills').removeClass('active');
    } else {
      $('#navbar-projects').removeClass('active');
    }

    if (top > contact) {
      $('#navbar-contact').addClass('active');
      $('#navbar-projects').removeClass('active');
    } else {
      $('#navbar-contact').removeClass('active');
    }

  });

  // konami code

  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

  function konamiCode() {
    var index = 0;
    document.body.addEventListener('keydown', function(event) {
      var key = parseInt(event.detail || event.which);
      if (key === code[index]) {
        index++;
        if (index === code.length) {
          alert('Konami Code');
          index = 0;
        }
      } else {
        index = 0;
      }
    });
  }

  konamiCode();

});
