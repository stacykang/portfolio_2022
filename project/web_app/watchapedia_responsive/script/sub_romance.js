//
//r1_top10 슬라이드 버튼
//

const r1_list = document.querySelector('.r1_list_container')
const r1_prev_btn = document.querySelector('#r1_bg .prev_btn')
const r1_next_btn = document.querySelector('#r1_bg .next_btn')

let r1_move = 0
let show_slides //보이는 슬라이드 개수
let move_percent
let r1_move_max

r1_next_btn.addEventListener('click',function(e){
    e.preventDefault() //a태그 새로고침 방지
    r1_responsive() //함수 호출
    if(r1_move < r1_move_max) {
        if(r1_move == 0){r1_prev_btn.style.display = 'flex'}
        r1_move ++
        r1_list.style.left = `-${move_percent*r1_move}%`
        if(r1_move == r1_move_max) {r1_next_btn.style.display = 'none'}
    }
})
r1_prev_btn.addEventListener('click',function(e){
    e.preventDefault()
    r1_responsive()
    if(r1_move > 0) {
        if(r1_move == r1_move_max){r1_next_btn.style.display = 'flex'}
        r1_move --
        r1_list.style.left = `-${move_percent*r1_move}%`
        if(r1_move == 0) {r1_prev_btn.style.display = 'none'}
    }
})

//윈도우 크기에 따라 변수(최대 이동 횟수, 이동 퍼센트 값)에 값 대입.
function r1_responsive(){ 
    if(window.innerWidth > 1100){show_slides=5;}
    else if(window.innerWidth > 880){show_slides=4;}
    else if(window.innerWidth > 650){show_slides=3;}
    else{show_slides=2;}
    move_percent = 100/show_slides
    r1_move_max = 10 - show_slides
}
//슬라이드 이용 중 창 크기 변경시 오류 해결
window.addEventListener('resize',function(){
    r1_move = 0
    r1_prev_btn.style.display = 'none'
    r1_list.style.left = 0
})


//
//r1_top1 랭킹 뱃지
//
//dom 객체 생성 createElement, appendChild 메소드 복습
const r1_ranking = document.querySelectorAll('#r1_list .poster')
let create_p
r1_ranking.forEach(function(target,index){
    create_p = document.createElement('p')
    create_p.innerHTML = index+1
    target.appendChild(create_p)
})

//
//r3_story 슬라이드
//
const r3_img_container = document.querySelector('.r3_img_container')
const r3_txt_container = document.querySelector('.r3_txt_container')
const r3_prev_btn = document.querySelector('#r3_story .prev_btn')
const r3_next_btn = document.querySelector('#r3_story .next_btn')
const r3_img = document.querySelectorAll('.r3_img_container .img') //슬라이드 개수 move_max에 이용
let r3_move = 0
let r3_move_max = r3_img.length-1

r3_next_btn.addEventListener('click',function(e){
    e.preventDefault() //a태그 새로고침 방지
    if(r3_move < r3_move_max) {
        if(r3_move == 0){r3_prev_btn.style.display = 'flex'}
        r3_move ++
        r3_move_func()
        if(r3_move == r3_move_max){r3_next_btn.style.display = 'none'}
    }
})
r3_prev_btn.addEventListener('click',function(e){
    e.preventDefault() //a태그 새로고침 방지
    if(r3_move > 0) {
        if(r3_move == r3_move_max){r3_next_btn.style.display = 'flex'}
        r3_move --
        r3_move_func()
        if(r3_move == 0){r3_prev_btn.style.display = 'none'}
    }
})

function r3_move_func(){
    r3_img_container.style.left = `-${100*r3_move}%`
    r3_txt_container.style.left = `-${100*r3_move}%`
}


//
//r4_actor 슬라이드
//
const r4_prev_btn = document.querySelector('#r4_actor .prev_btn')
const r4_next_btn = document.querySelector('#r4_actor .next_btn')
const actor_list = document.querySelectorAll('.actor')
const r4_slide_container = document.querySelector('.r4_slide_container')
let r4_move = 0
let r4_active_num = 2 // 데스크탑 large class index 초기값
let r4_move_percent //1070/176
let r4_show_slides
let r4_move_max

r4_next_btn.addEventListener('click',function(e){
    e.preventDefault()
    r4_active_num ++
    r4_move ++
    r4_responsive_move()
    if(r4_move == r4_move_max){r4_next_btn.style.display = 'none'}
    r4_prev_btn.style.display = 'flex'
})

r4_prev_btn.addEventListener('click',function(e){
    e.preventDefault()
    r4_active_num --
    r4_move --
    r4_responsive_move()
    if(r4_move == 0){r4_prev_btn.style.display = 'none'}
    r4_next_btn.style.display = 'flex'
})

function r4_responsive_move(){ 
    if(window.innerWidth > 1100){
        r4_show_slides = 5
        r4_move_percent = 16.4
        r4_class_reset()
        r4_active_func(r4_active_num) //데스크탑에서 클래스에 따라 스타일 
    }else if(window.innerWidth > 780){
        r4_show_slides = 3
        r4_move_percent = 100/r4_show_slides
    }else{
        r4_show_slides = 2
        r4_move_percent = 100/r4_show_slides
    }
    r4_slide_container.style.left = `-${r4_move*r4_move_percent}%`
    r4_move_max = actor_list.length - r4_show_slides
}

function r4_class_reset(){
    for(let i of actor_list){
        i.classList.remove('medium')
        i.classList.remove('large')
    }
}
function r4_active_func(num){
    actor_list[num-1].classList.add('medium')
    actor_list[num].classList.add('large')
    actor_list[num+1].classList.add('medium')
}

//슬라이드 이용 중 창 크기 변경시 초기화
window.addEventListener('resize',function(){
    r4_move = 0
    r4_active_num = 2
    r4_prev_btn.style.display = 'none'
    r4_slide_container.style.left = 0
    r4_class_reset()
    r4_active_func(r4_active_num)
    r4_responsive_move()
})

//
//r5 콜렉션 인터벌 함수
//

