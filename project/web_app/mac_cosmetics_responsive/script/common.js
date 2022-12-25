let h_bg = document.querySelector('#h_bg')

//윈도우 너비 리사이즈 하면 해당 위치에서 리로드
// let windowWidth = window.innerWidth
// window.addEventListener('resize',function(){
//     if(windowWidth != window.innerWidth){
//         location.reload()
//     }
// })


//navigation
//desktop&tablet 
let nav = document.querySelector('nav')
let gnb = document.querySelectorAll('#gnb li')
let sub = document.querySelectorAll('#gnb .sub')
let sub_bg = document.querySelector('.sub_bg')
let sub_close = true

gnb.forEach(function(target,index){
    target.addEventListener('mouseenter',function(){
        if(window.innerWidth > 900){
            //class
            for(let i of gnb){i.classList.remove('active')}
            target.classList.add('active')
            //sub 높이,트랜지션 초기화
            for(let i of sub){
                i.style.transition = 'none'
                i.style.height = '0'
            }
            //닫혀 있던 상태
            //1. sub_bg 나타나기 2.트랜지션 값 일시적으로 주기
            if(sub_close){
                sub_bg.style.height = '320px'
                sub_bg.style.borderWidth = '1px'
                sub[index].style.transition = '.3s'
                sub_close = false
            }
            sub[index].style.height = '320px'
        }
    })
})

nav.addEventListener('mouseleave',function(){
    if(window.innerWidth > 900){
        for(let i of sub){i.style.height = '0'}
        for(let i of gnb){i.classList.remove('active')}
        sub_bg.style.height = '0'
        sub_bg.style.borderWidth = '0'
        sub_close = true
    }
})


//navigation
//mobile

const search_btn = document.querySelector('#search_btn')
const m_menu_btn = document.querySelector('#m_menu_btn')
const m_prev_btn = document.querySelector('#m_prev_btn')
const my_btn = document.querySelector('#my_btn')
const cart_btn = document.querySelector('#cart_btn')
const m_close_btn = document.querySelector('#m_close_btn')
const body = document.querySelector('body')


m_menu_btn.addEventListener('click',function(){
    body.style.overflow = 'hidden'
    h_bg.style.background = '#000'
    hide(search_btn); hide(m_menu_btn); hide(my_btn); hide(cart_btn)
    show(m_close_btn); show(m_prev_btn)
    nav.style.left = '0'
})

m_close_btn.addEventListener('click',function(){
    body.style.overflow = 'auto'
    show(search_btn); show(m_menu_btn); show(my_btn); show(cart_btn)
    hide(m_close_btn); hide(m_prev_btn)
    nav.style.left = '-100vw'
    hideArray(sub)
})

m_prev_btn.addEventListener('click',function(){
    m_prev_btn.style.opacity = '0'
    hideArray(sub)
})

function show(el){el.style.display = 'block'}
function hide(el){el.style.display = 'none'}
function hideArray(array){
    for(let i of array){i.style.display = 'none'}
}

gnb.forEach(function(target,index){
    target.addEventListener('click',function(e){
        if(window.innerWidth <= 900){
            e.preventDefault()
            sub[index].style.display = 'flex'
            m_prev_btn.style.opacity = '1'
        }
    })
})

//mobile footer menu
let f_fold_btn = document.querySelectorAll('footer .main .fold_btn')
let f_menu_sub = document.querySelectorAll('footer .main .sub')
let f_menu_on = new Array()


f_fold_btn.forEach(function(target,index){
    f_menu_on[index] = false
    target.addEventListener('click',function(e){
        e.preventDefault()
        if(f_menu_on[index]){ //열려있던 경우
            f_menu_sub[index].style.display = 'none'
            target.style.transform = 'rotate(0)'
            f_menu_on[index] = false
        }else{ //닫혀있던 경우
            f_menu_sub[index].style.display = 'block'
            target.style.transform = 'rotate(180deg)'
            f_menu_on[index] = true
        }
    })
})
