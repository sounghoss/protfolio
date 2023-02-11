$(function(){


    $(window).load(function(){
        $(".loading").fadeIn(500).delay(1000).fadeOut(500);
    });

    $(window).load(function(){

        $('section .left .line').delay(1500).animate({
            height: '100%'
        },1000,'swing').animate({
            opacity: '0.5'
        },1000);

        $('section .left .line-bottom').delay(1500).animate({
            width: '100%'
        },1000,'swing').animate({
            opacity: '0.5'
        },1000);

        $('section .right .line').delay(1500).animate({
            width: '100%'
        },1000,'swing').animate({
            opacity: '0.5'
        },1000);

        $('section .right .line-vertical').delay(1500).animate({
            height: '100%'
        },1000,'swing').animate({
            opacity: '0.5'
        },1000);
    });


    var swiper01 = new Swiper(".mySwiper", {
        loop : true,
        loopAdditionalSlides : 1,
        auto: true,
        slidesPerView: 1,
        spaceBetween: 40,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: { //반응형 width 

            600: { slidesPerView: 2,},
            768: { slidesPerView: 3, }, 
            1400: { slidesPerView: 4, },
        },
    });


    const $text = document.querySelector(".text");
    const letters = [
        "웹퍼블리셔",
        "박성호 입니다.", 
        "반가워요!"
    ];
    const speed = 100;
    let i = 0;

    const typing = async () => {  
    const letter = letters[i].split("");
    
        while (letter.length) {
            await wait(speed);
            $text.innerHTML += letter.shift(); 
        }
        
        await wait(800);
        remove();
    }

    const remove = async () => {
    const letter = letters[i].split("");
    
    while (letter.length) {
        await wait(speed);
        
        letter.pop();
        $text.innerHTML = letter.join(""); 
    }
    
    i = !letters[i+1] ? 0 : i + 1;
        typing();
    }

    function wait(ms) {
        return new Promise(res => setTimeout(res, ms))
    }

    setTimeout(typing, 1500);


    



    var options = {
        text:"",
        textEffect:"neon",
        position:"top-left",
        starCount: 15,
        staticStarCount: 30,
    };
    var div = new Hakademy.util.meteor(".meteor", options);

    // $("input:not([type=checkbox])").on("input", function(){
    //     changeOptions($(this).attr("name"), $(this).val());
    // });
    // $("input[type=checkbox]").change(function(){
    //     if($(this).prop("checked"))
    //         changeOptions($(this).attr("name"), $(this).val());
    //     else
    //         changeOptions($(this).attr("name"), null);
    // });

    optionDisplay();

    function changeOptions(k, v){
        div.set(k, v);
        
        optionDisplay();
    };
    function optionDisplay(){
        var line = "<ul>";
        for(var i in div.options){
            var str = "[" + i + "] : " + div.options[i];
            line += "<li>";
            line += str;
            line += "</li>";
        }
        line += "</ul>";
        $(".option-display").html(line);
    };    


});
