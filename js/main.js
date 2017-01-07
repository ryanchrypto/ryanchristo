$('header').hide();
$('footer').hide();
$('main#welcome').hide();
$('main#about').hide();

$(document).ready(function() {

  // main navigation

  $('header').fadeIn(500);
  $('main#welcome').fadeIn(500);
  $('footer').fadeIn(500);

  $('#title').on('click', function () {
    $('main#about').fadeOut(500);
    setTimeout(function () {
      $('main#welcome').fadeIn(500, function () {
        // $('html,body').animate({
        //   scrollTop: $('header').offset().top
        // }, 500);
      });
    }, 500);
  });

  $('#about-button').on('click', function () {
    $('main#welcome').fadeOut(500);
    setTimeout(function () {
      $('main#about').fadeIn(500, function () {
        // $('html,body').animate({
        //   scrollTop: $('main#about').offset().top
        // }, 500);
      });
    }, 500);
  });

  // fixed navigation after scroll

  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > $('header').height()) {
  //     $('nav#main').addClass('fixed');
  //     $('main').addClass('fixed');
  //   } else {
  //     $('nav#main').removeClass('fixed');
  //     $('main').removeClass('fixed');
  //   }
  // });

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
