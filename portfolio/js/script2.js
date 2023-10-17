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

// $(function(){
//     $(window).on('scroll resize' , function(){
//         var scrollTop = 0;
//         scrollTop = $(document).scrollTop();

//         photo();


//         function photo(){
//             if(scrollTop>500){
//                 $('.photo').addClass('on');
//             }
//             else{
//                 $('.photo').removeClass('on');
//             }
//         }
//     });

    

// });


$(function(){
    $('.skillSvg').find('#ill').each(function(i,path){
        var length = path.getTotalLength();
        //alert(length);
    })
});



$(function(){

    


    gsap.timeline({
            scrollTrigger: {
                trigger: '.history',
                start:'0% 100%',
                end:'0% 0%',
                scrub: 1,
                //markers: true
            }
        })

        .to('.wrap', {backgroundColor:'#fff',color:'#444',ease:'none',duration:3},0)
        .to('.history',{color:'#444',ease:'none',duration:.1},0)
        .to('.goTop a.btn', {border:'1px solid #000',ease:'none',duration:.1},0)
        .to('.goTop a .st0', {stroke:'#000', ease:'none',duration:.1},0)


    gsap.timeline({
        scrollTrigger: {
            trigger: '.band_',
            start: '70% bottom',
            end: 'top top',
            scrub: 1,
            //markers: true
            
        }
    })

        .to('.wrap', {backgroundColor:'#000',color:'#fff',ease:'none',duration:5},0)
        .to('.goTop a.btn', {border:'1px solid #fff',ease:'none',duration:.1},0)
        .to('.goTop a .st0', {stroke:'#fff', ease:'none',duration:.1},0)


        gsap.timeline({
            scrollTrigger: {
                trigger : '.volunteer',
                start: '0% bottom',
                end: '10% top',
                scrub :1,
                //markers:true
            }
        })

            .fromTo('.volunteer .photo .a',{x:'-150%'},{x:'0%',ease:'none', duration:3},0)
            .fromTo('.volunteer .photo .b',{x:'150%'},{x:'0%',ease:'none', duration:3},0)




        gsap.timeline({
            scrollTrigger: {
                trigger : '.volunteer',
                start: '90% bottom',
                end: 'bottom top',
                scrub :1,
                //markers:true
            }
        })

            .to('.volunteer .photo .a',{x:'-100%',ease:'none', duration:3},0)
            .to('.volunteer .photo .b',{x:'100%',ease:'none', duration:3},0)


        gsap.timeline({
            scrollTrigger: {
                trigger: '.band_2',
                start: '80% bottom',
                end: 'top top',
                scrub: 1,
                //markers: true
                
            }
        })
    
        .to('.wrap', {backgroundColor:'#fff',color:'#444',ease:'none',duration:5},0)
        .to('.goTop a.btn', {border:'1px solid #000',ease:'none',duration:.1},0)
        .to('.goTop a .st0', {stroke:'#000', ease:'none',duration:.1},0)


    gsap.timeline({
        scrollTrigger: {
            trigger: 'footer',
            start:'0% 100%',
            end:'10% 0%',
            scrub: 1,
            //markers: true
        }
    })

    .to('footer', {backgroundColor:'#000',color:'#fff',ease:'none',duration:3},0)
    .to('.goTop a.btn', {border:'1px solid #fff',ease:'none',duration:.1},0)
    .to('.goTop a .st0', {stroke:'#fff', ease:'none',duration:.1},0)



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