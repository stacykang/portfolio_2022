//
//dep3 tab event
//

$('.dep3_tab a').on('click',function(e){
    e.preventDefault()
    $('.dep3_tab a').removeClass('active')
    $(this).addClass('active')
    if($(this).index() != 0){ //전체 탭 빼고 나머지
        $('.product_wrap').hide()
        $('.product_wrap').eq($(this).index()-1).stop().fadeIn()
    }else{ //전체 보이기
        $('.product_wrap').hide()
        $('.product_wrap').stop().fadeIn()
    }
})

//
//product_wrap categoty_num
//
//Jquery 객체.html(값) == JS 객체.innerHTML = '값'
//제품 카테고리 별 제품 개수 값을 태그에 대입
let wrap_p_num
$('.product_wrap').each(function(index){
    wrap_p_num = $('.product_wrap').eq(index).find('.card').length
    $('.category_num').eq(index).html(wrap_p_num)
})


//
//product_wrap more_btn
//
//최대로 보일 개수 (6)개 외에는 숨기기
let product_wrap = $('.product_wrap')
let cards
let min_cards_n = 6
let more_btn_click = [] //각 wrap별 클릭여부를 저장할 배열 생성

//초기값
product_wrap.each(function(index){
    show_min_cards($(this))
})

//버튼 이벤트 생성
product_wrap.each(function(index){
    more_btn_click.push(false)  // more_btn_click = [false,false,false,false,false]
    $(this).find('.more_btn').on('click',function(e){
        e.preventDefault()
        if(more_btn_click[index]){
            show_min_cards($(this).parent('.product_wrap'))
            $(this).html('더보기')
            more_btn_click[index] = false
            //접을 때 해당 wrap으로 스크롤 올라가게
            $('html, body').animate({
                scrollTop: $(this).parent('.product_wrap').offset().top -200
            }, 300);
        }else{
            show_max_cards($(this).parent('.product_wrap'))
            $(this).html('접기')
            more_btn_click[index] = true
        }
    })
})


//함수
function show_min_cards (wrap){
    cards = wrap.find('.card')
    cards.hide()
    cards.each(function(index){
        if(index < min_cards_n){
            cards.eq(index).show()
        }
    })
}

function show_max_cards (wrap){
    cards = wrap.find('.card')
    cards.fadeIn()
}