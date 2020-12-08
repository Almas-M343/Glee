$(function(){


    $('.filter-price__input').ionRangeSlider({
      type: "double",
    //   prefix: "$",
      onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
      },
      onChange: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
    },

  });

  $('.filter__recent-stars').rateYo({
    rating: 3.2,
    starWidth: "17px",
    noramlFill:"#CCCCCE",
    ratedFill:"#FFC35B",
    readOnly:true,
  });

      
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