const cheese = [
    {name:'체다슬라이스치즈 / 쭈~욱 늘어나는 체다치즈',description:'"한국인이 사랑하는 맛", 한국인의 입맛에 가장 익숙하고 잘 맞는 1등 치즈'},
    {name:'앙팡 유기농 아기(어린이)치즈 스텝 1, 2, 3',description:'우리아이 바른 성장 프로젝트 : 연령대별 단계에 맞춘 과학적 치즈, 3STEP 성장단계별 치즈'},
    {name:'어린이치즈 앙팡',description:'어린이치즈의 대명사인 앙팡치즈의 새로운 탄생'},
    {name:'뽀로로가 좋아하는 칼슘왕치즈',description:'어린이의 성장발육에 도움을 줄 수 있는 우유칼슘을 첨가한 어린이치즈'},
    {name:'지방을 줄인 고칼슘치즈',description:'일반 슬라이스치즈(연성가공치즈) 대비 지방함량은 줄이고 칼슘 함량을 높인 건강치즈로 성인과 청소년이 부담없이 즐길 수 있는 치즈'},
    {name:'뼈에 쏙쏙 칼슘치즈',description:'서울우유 뼈에 쏙쏙 칼슘치즈는 튼튼한 뼈를 위한 치즈입니다.'},
    {name:'치즈마스터',description:'어디에나 어울리는 치즈의 깊은 맛을 느껴보세요!'},
    {name:'어른을 위한 치즈',description:'치즈 한장으로 간편하게 건강을 챙길 수 있는 종합영양치즈! 어른을 위한 치즈로 맛있게 건강을 챙기세요!'},
    {name:'테이스티 슬라이스치즈',description:'맛있는 시간을 위한 테이스티 치즈(Tasty Cheese)'},
    {name:'목장나들이 슈레드모짜렐라',description:'1A등급 국산원유 100%로 만든 국산 슈레드치즈'},
    {name:'테이스티 슈레드치즈',description:'맛있는 시간을 위한 테이스티 치즈(Tasty Cheese)'},
    {name:'멀티팩 슈레드 모짜렐라',description:'식빵에 얹어 사용하거나 스파게티, 볶음밥, 피자 등의 요리에 1회분량으로 적합한 제품으로 사용이 편리하고 신선함이 느껴지는 멀티 포장 제품'},
    {name:'솔솔 뿌려먹는 모짜렐라 치즈',description:'100g 모짜렐라 치즈로 사용량이 적은 고객들을 위한 제품'},
    {name:'목장나들이 모짜렐라치즈',description:'신선한 국산 원유로 만든 다양한 요리용 모짜렐라'},
    {name:'요리왕 모짜렐라',description:' 모짜렐라와 고다치즈를 믹스하여 치즈 맛이 더 풍미로운 100% 자연치즈! 1인 가구 소비자를 위한 소용량 멀티 포장'},
    {name:'목장나들이 스트링치즈',description:'1A등급 국내산 원유 100%로 만들어서 우유의 맛과 향이 살아있는 자연치즈 (원료 원유 세균수 기준)'},
    {name:'앙팡까요까요',description:'재미가득 영양가득 앙팡치즈 까요까요! 플레인, 딸기, 초코, 유기농 네가지로 더욱 맛있는 어린이 치즈'},
]
const processed = [
    {name:'옥수수 우유죽, 견과 우유죽',description:'별도의 도구 없이 언제 어디서나 간편하게 즐기는 죽'},
    {name:'치즈육포',description:'육포가 안주 개념에서 벗어나 치즈와의 어울림을 통해 간편하게 즐길 수 있게 만든 다용도 간식 제품입니다.'},
    {name:'킹 커피',description:'기존 커피믹스와 차별화된 정말 맛있는 커피'},
    {name:'서울우유 생크림',description:'국산 유크림 100%로 케이크, 파스타, 커피 등에 첨가하여 맛을 부드럽게 해줍니다.'},
    {name:'서울우유 휘핑크림',description:'풍부하고 후레쉬한 천연 유크림의 풍미를 그대로 지닌 고품격 휘핑크림'},
    {name:'서울연유',description:'서울연유는 영양이 그대로 살아있는 신선한 우유에 설탕을 첨가하여 진공 농축하여 만든 제품입니다.'},
    {name:'식물성휘핑크림',description:'트랜스지방 ZERO 서울우유 식물성 휘핑크림'},
    {name:'식물성쿠킹크림',description:'느끼함 ZERO! 깔끔한 서울우유 식물성 쿠킹크림'},
    {name:'서울우유 버터',description:'신선한 국산원유로 만든 국산 유크림 100%(가염버터는 99% 이상)의 고품격 버터'},
    {name:'식물성 아침에 버터',description:'냉장고에서 갓 꺼내도 잘 발리며 버터 자체의 풍미가 제대로 살아있는 신선한 버터'},
]
const dessert = [
    {name:'서울우유 아이스크림',description:'서울우유의 진짜 우유 아이스크림! 아이스크림에 주입되는 공기의 양을 낮춰 우유 풍미 그대로! 여럿이 나누면 더욱 즐거운 파인트 사이즈 아이스크림'},
    {name:'서울우유 아이스크림 미니',description:'서울우유의 진짜 우유 소용량 아이스크림'},
    {name:'비요뜨 요거트 아이스크림',description:'프리미엄 요거트 아이스크림! 다양한 토핑의 비요뜨 아이스크림을 취향에 따라 골라드세요!'},
    {name:'서울피자관 미니피자',description:'편의성이 극대화된 전자레인지 전용 1인 미니피자'},
    {name:'호랑이도 반한 크림떡',description:'서울우유가 만든 3중 포앙(찹쌀떡, 치즈크림, 센터크림)이 적용된 신개념 크림떡'},
    {name:'서울브리또관',description:'서울우유에서 만든 브리또! 얇은피 또띠아로 치즈와 토핑의 풍미 가득'},
    {name:'서울피자관',description:'핸드메이드 저온숙성 화덕 도우와 국산 통모짜렐라 치즈를 100%의 프리미엄 피자'},
]
const imported = [
    {name:'브리(Brie)',description:'자연을 그대로 먹는 듯, 순수함이 입안 가득 느껴지는 프리미엄 브리치즈, 서울우유가 제안하는 순수 자연치즈의 대표작을 만나십시오'},
    {name:'까망베르(Camembert)',description:'까망베르,브리치즈는 독일바이에른지방의 역사와 전통을 자랑하는 치즈 전문회사 샹피뇽사의 고품격치즈입니다.'},
    {name:'깜보졸라',description:'까망베르와 고르곤졸라를 혼합한 블루치즈로 진한 치즈향! 부드러운 맛이 와인에 잘 어울리는 까망베르와 고르곤졸라를 혼합한 블루치즈'},
    {name:'루우젯',description:'당근뿌리나 고추에 많이 함유된 붉은색 물질인 카로틴으로 색상을 낸 부드럽고 풍미 좋은 숙성치즈'},
    {name:'까망베르 디럭스',description:'크림이 함유되어 부드럽고 촉촉한 프리미엄 까망베르치즈'},
    {name:'스키퀸 브라운치즈',description:'노르웨이 전통치즈로 유청을 카라멜라이징하여 단짠단짠의 산양유맛을 연하게 느낄 수 있는 치즈'},
    {name:'플로테미소스트 브라운치즈',description:'우유로 만든 브라운치즈로 산양유가 포함된 제품보다 맛이 더 부드럽고 라이트함'},
    {name:'구드브란드스달렌 브라운치즈',description:'산양유가 포함된 브라운치즈의 슬라이스 타입 제품으로 단짠단짠 카라멜맛 치즈 풍미를 즐길 수 있음'},
    {name:'샤푸토 스트링치즈',description:'재미있게 찢어먹을 수 있는 자연치즈. 전 세계 스트링치즈 중 가장 많이 판매되는 제품.'},
]

