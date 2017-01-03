$(document).ready(function() {

  // fixed navigation after scroll

  $(window).scroll(function() {
    if ($(this).scrollTop() > $('header').height() + 80) {
      $('nav').addClass('fixed');
      $('main').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
      $('main').removeClass('fixed');
    }
  });

  function showEmailForm() {
    $('#button-email-form').on('click', function() {

    });
  }

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
