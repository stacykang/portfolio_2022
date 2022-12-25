//loading page
window.onload = function(){
    document.querySelector('#load').style.opacity = '0'
}

//window resize event
// let windowHeight = window.innerHeight
// window.addEventListener('resize',function(){
//     if(windowHeight != window.innerHeight){
//         location.reload()
//     }
// })


//fullpage
let fp_auto_scroll = true
const fp_section_contents = document.querySelectorAll('.section .section_contents')
setTimeout(function(){
    //높이 반응형
    if(window.innerHeight <= 800){
        fp_auto_scroll = false
        //responsive css에 따로 설정할지 
        for(let i of fp_section_contents){i.style.margin = '140px auto'}
        document.querySelector('#slide_wrap .my-custom-pagination-div').style.bottom = '60px'
    }
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fifthPage'],
        menu: '#myMenu',
        scrollBar:true, //기본 스크롤 이벤트 유지 // false로 설정시 .section {background-attachment:fixed} 적용 안된다.
        autoScrolling:fp_auto_scroll,
        scrollingSpeed : 800, //스크롤 속도 기본값 700
        afterLoad: function(destination){
            //두번째 페이지부터 헤더 배경 불투명하게
            if(destination == 'firstPage'){
                $('#h_bg').css('background','none')
            }else{
                $('#h_bg').css('background','rgba(0,0,0,.1)')
            }
        }
    })
},200)

//swiper
//slide_wrap
var mySwiper = new Swiper('#slide_wrap .swiper-container',{
    effect:'fade',
    autoplay:{
        delay:3000,
        disableOnInteraction:false  //마우스 드래그한 후에도 자동재생 계속
    },
    speed:800, // transition 속도
    loop:true,
    pagination: {
        el: '#slide_wrap .my-custom-pagination-div',
        clickable : true,
        renderBullet:function(i,name){
            console.log(i,name)
            return `<span class="${name}">0${i+1}</span>`
        }
    },
})

//product_wrap
var mySwiper = new Swiper('#product_wrap .swiper-container',{
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
    prev: {
    shadow: true,
    translate: ["-50%", 0, -1],
    },
    next: {
    translate: ["100%", 0, 0],
    },
    },
    autoplay:{
        delay:4000,
        disableOnInteraction:true
    },
    speed:1000,
    loop:true,
    navigation:{ //이전 다음 버튼 지정
        nextEl:'#product_wrap .swiper-button-next',
        prevEl:'#product_wrap .swiper-button-prev'
    },
})

//media_wrap
var mySwiper = new Swiper('#media_wrap .swiper-container',{
    autoplay:{
        delay:3000,
        disableOnInteraction:true
    },
    speed:600,
    loop:true,
    slidesPerView:3.5, //한페이지에 보일 슬라이드 수
    navigation:{ //이전 다음 버튼 지정
        nextEl:'#media_wrap .swiper-button-next',
        prevEl:'#media_wrap .swiper-button-prev'
    },
    pagination: {
        el: '#media_wrap .swiper-pagination',
        type: "progressbar",
    },
})

//location_wrap
const location_slide = document.querySelectorAll('#location_wrap .info h2')
let location_slide_name = new Array(0)

location_slide.forEach(function(target,index){
    location_slide_name.push(target.innerHTML)
})

var mySwiper = new Swiper('#location_wrap .swiper-container',{
    allowTouchMove: false, //주소를 복사할 수 있도록 터치무브 해제
    effect:'fade',
    speed:50,
    loop:false,
    navigation:{ //이전 다음 버튼 지정
        nextEl:'#location_wrap .swiper-button-next',
        prevEl:'#location_wrap .swiper-button-prev'
    },
    pagination: {
        el: '#location_wrap .my-custom-pagination-div',
        clickable : true,
        renderBullet:function(i,name){
            console.log(i,name)
            return `<span class="${name}">${location_slide_name[i]}</span>`
        }
    },
})

// header
const h_bg = document.querySelector('#h_bg')
const nav = document.querySelector('nav')

nav.addEventListener('mouseenter',function(){
    h_bg.classList.add('active')
})
h_bg.addEventListener('mouseleave',function(){
    h_bg.classList.remove('active')
})

const lang_btn = document.querySelector('.lang_btn')
let lang_close = true

lang_btn.addEventListener('click',function(e){
    e.preventDefault()
    if(lang_close){
        this.classList.add('active')
        lang_close = false
    }else{
        this.classList.remove('active')
        lang_close = true
    }
})


//kakaomap

//map1 생성
var container1 = document.querySelector('.map1');//지도를 담을 영역의 DOM 레퍼런스
var options1 = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.3330179,127.8455883), //지도의 중심좌표.
    level: 4 //지도의 레벨(확대, 축소 정도)
};
//map1 마커
var map1 = new kakao.maps.Map(container1, options1); //지도 생성 및 객체 리턴
var markerPosition1  = new kakao.maps.LatLng(37.3330179,127.8455883)
var marker1 = new kakao.maps.Marker({
    position: markerPosition1,
});
marker1.setMap(map1)



//map2 생성
var container2 = document.querySelector('.map2');
var options2 = { 
    center: new kakao.maps.LatLng(37.5263914,127.0450787),
    level: 4
};
var map2 = new kakao.maps.Map(container2, options2);
//map2 마커
var markerPosition2  = new kakao.maps.LatLng(37.5263914,127.0450787)
var marker2 = new kakao.maps.Marker({
    position: markerPosition2,
});
marker2.setMap(map2)



//map3 생성
var container3 = document.querySelector('.map3');
var options3 = { 
    center: new kakao.maps.LatLng(37.2470963,127.0505407),
    level: 4
};
var map3 = new kakao.maps.Map(container3, options3);
//map3 마커
var markerPosition3  = new kakao.maps.LatLng(37.2470963,127.0505407)
var marker3 = new kakao.maps.Marker({
    position: markerPosition3,
});
marker3.setMap(map3)