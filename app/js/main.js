$(function(){
  $('.details-thumb').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical:true,
    arrows:false,
  });
      
  $('.details-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  });
      
    $('.slider-inner__items').slick({
        dots:true,
        arrows:false,
        fade:true,
        autoplaySpeed:2000
    });

$('.related-products__inner').slick({
        slidesToShow:4,
        slidesToScroll:1,

});

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