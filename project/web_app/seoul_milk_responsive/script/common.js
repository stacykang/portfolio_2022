//header search
$('#search_open_btn').on('click',function(e){
    $('#search_bg').stop().slideDown(300)
})
$('#search_wrap .close').on('click',function(e){
    $('#search_bg').stop().slideUp(300)
})


//header scroll
$('header').css('transition','.5s')
$(window).on('scroll',function(){
    if(window.scrollY > 100){
        $('#h_bg').css('background','#ffffffdd')
        $('.sub_bg').css('background','#ffffffdd')
        $('header').css('height','72px')
        $('main').css('margin-top','72px')
    }
    if(window.scrollY <= 100){
        $('#h_bg').css('background','#ffffff')
        $('.sub_bg').css('background','#ffffff')
        $('main').css('margin-top','108px')
        $('header').css('height','108px')
    }
})

//
//navigation
//

//dep1 menu event
sub_close = true
$('.dep1 > li ').on('mouseover',function(){
    if($( window ).width() > 800){
    //모든 dep2 높이, 트랜지션 값 0으로 초기화 숨기기
    $('.dep2').css({ transition: '', height: '0' })
    //이벤트 대상의 하위메뉴 아래로 슬라이드
    $(this).find('.dep2').css({ transition: '.5s', height: '250px' })
    //sub_bg 아래로 슬라이드
    $('.sub_bg').css({ borderWidth : '1px', height: '250px' })
    //현재 대상 active 클래스 주기 //가상요소 after 밑줄 나타나게
    $('.dep1 > li ').removeClass('active')
    $(this).addClass('active')
    //현재 대상의 자식 a 태그에 active 클래스 주기 //글자색 하이라이트
    $('.dep1 > li > a ').removeClass('active')
    $(this).find('> a').addClass('active')
    }
})

//nav event (mouseleave 이벤트 자식태그 영역 포함)
$('nav').on('mouseleave',function(){
    if($( window ).width() > 800){
    //sub_bg와 모든 dep2 메뉴 위로 사라지게
    $('.dep2').css('height','0')
    $('.sub_bg').css({ borderWidth : '0', height: '0' })
    //dep1의 active 클래스 제거
    $('.dep1 > li ').removeClass('active')
    $('.dep1 > li > a ').removeClass('active')
    }
})

//
//mobile menu
//

//menu btn event
$(menu_btn).on('click',function(){
    $('.h_r_menu').animate({right:'0'}, 300, "linear");
    $('#m_menu_top').animate({right:'0'}, 300, "linear");
    $('nav').animate({right:'0'}, 300, "linear");

})

//close btn event
$('#close_btn').on('click',function(){
    $('.h_r_menu').animate({right:'-100vw'}, 300, "linear");
    $('#m_menu_top').animate({right:'-100vw'}, 300, "linear");
    $('nav').animate({right:'-100vw'}, 300, "linear");
    $('nav a').removeClass('active')
    $('.dep2').stop().slideUp()
    $('.dep3').stop().slideUp()
})

//
//mobile nav
//

//태그 생성 (css에서 스타일, 배경이미지)
$('.dep1 > li').append('<p class="accordion_icon"></p>')
$('.dep1 > li:first-child .dep2 > li').append('<p class="accordion_icon"></p>')

//toggleClass() slideToggle() 이용해서 열고 닫기
$('.dep1 > li > .accordion_icon').after().on('click',function(){
    console.log('okay')
    if($( window ).width() <= 800){
        $(this).parent().toggleClass('active')
        $(this).parent().find('.dep2').stop().slideToggle() //parent() 부모 태그 선택 메소드
    }
})
$('.dep2 > li .accordion_icon ').on('click',function(){
    if($( window ).width() <= 800){
        $(this).parent().find('> a').toggleClass('active')
        $(this).parent().find('.dep3').stop().slideToggle()
    }
})



// 
// footer family site
// 
let family_close = true
$('.family_btn').on('click',function(e){
    e.preventDefault()
    if(family_close){
        $('.family_list').stop().slideDown()
        family_close = false
    }else{
        $('.family_list').stop().slideUp()
        family_close = true
    }
})