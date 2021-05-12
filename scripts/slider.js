$(document).ready(function() {
    $('.owl-carousel1').owlCarousel({
        items: 1,
        autoPlay: 30000,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [800, 1],
        navigation: true,
        navigationText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ]
    });
});
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 4,
        autoPlay: 3000,
        itemsDesktop : true,
        itemsDesktopSmall : true,
        itemsTablet: true,
        itemsMobile : true,
        navigation: true,
        navigationText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ]
    });
});