
//sticky header

  $(function() {
    var $win = $(window),
        $fv = $('.fv'),
        $header = $('.header')
        fvHeight = $fv.outerHeight(),
        fixedClass = 'fixed';
  
  $win.on('load scroll',function(){
    var value = $(this).scrollTop();
      if($win.width()>768)
  
        // if ( value > fvHeight) {
          $header.addClass(fixedClass);
          
        // } else {
        //   $header.removeClass(fixedClass);
          
        // }
      
  
    });
  });


  //ファーストビューのslider
  // $('.slider').slick({
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   speed: 1000,
  //   fade: true,
  //   cssEase: 'linear'
  // });

  $(document).ready(function(){
    // Slick Sliderの初期化
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      fade: true,
      cssEase: 'linear'
    });
  
    // スライダーをクリックしたときに次のスライドに進む
    $('.slider').on('click', function() {
      $(this).slick('slickNext');
    });
  });

  
  //ハンバーガーメニューの開閉
  $('.burger-btn').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $('.burger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
  });
