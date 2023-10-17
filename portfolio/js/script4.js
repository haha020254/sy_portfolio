$(document).on('click', 'a[href="#"]', function(e){
	e.preventDefault();
});

//01.splitting
$(function(){
    Splitting();
});

//sidemenu

$(function(){
    $('.sideMenu').on('click',function(){
        $('.menuOpen').addClass('on');
        $('.sideMenu').addClass('on');
    });
    
    $('.menuOpen a span').on('click',function(){
        $('.menuOpen').removeClass('on');
        $('.sideMenu').removeClass('on');
    });
});

// 헤더영역 스크롤방향 이벤트
$(function(){
    var prevScrollTop = 0;
    document.addEventListener('scroll',function(){
        var nowScrollTop = $(window).scrollTop()

        if(nowScrollTop > prevScrollTop){
            $('header').addClass('active');
        }
        else{
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    });
});



//scrolla.js
$(function(){
    $('.animate').scrolla({
        moblie:true,
        once: false
    });
});

$(function(){
    $('.mockup > .img').on('mouseenter',function(){
        $('.mockup .btn').addClass('on');
        $('.mockup > .img').addClass('on');
    });

    $('.mockup > .img').on('mouseleave', function(){
        $('.mockup .btn').removeClass('on');
        $('.mockup > .img').removeClass('on');
    });
});



//scrollTrigger
$(function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: '.concept',
            start:'0% 100%',
            end:'0% 0%',
            scrub: 1,
            //markers: true
        }
    })

    .to('.wrap', {backgroundColor:'#fff',color:'#444',ease:'none',duration:3},0)
    .to('.goTop a.btn', {border:'1px solid #000',ease:'none',duration:.1},0)
    .to('.goTop a .st0', {stroke:'#000', ease:'none',duration:.1},0)



    gsap.timeline({
        scrollTrigger: {
            trigger: '.concept .ideasketch',
            start:'0% 100%',
            end:'0% 0%',
            scrub: 1,
            //markers: true
        }
    })

    .to('.wrap', {backgroundColor:'#000',color:'#fff',ease:'none',duration:3},0)
    .to('.goTop a.btn', {border:'1px solid #fff',ease:'none',duration:.1},0)
    .to('.goTop a .st0', {stroke:'#fff', ease:'none',duration:.1},0)


    gsap.timeline({
        scrollTrigger: {
            trigger: '.wireframe',
            start:'0% 100%',
            end:'0% 0%',
            scrub: 1,
            //markers: true
        }
    })

    .to('.wrap', {backgroundColor:'#fff',color:'#444',ease:'none',duration:3},0)
    .to('.goTop a.btn', {border:'1px solid #000',ease:'none',duration:.1},0)
    .to('.goTop a .st0', {stroke:'#000', ease:'none',duration:.1},0)



    gsap.timeline({
        scrollTrigger: {
            trigger: '.coding',
            start:'0% 100%',
            end:'0% 0%',
            scrub: 1,
            //markers: true
        }
    })

    .to('.wrap', {backgroundColor:'#000',color:'#fff',ease:'none',duration:3},0)
    .to('.goTop a.btn', {border:'1px solid #fff',ease:'none',duration:.1},0)
    .to('.goTop a .st0', {stroke:'#fff', ease:'none',duration:.1},0)


});


//ideasketch

