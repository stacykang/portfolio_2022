//메인페이지 헤더 배경색 반투명
//header bg color

window.addEventListener('scroll',function(){
    if(window.scrollY > 50){
        h_bg.style.background = 'rgba(0,0,0,.9)'
    }else{
        h_bg.style.background = 'rgba(0,0,0,.3)'
    }
})
m_close_btn.addEventListener('click',function(){
    h_bg.style.background = 'rgba(0,0,0,.3)'
})

// 페이지 로드시 오른쪽에서 하나씩 나타나는 애니메이션
// new_wrap
const new_wrap_txt = document.querySelectorAll('#new_wrap .txt > *')

window.addEventListener('load',function(){
    // new_wrap_txt.forEach(function(target,index){
    //     target.style.animation = `slideIn .6s ${0.2*index}s both`
    // }) 
    arrayAni(new_wrap_txt,'slideIn')
})

// 이후는 함수를 생성해서 간단하게 표현!

// online_wrap
const services = document.querySelectorAll('.service')
allTransparent(services,0)
scrollShow(services,'slideUp',0)

// lookbook_wrap
const look_wrap_cards = document.querySelectorAll('.look')
allTransparent(look_wrap_cards,700)
scrollShow(look_wrap_cards,'slideIn',700)

// powder_wrap
const products_wrap_cards = document.querySelectorAll('.product')
allTransparent(products_wrap_cards,700)
scrollShow(products_wrap_cards,'slideUp',700)

// whats_wrap
const whats_wrap_cards = document.querySelectorAll('#whats_wrap .card')
allTransparent(whats_wrap_cards,0)
scrollShow(whats_wrap_cards,'slideUp',0)

// explore_wrap
const explore_wrap_cards = document.querySelectorAll('#explore_wrap .card')
allTransparent(explore_wrap_cards,0)
scrollShow(explore_wrap_cards,'slideIn',0)


//function1
//애니메이션 적용 전 투명도, 트랜지션 초기값
function allTransparent(array,windowMinWidth){
    window.addEventListener('load',function(){
        if(window.innerWidth > windowMinWidth){
            for(let i of array){
                i.style.opacity = '0'
                i.style.transition = '.5s'
            }
        }
    })
}

//function2
//배열명과 애니메이션 이름을 매개변수로 하는 함수 생성!
function arrayAni(array,animation){
    array.forEach(function(target,index){
        target.style.animation = `${animation} .5s ${0.2*index}s both`
    })
}

//function3
//해당 영역까지 스크롤하면 하나씩 올라오는 애니메이션
function scrollShow(array,animation,windowMinWidth){
    window.addEventListener('scroll',function(){
        if(window.innerWidth > windowMinWidth){
            if(array[0].getBoundingClientRect().top <= window.innerHeight*0.7){
                arrayAni(array,animation)
            }
        }
    })
}


// promotion_wrap
// 이전 다음 버튼 이벤트
const p_prev_btn = document.querySelector('#promo_wrap .prev')
const p_next_btn = document.querySelector('#promo_wrap .next')
const p_s_container = document.querySelector('#promo_wrap #slide_container')

p_prev_btn.addEventListener('click',function(e){
    e.preventDefault()
    p_s_container.style.transform = 'translateX(0)'
})
p_next_btn.addEventListener('click',function(e){
    e.preventDefault()
    p_s_container.style.transform = 'translateX(-50%)'
})

// mobile
// look_wrap
const look_tab_t = document.querySelectorAll('#look_wrap .tab_t a')
const look_tab_c = document.querySelectorAll('#look_wrap .look')

look_tab_t.forEach(function(target,index){
    target.addEventListener('click',function(e){
        e.preventDefault()
        for(let i of look_tab_t){i.classList.remove('active')}
        target.classList.add('active')
        for(let i of look_tab_c){i.style.opacity = '0'}
        look_tab_c[index].style.opacity = '1'
    })
})