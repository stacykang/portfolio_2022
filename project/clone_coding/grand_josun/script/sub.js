const tab_t = document.querySelectorAll('#tab_t a')
const tab_c_all = document.querySelectorAll('.room')
const tab_c_room = document.querySelectorAll('.rm_wrap')
const tab_c_kids = document.querySelectorAll('.kids_wrap')
const tab_c_suite = document.querySelectorAll('.suite_wrap')

for(let i of tab_t){
    i.addEventListener('click',function(){
    for(let j of tab_t){j.classList.remove('active')}
    i.classList.add('active')
})
}
tab_t[0].addEventListener('click',function(){
    for(let i of tab_c_all){i.style.display = 'block'}
})
tab_t[1].addEventListener('click',function(){
    for(let i of tab_c_all){i.style.display = 'none'}
    for(let i of tab_c_room){i.style.display = 'block'}
})
tab_t[2].addEventListener('click',function(){
    for(let i of tab_c_all){i.style.display = 'none'}
    for(let i of tab_c_kids){i.style.display = 'block'}
})
tab_t[3].addEventListener('click',function(){
    for(let i of tab_c_all){i.style.display = 'none'}
    for(let i of tab_c_suite){i.style.display = 'block'}
})