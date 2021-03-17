$(document).ready(()=>{
    $(window).scroll(()=>
    {
        if(this.scrollY > 20)
        {
            $('.navbar').addClass("sticky");
        }
        else  
        {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass("show");
        }
        else  
        {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(() => 
    {
        $('html').animate({scrollTop: 0});
    });

    var typed = new Typed (".typing", {
        strings: ["Designer", "Developer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed (".typing-2", {
        strings: ["Designer", "Developer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.menu-btn').click(()=>
    {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    //carreeeee
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        respoonsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});