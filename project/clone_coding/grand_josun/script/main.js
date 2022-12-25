//
//1.main slide
const slide = document.querySelectorAll('#slide_check_wrap .slide')
let slide1_timer = setInterval(slide1_func,5000)
let num = 0 //슬라이드 번호
function slide1_func(){
    num++
    if(num > slide.length-1){num = 0}
    for(let i of slide){i.style.opacity = '0'}
    slide[num].style.opacity = '1'
}

//
//2.check in/out open
const check_open = document.querySelector('.check_open')
const number_btn = document.querySelector('.number')
const close_btn = document.querySelector('.close')
let open = false // 닫혀있는 상태 //true,false는 1,0로 작성해도 된다.
number_btn.addEventListener('click',function(){
    if( open == false ){
        check_open.style.height = '425px'
        check_open.style.borderWidth = '1px'
        open = true
    }
})
close_btn.addEventListener('click',function(e){
    e.preventDefault() //a태그 새로고침 방지
    if( open == true ){
        check_open.style.height = '0'
        check_open.style.borderWidth = '0'
        open = false
    }
})

//
//3.discovery slide
//pagenation
const d_pagenation = document.querySelectorAll('.pagenation a')
const d_slides= document.querySelectorAll('#discovery_slide_wrap .slide_container .slide')
const d_s_container= document.querySelector('#discovery_slide_wrap .slide_container')
let d_slide_width = 592 //가로520+여백72
d_pagenation.forEach(function(target,index){
    target.addEventListener('click',function(e){
        e.preventDefault()
        clearInterval(d_timer) //3초간격 슬라이드 정지
        classActive(target)
        dSlideMove(index)
    })
})
//slide interval
let d_timer = setInterval(d_func,3000)
let d_num = 0
function d_func(){
    d_num++
    if(d_num > d_slides.length-1){d_num = 0}
    classActive(d_pagenation[d_num])
    dSlideMove(d_num)
}
//매개변수 대상에만 active 클래스를 주고 나머지는 제거
function classActive(a){ 
    for(let i of d_pagenation){i.classList.remove('active')}
    a.classList.add('active')
}
function dSlideMove(num){
    d_s_container.style.left = `-${d_slide_width*num}px`
}


//kakao map
//ftp에 업로드 전에는 라이브 서버로 확인 시 로딩 길어짐 -> 주석 걸어놓기
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
    //구글 어스에서 검색한 위도 경도 위치 정보
    //35.1600161,129.1630504
    center: new kakao.maps.LatLng(35.1600161,129.1630504), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

var imageSrc = 'images/map_marker_2.png', // 마커이미지의 주소입니다    
    imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    imageOption = {offset: new kakao.maps.Point(60, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
var markerPosition  = new kakao.maps.LatLng(35.1600161,129.1630504)
// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage // 마커이미지 설정 
});
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map)
map.setDraggable(false) //이동 막기
map.setZoomable(false) //확대 축소 막기
