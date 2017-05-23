require.config({
    baseUrl: 'module',
    paths:{
        'jquery': '../jquery/jq3.2.1'
    }
})
requirejs(["jquery","lazy","gotop",'carousel'],function ($,Lazy,Gotop,Carousel) {
    new Gotop();
    new Lazy($("#news"));
    new Carousel.init($('.carousel'))
})