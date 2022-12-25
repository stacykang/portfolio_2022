window.onload = function(){
    //로그인 버튼(변수) 클릭 시 (이벤트)
    //아이디,패스워드 인풋(변수) 비어있다면 (조건문)
    //에러메세지(변수) 나타나게(css style display:block)
    //눈 아이콘 클릭시(변수) 눈감은 아이콘으로 변경(css style background-position)
    //비밀번호 인풋 type text로 변경
    
    //변수생성
    const login_btn = document.querySelector('#login_btn')
    const icon = document.querySelectorAll('.icon')
    const id_pw_input = document.querySelectorAll('input[name^=user]')
    const error = document.querySelectorAll('.error')
    const pw_show_hide = document.querySelector('.pw_show_hide')
    let click = false
    console.log(login_btn,id_pw_input,error,pw_show_hide)
    
    //로그인 버튼 클릭 이벤트
    login_btn.addEventListener('click',function(){
        id_pw_input.forEach(function(target,index){
            if(target.value ==''){
                error[index].style.display = 'block'
                target.style.borderBottom = '2px solid #e52528'
                icon[index].style.borderBottom = '2px solid #e52528'
            }else{
                error[index].style.display = 'none'
                target.style.borderBottom = '1px solid #ccc'
                icon[index].style.borderBottom = '1px solid #ccc'
            }
        })
    })

    //패스워드 보이기 숨기기 버튼 이벤트
    pw_show_hide.addEventListener('click',function(){
        if(click==false){
            this.style.backgroundPosition = '-127px 0'
            id_pw_input[1].type = 'text'
            click = true
        }else{
            this.style.backgroundPosition = '-106px 0'
            id_pw_input[1].type = 'password'
            click = false
        }
    })
}