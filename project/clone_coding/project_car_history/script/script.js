window.onload = function(){
    //header 전체메뉴 버튼, 메뉴 변수
    const all_menu_btn = document.querySelector('#all_menu')
    const close_menu_btn  = document.querySelector('#close_menu')
    const menu_list = document.querySelector('#menu_list')
    //r4 제목변수
    const r4_tab1_t = document.querySelector('#r4 .tab_title a:nth-child(1)')
    const r4_tab2_t = document.querySelector('#r4 .tab_title a:nth-child(2)')
    //r4 내용변수
    const r4_tab1_c = document.querySelector('#r4 .tab1_c')
    const r4_tab2_c = document.querySelector('#r4 .tab2_c')
    //r5 제목변수
    const r5_tab1_t = document.querySelector('#r5 .tab_title a:nth-child(1)')
    const r5_tab2_t = document.querySelector('#r5 .tab_title a:nth-child(2)')
    const r5_tab3_t = document.querySelector('#r5 .tab_title a:nth-child(3)')
    const r5_tab4_t = document.querySelector('#r5 .tab_title a:nth-child(4)')
    //r5 내용변수
    const r5_tab1_c = document.querySelector('#r5 .tab1_c')
    const r5_tab2_c = document.querySelector('#r5 .tab2_c')
    const r5_tab3_c = document.querySelector('#r5 .tab3_c')
    const r5_tab4_c = document.querySelector('#r5 .tab4_c')
    //r5 변수 검사
    console.log(r5_tab1_t,r5_tab2_t,r5_tab3_t,r5_tab4_t)
    console.log(r5_tab1_c,r5_tab2_c,r5_tab3_c,r5_tab4_c)
    console.log(all_menu_btn,menu_list)
    
    //header 초기 menu_list, 닫기 버튼 숨기기
    // menu_list.style.display = 'none'
    // close_menu_btn.style.display = 'none'
    //r4 초기 사용방법 내용 숨기기 (안내 기본 활성화)
    // r4_tab2_c.style.display = 'none'
    //r5 초기 탭2,3,4 내용 숨기기 (사고이력조회 기본 활성화)
    // r5_tab2_c.style.display = 'none'
    // r5_tab3_c.style.display = 'none'
    // r5_tab4_c.style.display = 'none'
    
    //header 전체메뉴 버튼 클릭시 메뉴 리스트 나타나기
    all_menu_btn.addEventListener('click',function(e){
        e.preventDefault() 
        menu_list.style.display = 'flex'
        //전체메뉴 버튼 -> 닫기 버튼
        close_menu_btn.style.display = 'flex'
        all_menu_btn.style.display = 'none'
        console.log(this)
    })
    close_menu_btn.addEventListener('click',function(e){
        e.preventDefault() 
        //메뉴가 이미 보이는 상태면 닫기
        menu_list.style.display = 'none'
        //닫기 버튼 -> 전체메뉴 버튼
        close_menu_btn.style.display = 'none'
        all_menu_btn.style.display = 'flex'
    })
    //r4 탭 클릭시 내용 나타나기, active 클래스 옮기기
    r4_tab2_t.addEventListener('click',function(e){
        e.preventDefault() // a href 임시주소 스크롤 top으로 올라가는 현상 해결
        r4_tab1_c.style.display ='none'//안내 내용 숨기기
        r4_tab2_c.style.display ='block'//사용방법 내용 보이기
        r4_tab1_t.classList.remove('active')
        r4_tab2_t.classList.add('active')
    })
    r4_tab1_t.addEventListener('click',function(e){
        e.preventDefault()
        r4_tab1_c.style.display = 'block'
        r4_tab2_c.style.display = 'none'
        r4_tab2_t.classList.remove('active')
        r4_tab1_t.classList.add('active')
    })
    
    //r5 탭 클릭시 내용 나타나기, active 클래스 옮기기
    r5_tab1_t.addEventListener('click',function(e){
        e.preventDefault()
        r5_tab1_c.style.display ='flex' //display:flex 속성 유지해줘야
        r5_tab2_c.style.display ='none'
        r5_tab3_c.style.display ='none'
        r5_tab4_c.style.display ='none'
        r5_tab1_t.classList.add('active')
        r5_tab2_t.classList.remove('active')
        r5_tab3_t.classList.remove('active')
        r5_tab4_t.classList.remove('active')
    })
    r5_tab2_t.addEventListener('click',function(e){
        e.preventDefault()
        r5_tab1_c.style.display ='none'
        r5_tab2_c.style.display ='flex'
        r5_tab3_c.style.display ='none'
        r5_tab4_c.style.display ='none'
        r5_tab1_t.classList.remove('active')
        r5_tab2_t.classList.add('active')
        r5_tab3_t.classList.remove('active')
        r5_tab4_t.classList.remove('active')
    })
    r5_tab3_t.addEventListener('click',function(e){
        e.preventDefault()
        r5_tab1_c.style.display ='none'
        r5_tab2_c.style.display ='none'
        r5_tab3_c.style.display ='flex'
        r5_tab4_c.style.display ='none'
        r5_tab1_t.classList.remove('active')
        r5_tab2_t.classList.remove('active')
        r5_tab3_t.classList.add('active')
        r5_tab4_t.classList.remove('active')
    })
    r5_tab4_t.addEventListener('click',function(e){
        e.preventDefault()
        r5_tab1_c.style.display ='none'
        r5_tab2_c.style.display ='none'
        r5_tab3_c.style.display ='none'
        r5_tab4_c.style.display ='flex'
        r5_tab1_t.classList.remove('active')
        r5_tab2_t.classList.remove('active')
        r5_tab3_t.classList.remove('active')
        r5_tab4_t.classList.add('active')
    })
}