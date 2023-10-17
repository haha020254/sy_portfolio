$(document).on('click', 'a[href="#"]', function(e){
	e.preventDefault();
});

//01.splitting
$(function(){
    Splitting();
});

//scrolla.js
$(function(){
    $('.animate').scrolla({
        moblie:true,
        once: false
    });
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

//video
$(function(){

    ScrollTrigger.matchMedia({
        '(min-width:1024px)': function(){
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.video',
                    start: '70% 100%',
                    end : 'bottom bottom',
                    scrub: 1,
                    //markers: true
                }
            })
        
            .fromTo('.videoWrap video', {'clip-path':'inset(60% round 30%)'},{'clip-path':'inset(0% round 0%)', ease:'none', duration:'10'},0)
        
        
            gsap.timeline({
                scrollTrigger: {
                    trigger : '.visual',
                    // pin: true,
                    start: '0% 30%',
                    end: '50% 30%',
                    scrub :3,
                    //markers:true
                }
            })
            
                .fromTo('.visual .text .a',{x:'0%'},{x:'-300%',ease:'none', duration:5},0)
                .fromTo('.visual .text .b',{x:'0%'},{x:'300%',ease:'none', duration:5},0)
                .fromTo('.visual .text span', {opacity:'1'}, {opacity:'0',ease:'none',duration:1},0)
        }
    })

});



let text;

$(function(){

    

    function runSplit(){
        let currentElement = $('.split-lines');
        text = new SplitType(currentElement, { types: 'lines, words' });
        $(".line").append("<div class='line-mask'></div>");
    }
    runSplit();
    
    // window.addEventListener('resize',function(){
    //     text.revert();
    //     runSplit();
    // });

    $('.line').each(function(index){
        let triggerElement = $(this);
        let targetElement = $(this).find('.line-mask');

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start:'top 75%',
                end:'bottom 40%',
                scrub:2,
                //markers:true
            }
        });
        tl.to(targetElement,{
            width:'0%',
            duration:1
        })
    });



    gsap.timeline({
        scrollTrigger: {
            trigger: '.clone',
            start:'15% 100%',
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
            trigger: '.uiux',
            start:'10% 100%',
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
            trigger: '.ncs',
            start:'15% 100%',
            end:'0% 0%',
            scrub: 1,
            //markers: true
        }
    })
    
    .to('.goTop a.btn', {border:'1px solid #fff',ease:'none',duration:.1},0)
    .to('.goTop a .st0', {stroke:'#fff', ease:'none',duration:.1},0)


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

        $('html, body').animate({scrollTop : $('body').offset().top +14000},1000);
    })
})