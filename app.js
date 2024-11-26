

const owl = $('.owl-carousel');
owl.owlCarousel({
    center:true,
    loop:true,
    items:5,
    margin: 20,
    dots: true,
});
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})

