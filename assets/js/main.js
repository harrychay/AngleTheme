(function ($) {
  "use strict";
  /*--------------------Variables--------------------*/
  var $window = $(window),
  $document = $(document), 
  $body = $('#wrapper'),
  $preloader =$('.loader-body'),
  $toggleMenuIn = $('.menu-toggle'),
  $toggleTarget= $('.main-menu'),
  $toggleMenuOut = $('.main-menu a'),
  $sticky = $(".sticky"),
  $scrollLink = $('.scroll'),
  $parallex = $('.parallex'),
  $counter = $('.progess-counter'),
  $progressBar = $('.progress-bar'),
  $portfolioGrid = $('.portfolio-grid'),
  $portfolioFilter = $('.portfolio-filter'),
  $portfolioGridItem = ('.portfolio-grid .item'),
  $imgLightbox = $('[data-fancybox]'),
  $blogSlider =$('.blogs-slider'),
  $testimonialSlider = $('.client-testimonial-slider');


  /*--------------------preloader init--------------------*/
  $window.on('load', function(){
    setTimeout(function() {
      $preloader.fadeOut('slow');
    }, 300);
  });
  /*--------------------wow js init--------------------*/
  new WOW().init();
  /*--------------------sticky menu--------------------*/
  $document.on('scroll', function () {
    var $docScroll = $(this).scrollTop();

    if ($docScroll >= 100) {
      $sticky.addClass('fixed');
    } else {
      $sticky.removeClass('fixed');
    }
  });
  /*--------------------smooth scroll menu--------------------*/
  // Smooth scrolling
  $scrollLink.click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000, 'easeInOutExpo');
  });

    // // Active link switching
    $window.scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      $scrollLink.each(function() {
        var sectionOffset = $(this.hash).offset().top - 100;
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
    });


    /*--------------------toggle menu--------------------*/
    $toggleMenuIn.click(function(){
      $(this).toggleClass('toggle-active');
      $toggleTarget.toggleClass('open-nav');
    });
    $toggleMenuOut.click(function(){
      $toggleMenuIn.removeClass('toggle-active');
      $toggleTarget.removeClass('open-nav');
    });
    /*--------------------Skill Progress Bar--------------------*/
    $progressBar.appear(function() {
      $progressBar.each(function(){
        var $progressBarWidth = $(this).data('present');
        /*-- Skill Animation --*/
        $(this).css({'width': $progressBarWidth, 'opacity': '1', });
      });
    });

    /*----------- parallex scrolling ------------*/
    $document.scroll(function() {
      var $movebg = $window.scrollTop() * 0.4;
      $parallex.css('background-positionY', ($movebg) + 'px');
    }); 

    /*----------- counter js ------------*/
    $counter.counterUp({
    // delay: 10,
    time: 1000,
  });

    /*----------- isotope js ------------*/
    $portfolioGrid.imagesLoaded( function() {
      /*---- Filter List ----*/
      $portfolioFilter.on( 'click', 'button', function() {
        $portfolioFilter.find('button').removeClass('active');
        $(this).addClass('active');
        var $filterValue = $(this).attr('data-filter');
        $portfolioGrid.isotope({ filter: $filterValue });
      });
      /*---- Filter Grid ----*/
      $portfolioGrid.isotope({
        itemSelector: $portfolioGridItem,
        masonry: {
          columnWidth: $portfolioGridItem,
        }
      });
    });

    /*----------- fancybox js ------------*/
    $imgLightbox.each(function(){
      $(this).attr("data-caption", $(this).attr("title"));
    });
    $imgLightbox.fancybox();

    /*----------- blog slick js ------------*/
    $blogSlider.slick({
      dots: true,
      infinite: true,
      autoplay: true,
      lazyLoad: 'ondemand',
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      useTransform: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      arrows: false,
      swipeToSlide: true,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
    });

    /*----------- client testimonial slick js ------------*/
    $testimonialSlider.slick({
      dots: true,
      infinite: true,
      autoplay: true,
    // fade: true,
    lazyLoad: 'ondemand',
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    arrows: false,
    swipeToSlide: true,
  });

  })(jQuery); 
