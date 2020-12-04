$(function(){
    $('.slider-inner__items').slick({
        dots:true,
        arrows:false,
        fade:true,
        autoplaySpeed:2000
    });
    var mixer = mixitup('.products__items',{
        selectors:{
            control:'.products-filter__link'
        }
    });
    var mixerNew = mixitup('.new-product__items',{
        selectors:{
            control:'.new-products-filter__link'
        }
    });
});
// products__items