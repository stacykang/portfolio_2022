//header nav
//서브페이지에서는 헤더 네비게이션 숨긴 후 마우스 오버시에만 나타나게

//mouseover
h_bg.addEventListener('mouseover',function(){
    if(window.innerWidth > 900){
        nav.style.height = '48px'
        nav.style.overflow = 'visible'
        nav.style.transition = '.5s'
        nav.style.opacity = '1'
    }
})
//mouseout
h_bg.addEventListener('mouseout',function(){
    if(window.innerWidth > 900){
        nav.style.height = '0'
        nav.style.overflow = 'hidden'
        nav.style.opacity = '0'
    }
})

//정렬 버튼
const arrange_btn = document.querySelector('.arrange_btn')
const arrange_list = document.querySelector('.arrange_list')
let arrange_close = true
arrange_btn.addEventListener('click',function(){
    if(arrange_close){
        arrange_btn.classList.add('active')
        arrange_list.classList.add('active')
        arrange_close = false
    }else{
        arrange_btn.classList.remove('active')
        arrange_list.classList.remove('active')
        arrange_close = true
    }
})

//필터 버튼
const filter_btn = document.querySelector('.filter_btn')
const filter_all = document.querySelector('.filter_all')
let filter_close = true
window.addEventListener('load',function(){
    if(window.innerWidth <= 700){
        filter_btn.classList.remove('active')
    }
})
filter_btn.addEventListener('click',function(){
    if(window.innerWidth <= 700){
        if(filter_close){
            filter_btn.classList.add('active')
            filter_all.classList.add('active')
            arrange_list.classList.remove('active')
            filter_close = false
        }else{
            filter_btn.classList.remove('active')
            filter_all.classList.remove('active')
            filter_close = true
        }
    }
})