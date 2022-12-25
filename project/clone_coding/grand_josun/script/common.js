//1.header
//스크롤 시(이벤트) 정해진 값 이상이면(조건문) 헤더(변수) 배경색(스타일) 변화
const header = document.querySelector('header')
console.log(header)

// window.pageYoffset 이용하는 경우
// window.addEventListener('scroll',function(){
//     if( window.pageYOffset >= 50 ){
//         header.style.background = '#B29D95'
//     }else{
//         header.style.background = '0'
//     }
// })

// body.scrollTop 이용하는 경우
const body = document.querySelector('body,html')
window.addEventListener('scroll',function(){
    if(body.scrollTop >= 50){
        header.style.background = '#B29D95'
    }else{
        header.style.background = 'none'
    }
})