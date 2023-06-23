
(function ($) {
    "use strict";

    $(window).on('load', function () {
        $('body').addClass('loaded');
    });

    // Funções do header

    $(function () {
        var header = $("#header"),
            yOffset = 0,
            triggerPoint = 80;
        $(window).on('scroll', function () {
            yOffset = $(window).scrollTop();

            if (yOffset >= triggerPoint) {
                header.addClass("navbar-fixed");
            } else {
                header.removeClass("navbar-fixed");
            }

        });
    });

    // Carrossel de ofertas

    $(document).ready(function () {
        $(".js-slider").slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        })
    }
    );

    fetch('https://raw.githubusercontent.com/alexseixasv/propz-landing-page/main/ofertas.json')
        .then(response => response.json())
        .then((data) => {
            data.produtos.forEach((el) => {
                console.log(el)
                $('.js-slider').slick(
                    "slickAdd",
                    `<div class="card">
                    <img src="${el.imagem}" alt="perfume" width="200"/>
                    <h4 class= "titulo" > ${el.titulo} </h4 >
                    <h6>${el.descripcion}</h6>
                    <div>
                    <h5 class="parcelado">${el.parcelas}</h5>
                    <div class="cartoes"><img height="18" width="60" src="./img/cartoes.jpg"/>
                    </div>
                    <h5 class="vista">${el.moeda}: ${el.preco} a vista</h5>
                    </div>
                    <a class="buybutton">Comprar</a>
                    </div>
                    `
                )
            })
        })

    /*=========================================================================
        Counter Up Active
    =========================================================================*/
    var counterSelector = $('.counter');
    counterSelector.counterUp({
        delay: 10,
        time: 1000
    });

    /*=========================================================================
        Initialize smoothscroll plugin
    =========================================================================*/
    smoothScroll.init({
        offset: 60
    });

    /*=========================================================================
        Active venobox
    =========================================================================*/
    var vbSelector = $('.img_popup');
    vbSelector.venobox({
        numeratio: true,
        infinigall: true
    });

    /*=========================================================================
        Scroll To Top
    =========================================================================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });


    /*=========================================================================
        wow Settings
    =========================================================================*/
    var wow = new WOW({
        mobile: false,
        offset: 150
    });
    wow.init();

})(jQuery);
