$(".post-wrapper").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint:900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              
            }
        },
        {   
         breakpoint: 530,
         settings: {
             slidesToShow: 1,
             slidesToScroll: 1
            
            }   
        },
    ]
});