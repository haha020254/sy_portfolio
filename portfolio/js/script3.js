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



//scrollTrigger
$(function(){
    gsap.registerPlugin(ScrollTrigger);


    gsap.timeline({
        scrollTrigger: {
            trigger: '.mockup',
            start: 'top top',
            pin :true,
            pinSpacing:false,
            //markers:true
        }
    })


    gsap.timeline({
        scrollTrigger: {
            trigger: 'footer',
            start:'10% 100%',
            end:'0% 0%',
            scrub: 1,
            //markers: true
        }
    })

    .to('footer', {backgroundColor:'#fff',color:'#444',ease:'none',duration:3},0)
    .to('.goTop a.btn', {border:'1px solid #000',ease:'none',duration:.1},0)
    .to('.goTop a .st0', {stroke:'#000', ease:'none',duration:.1},0)




    gsap.utils.toArray('.ncsBox').forEach((section,i)=>{

        ScrollTrigger.create({
            trigger: section,
            start:'top top',
            pin:true,
            pinSpacing:false,
            //markers: true,
        })
    })

    ScrollTrigger.create({
        snap:1 / (section.length - 1)
    })

    


});

    // goTop
    $(function(){
        $('.goTop').on('click',function(){
            const top = $('body').offset().top; //body의 top의 위치값을 변수 top에게 대입
            //offset() 함수는 원하는 선택자의 위치값을 top, left 형식을 변환하여 줍니다.
            $('html, body').animate({scrollTop : (top)}, 1000);
        });
    });


    $(function(){
        $('.menuOpen .open .contact').on('click',function(){
    
            $('html, body').animate({scrollTop : $('body').offset().top +13000},1000);
        })
    })