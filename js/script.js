$(document).ready(function(){

  // Находим в ДОМе элементы для карусели
  var carousel_1 = $('#slider-promo-bg');
  var carousel_2 = $('#slider-promo-list');
  var carousel_3 = $('#review-carousel');
  var carousel_4 = $('#offersSlider');

  // Инициируем карусели
  carousel_1.owlCarousel({ items: 1 });
  carousel_2.owlCarousel({ items: 1 });
  carousel_3.owlCarousel({ items: 2 });
  carousel_4.owlCarousel({ items: 1 });

  // Следим за кликом на первой ссылке-переключаетеле
  $('#promo-family').on('click', function(e){
    e.preventDefault();
    carousel_1.trigger('to.owl.carousel', 0);
    carousel_2.trigger('to.owl.carousel', 0);
  });

  // Следим за кликом на второй ссылке-переключаетеле
  $('#promo-corporate').on('click', function(e){
    e.preventDefault();
    carousel_1.trigger('to.owl.carousel', 1);
    carousel_2.trigger('to.owl.carousel', 1);
  });
  
  //Следим за стрелкой влево в отзывах
    $('#feedbackLeft').on('click', function(e){
    e.preventDefault();
    carousel_3.trigger('to.owl.carousel', 0);
  });

    //Следим за стрелкой вправо в отзывах
    $('#feedbackRight').on('click', function(e){
    e.preventDefault();
    carousel_3.trigger('to.owl.carousel', 1);
  });
  
  //Разворачиваем отзывы
  //  $('#showAllReviews').on('click', function(e){
  //     e.preventDefault();
  //     $("#review-carousel").data('owlCarousel').destroy();
  // });

  //Акции и предложения
    $('#btnOffersLeft').on('click', function(e){
    e.preventDefault();
    carousel_4.trigger('to.owl.carousel', 0);
  });
  
    $('#btnOffersRight').on('click', function(e){
    e.preventDefault();
    carousel_4.trigger('to.owl.carousel', 1);
  });

  // Карусель отзывов
  var reviewCarousel = $('#review-carousel');

  // Счётчик времени
  var reviewInitTimeCounter;

  // При изменении ширины окна проверяем нужно включить или выключить карусель
  $(window).on('resize', function(){
    clearTimeout(reviewInitTimeCounter); // Обнулим счетчик времени
    reviewInitTimeCounter = setTimeout(reviewCarouselTrigger, 100); // Установим время срабатывания
  });

  // Сразу после загрузки страницы тоже проверяем
  reviewCarouselTrigger();

  // Функция проверки необходимости включить/выключить карусель
  function reviewCarouselTrigger() {
    if ($('body').outerWidth() >= 1200) {
      reviewCarousel.owlCarousel({ 
        items: 2
       });
    }
    else {
      reviewCarousel
        .trigger('destroy.owl.carousel')
        .removeClass('owl-carousel owl-loaded')
        .find('.owl-stage-outer')
        .children()
        .unwrap();
    }
  }

});
