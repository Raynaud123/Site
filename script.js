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