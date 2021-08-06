(function($) {

    "use strict";
    

    var banner_carousel = function($scope, $) {

            // banner-carousel
    
                //Main Slider Carousel
                if ($('.main-slider-carousel').length) {
                    $('.main-slider-carousel').owlCarousel({
                        loop:true,
                        margin:0,
                        nav:true,
                        animateOut: 'fadeOut',
                        animateIn: 'fadeIn',
                        active: true,
                        smartSpeed: 1000,
                        autoplay: 6000,
                        navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
                        responsive:{
                            0:{
                                items:1
                            },
                            600:{
                                items:1
                            },
                            1200:{
                                items:1
                            }
                        }
                    });    		
                }
  
        
    }

    var testimonial_carousel = function($scope, $) {
        if ($('.two-column-carousel').length) {
            $('.two-column-carousel').owlCarousel({
                loop:true,
                margin:30,
                nav:true,
                smartSpeed: 500,
                autoplay: 1000,
                navText: [ '<span class="flaticon-left-1"></span>', '<span class="flaticon-right-1"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    800:{
                        items:2
                    },
                    1024:{
                        items:2
                    }
                }
            });    		
        }
    }


    var brand_carousel = function($scope, $) {
        if ($('.clients-carousel').length) {
            $('.clients-carousel').owlCarousel({
                loop:true,
                margin:70,
                nav:false,
                smartSpeed: 2000,
                autoplay: true,
                navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    800:{
                        items:4
                    },			
                    1200:{
                        items:5
                    }
    
                }
            });    		
        }
    }

    var project_carousel = function($scope, $) {
        if ($('.single-item-carousel').length) {
            $('.single-item-carousel').owlCarousel({
                loop:true,
                margin:30,
                nav:false,
                smartSpeed: 500,
                autoplay: true,
                navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    800:{
                        items:1
                    },			
                    1200:{
                        items:1
                    }
    
                }
            });    		
        }
    }




    var team_carousel = function($scope, $) {

            if ($('.four-item-carousel').length) {
                $('.four-item-carousel').owlCarousel({
                    loop:true,
                    margin:30,
                    nav:true,
                    smartSpeed: 500,
                    autoplay: 5000,
                    navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:2
                        },
                        800:{
                            items:3
                        },
                        1024:{
                            items:3
                        },
                        1200:{
                            items:4
                        }
                    }
                });    		
            }
 	
    }

  
    var service_carousel = function($scope, $) {
    
            if ($('.three-item-carousel').length) {
                $('.three-item-carousel').owlCarousel({
                    loop:true,
                    margin:30,
                    nav:true,
                    smartSpeed: 1000,
                    autoplay: 500,
                    navText: [ '<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>' ],
                    responsive:{
                        0:{
                            items:1
                        },
                        480:{
                            items:1
                        },
                        600:{
                            items:2
                        },
                        800:{
                            items:2
                        },
                        1024:{
                            items:3
                        }
                    }
                });    		
            }   	
    }

    //Elementor JS Hooks
    $(window).on('elementor/frontend/init', function() {
         elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_banner.default', banner_carousel);
         elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_testimonial.default', testimonial_carousel);
         elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_clients.default', brand_carousel);
         elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_portfolio.default', project_carousel);
         elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_team.default', team_carousel);
         elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_product_grid.default', team_carousel);
         elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_service.default', service_carousel);
         elementorFrontend.hooks.addAction('frontend/element_ready/carneshop_blog.default', service_carousel);

    });

})(window.jQuery);