$(function(){

    var swiper01 = new Swiper(".mySwiper", {
        loop : true,
        // effect : 'fade', 
        auto: false,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    

    var controller1 = new ScrollMagic.Controller({globalSceneOptions: {duration: 1000}});
    
    new ScrollMagic.Scene({triggerElement: "#home"})
					.setClassToggle("#animate1", "open") // add class toggle
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller1)
    //                 .addIndicators({
    //                     name: "1"
    // }) 

    var controller2 = new ScrollMagic.Controller({globalSceneOptions: {duration: 597}});
    
    new ScrollMagic.Scene({triggerElement: "#about"})
					.setClassToggle("#animate2", "open") // add class toggle
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller2)
    //                 .addIndicators({
    //                     name: "2"
    // }) 

    var controller3 = new ScrollMagic.Controller({globalSceneOptions: {duration: 1180}});
    
    new ScrollMagic.Scene({triggerElement: "#portfolio"})
					.setClassToggle("#animate3", "open") // add class toggle
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller3)
    //                 .addIndicators({
    //                     name: "3"
    // }) 

    var controller4 = new ScrollMagic.Controller({globalSceneOptions: {duration: 620}});
    
    new ScrollMagic.Scene({triggerElement: "#contact"})
					.setClassToggle("#animate4", "open") // add class toggle
					// .addIndicators() // add indicators (requires plugin)
					.addTo(controller4)
    //                 .addIndicators({
    //                     name: "4"
    // }) 


    $('.top-btn').click(function(){
        $(window).scrollTop(0);
    });

    $('.m-menu-btn').click(function(){
        $('.m-menu-btn').toggleClass('open');
        $('.m-memu').toggleClass('open');
        $('body').toggleClass('hidden');
    });
    $('.m-memu ul li').click(function(){
        $('.m-menu-btn').toggleClass('open');
        $('.m-memu').toggleClass('open');
    });

    $('.ready').click(function(){
        alert('업데이트 예정입니다!');
    });

    AOS.init();

    $(window).scroll(function() {
        var sticky = $('header'),
            scroll = $(window).scrollTop();
        
        if (scroll >= 500) { 
            sticky.addClass('fixed'); 
        }else { 
            sticky.removeClass('fixed');
        }
    });

    // var subcontroller = new ScrollMagic.Controller();
    
    // var tween1 = TweenMax.to('#sub-animate1', 0.5, {
    //     y: 100
    // });
    
    // var scene = new ScrollMagic.Scene({
    //     triggerElement: "#sub-trigger1",
    //     duration: "100%"
    // })
    // .setTween(tween1)
    // .addTo(subcontroller)
    // // .addIndicators({
    // //     name: "1"
    // // }) 

    
    

});
