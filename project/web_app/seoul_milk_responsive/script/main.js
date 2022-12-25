//window resize event
let wwidth = $( window ).width()
$( window ).on('resize',function(){
    if(wwidth !== $(window).width() ){
        location.reload();
    }
})

//window onload
//창 크기에 따라서 비디오 태그 속성 변경
//태블릿, 데스크탑 -> 자동재생, 모바일 -> 사용자 컨트롤
$(function(){
    if (wwidth >= 580) {
        $('video').attr('autoplay','true');
    }else{
        $('video').attr('controls','true');
        $('video').attr('preload','metadata');
    }
})


//
// product wrap
//

const product_tab = $('#product_wrap .tab_title a')
const product = $('#product_wrap .product')
let p_img
product_tab.css('transition','.5s')

//product tab menu
//탭 메뉴 클릭시 각 항목의 이미지가 차례로 나타나는 애니메이션
product_tab.on('click',function(e){
    e.preventDefault()
    clearInterval(p_timer_func)
    //탭메뉴 전체 액티브 클래스 제거 후 클릭한 대상만 클래스 주기
    product_tab.removeClass('active')
    $(this).addClass('active')
    //a태그 영역 모두 숨기고 클릭한 인덱스의 a태그만 보이기
    product.hide()
    product.eq($(this).index()).show()
    //클릭한 인덱스의 product의 img 자식태그 찾기
    p_img = product.eq( $(this).index() ).find('img')
    //모든 img 태그에 이전에 있던 animation속성 제거
    p_img.css('animation','')
    //img 태그에 each 반복문 이용 슬라이드업 애니메이션 주기 //index 값 이용해서 지연시간 값 주기
    p_img.each(function( index ) {
        p_img.eq(index).css('animation',`slideUp .8s ${index*0.2}s both`)
    })
})

//interval function (위 코드에서 index()로 사용했던 부분 p_num 변수 지정해서 응용)
let p_num = 0
product.eq(0).find('img').css('animation','slideUp 1s both') //초기 애니메이션

let p_timer_func = setInterval(function(){
    p_num ++
    if(p_num == product.length){p_num = 0}
    //tab menu class
    product_tab.removeClass('active')
    product_tab.eq(p_num).addClass('active')
    //product
    product.hide()
    product.eq(p_num).show()
    //img
    p_img = product.eq(p_num).find('img')
    p_img.css('animation','')
    p_img.each(function( index ) {
        p_img.eq(index).css('animation',`slideUp .8s ${index*0.2}s both`)
    })
},2000)


//
// social wrap
//

const s_tab = $('#social_wrap .tab_title a')
const s_container = $('.social_container')
const s_card = $('.social')
let s_move, s_index

//social tab menu event
s_tab.on('click',function(e){
    s_index = $(this).index()
    e.preventDefault()
    clearInterval(s_timer_func)
    s_class_func(s_index)
    s_move_func(s_index)
})

// interval function
let s_num = s_tab.length - 1
let s_timer_func = setInterval(function(){
    s_num --
    if(s_num < 0){s_num = s_tab.length - 1 }
    if($(window).width() > 750){
        s_index = s_num
    }else{
        s_index = s_tab.length - s_num - 1 //역순
    }
    s_class_func(s_index)
    s_move_func(s_index)
},3000)

//class function
//탭메뉴, 카드 액티브 클래스 전체 제거 후 index 값에 클래스 주기
let s_class_func = function(index){
    s_tab.removeClass('active')
    s_tab.eq(index).addClass('active')
    s_card.removeClass('active')
    s_card.eq(index).addClass('active')
}

//move function
//반응형 윈도우 크기에 따라서 탭순서, 움직일 값 적용
let s_move_func = function(index){
    if($(window).width() > 750){
        s_move = 100/s_tab.length * (s_tab.length - 1 - index) + '%'
    }else{
        s_move = 60*(1-index) + 'vw' //60vw 0 -60vw
    }
    s_container.css('transform',`translateX(${s_move}`)
}
    
//window 너비에 따라서 active 클래스 주기
setTimeout(function(){
    if($(window).width() > 750){
        s_tab.eq(s_tab.length-1).addClass('active')
        s_card.eq(s_tab.length-1).addClass('active')
    }else{
        s_tab.eq(0).addClass('active')
        s_card.eq(0).addClass('active')
    }
},200)

//
//swiper plugin
//

//event slide

let event_slide = new Swiper('.event-swiper-container',{
    direction:'horizontal',
    autoplay:{
        delay:4000,
        disableOnInteraction:false //마우스 드래그한 후에도 자동재생 계속
    },
    loop:true, //마지막 이미지에서 첫번재 이미지로 자연스럽게 지나가게!
    slidesPerView:1,
    navigation:{
        nextEl:'.next_btn',
        prevEl:'.prev_btn'   
    },
	pagination : { 
		el : '.swiper-pagination',
		clickable : true, 
	},
})


//news slide 

let news_slide = new Swiper('.news-swiper-container',{
    direction:'horizontal',
    autoplay:{
        delay:3000,
        disableOnInteraction:false //마우스 드래그한 후에도 자동재생 계속
    },
    loop:true, //마지막 이미지에서 첫번재 이미지로 자연스럽게 지나가게!
    //윈도우 너비에 따라 슬라이드 개수 조정
    breakpoints: {
        slidesPerView: 1,
        580: {
        slidesPerView: 2
        },
        900: {
        slidesPerView: 3
        }
    },
    spaceBetween:30,
    navigation:{
        nextEl:'.next_btn',
        prevEl:'.prev_btn'   
    },
    pagination : { 
		el : '.swiper-pagination',
		clickable : true, 
	},
})