const food = [cheese,processed,dessert,imported]
const food_name = ['cheese','processed','dessert','imported']

let container
let wrap_name
let create_a 
let create_p 
let create_dl
let create_dt
let create_dd

food.forEach(function(target,index){
    
    //배열 인덱스 이용해서 DOM 객체 대입
    wrap_name = food_name[index]
    container = document.querySelector(`.${wrap_name}_wrap .container`)

    //태그 생성후 카테고리별로 이미지, 이름, 설명 대입
    target.forEach(function(target,index){
    create_a = document.createElement('a')
    create_p = document.createElement('p')
    create_dl = document.createElement('dl')
    create_dt = document.createElement('dt')
    create_dd = document.createElement('dd')

    create_a.href = '#'
    create_a.classList.add('card')
    create_p.classList.add('img')
    create_dl.classList.add('txt')
    create_dt.classList.add('t')
    create_dd.classList.add('c')
    
    create_a.appendChild(create_p)
    create_a.appendChild(create_dl)
    create_dl.appendChild(create_dt)
    create_dl.appendChild(create_dd)

    create_p.style.backgroundImage = `url(images/sub_product_img/${wrap_name}${index+1}.jpg)` //인라인 스타일로 들어가기 때문에 '../' 제거
    create_dt.innerHTML = target.name //제품명
    create_dd.innerHTML = target.description //제품설명

    container.appendChild(create_a)
})

})