$(function(){
    $('.concept .ideasketch .right li.a').on('click',function(){
        $('.concept .ideasketch .right li.b').removeClass('on');
        $('.concept .ideasketch .right li.c').removeClass('on');
        $('.concept .ideasketch .right li.d').removeClass('on');
        $('.concept .ideasketch .right li.e').removeClass('on');
        $('.concept .ideasketch .right li.f').removeClass('on');
        $('.concept .ideasketch .left .img5').removeClass('on');
        $('.concept .ideasketch .left .img4').removeClass('on');
        $('.concept .ideasketch .left .img3').removeClass('on');
        $('.concept .ideasketch .left .img2').removeClass('on');
        $('.concept .ideasketch .left .img6').removeClass('on');
        $('.concept .ideasketch .left .img1').addClass('on');
        $('.concept .ideasketch .right li.a').addClass('on');
    });

    $('.concept .ideasketch .right li.b').on('click',function(){
        $('.concept .ideasketch .right li.a').removeClass('on');
        $('.concept .ideasketch .right li.c').removeClass('on');
        $('.concept .ideasketch .right li.d').removeClass('on');
        $('.concept .ideasketch .right li.e').removeClass('on');
        $('.concept .ideasketch .right li.f').removeClass('on');
        $('.concept .ideasketch .left .img5').removeClass('on');
        $('.concept .ideasketch .left .img4').removeClass('on');
        $('.concept .ideasketch .left .img3').removeClass('on');
        $('.concept .ideasketch .left .img6').removeClass('on');
        $('.concept .ideasketch .left .img1').removeClass('on');
        $('.concept .ideasketch .left .img2').addClass('on');
        $('.concept .ideasketch .right li.b').addClass('on');
    });

    $('.concept .ideasketch .right li.c').on('click',function(){
        $('.concept .ideasketch .right li.a').removeClass('on');
        $('.concept .ideasketch .right li.b').removeClass('on');
        $('.concept .ideasketch .right li.d').removeClass('on');
        $('.concept .ideasketch .right li.e').removeClass('on');
        $('.concept .ideasketch .right li.f').removeClass('on');
        $('.concept .ideasketch .left .img5').removeClass('on');
        $('.concept .ideasketch .left .img4').removeClass('on');
        $('.concept .ideasketch .left .img2').removeClass('on');
        $('.concept .ideasketch .left .img6').removeClass('on');
        $('.concept .ideasketch .left .img1').removeClass('on');
        $('.concept .ideasketch .left .img3').addClass('on');
        $('.concept .ideasketch .right li.c').addClass('on');
    });

    $('.concept .ideasketch .right li.d').on('click',function(){
        $('.concept .ideasketch .right li.a').removeClass('on');
        $('.concept .ideasketch .right li.c').removeClass('on');
        $('.concept .ideasketch .right li.b').removeClass('on');
        $('.concept .ideasketch .right li.e').removeClass('on');
        $('.concept .ideasketch .right li.f').removeClass('on');
        $('.concept .ideasketch .left .img5').removeClass('on');
        $('.concept .ideasketch .left .img6').removeClass('on');
        $('.concept .ideasketch .left .img3').removeClass('on');
        $('.concept .ideasketch .left .img2').removeClass('on');
        $('.concept .ideasketch .left .img1').removeClass('on');
        $('.concept .ideasketch .left .img4').addClass('on');
        $('.concept .ideasketch .right li.d').addClass('on');
    });

    $('.concept .ideasketch .right li.e').on('click',function(){
        $('.concept .ideasketch .right li.a').removeClass('on');
        $('.concept .ideasketch .right li.c').removeClass('on');
        $('.concept .ideasketch .right li.d').removeClass('on');
        $('.concept .ideasketch .right li.b').removeClass('on');
        $('.concept .ideasketch .right li.f').removeClass('on');
        $('.concept .ideasketch .left .img6').removeClass('on');
        $('.concept .ideasketch .left .img4').removeClass('on');
        $('.concept .ideasketch .left .img3').removeClass('on');
        $('.concept .ideasketch .left .img2').removeClass('on');
        $('.concept .ideasketch .left .img1').removeClass('on');
        $('.concept .ideasketch .left .img5').addClass('on');
        $('.concept .ideasketch .right li.e').addClass('on');
    });

    $('.concept .ideasketch .right li.f').on('click',function(){
        $('.concept .ideasketch .right li.a').removeClass('on');
        $('.concept .ideasketch .right li.c').removeClass('on');
        $('.concept .ideasketch .right li.d').removeClass('on');
        $('.concept .ideasketch .right li.e').removeClass('on');
        $('.concept .ideasketch .right li.b').removeClass('on');
        $('.concept .ideasketch .left .img5').removeClass('on');
        $('.concept .ideasketch .left .img4').removeClass('on');
        $('.concept .ideasketch .left .img3').removeClass('on');
        $('.concept .ideasketch .left .img2').removeClass('on');
        $('.concept .ideasketch .left .img1').removeClass('on');
        $('.concept .ideasketch .left .img6').addClass('on');
        $('.concept .ideasketch .right li.f').addClass('on');
    });
});


$(function(){
    $('.process .list .list1').on('click',function(){

        $('html, body').animate({scrollTop : $('body').offset().top +3900},1000);
    })
})

$(function(){
    $('.process .list .list2').on('click',function(){

        $('html, body').animate({scrollTop : $('body').offset().top +7300},1000);
    })
})

$(function(){
    $('.process .list .list3').on('click',function(){

        $('html, body').animate({scrollTop : $('body').offset().top +11000},1000);
    })
})

$(function(){
    $('.process .list .list4').on('click',function(){

        $('html, body').animate({scrollTop : $('body').offset().top +17000},1000);
    })
})

$(function(){
    $('.process .list .list5').on('click',function(){

        $('html, body').animate({scrollTop : $('body').offset().top +18100},1000);
    })
})


$(function(){
    $('.menuOpen .open .contact').on('click',function(){

        $('html, body').animate({scrollTop : $('body').offset().top +19000},1000);
    })
})



// goTop
    $(function(){
        $('.goTop').on('click',function(){
            const top = $('body').offset().top; //body의 top의 위치값을 변수 top에게 대입
            //offset() 함수는 원하는 선택자의 위치값을 top, left 형식을 변환하여 줍니다.
            $('html, body').animate({scrollTop : (top)}, 1000);
        });
    });
