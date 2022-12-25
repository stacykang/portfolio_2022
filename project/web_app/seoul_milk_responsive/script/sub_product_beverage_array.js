// 객체의 배열로 제품명과 제품설명 정리
// const Array = [
//     {name:'제품1',description:'제품설명1'},
//     {name:'제품2',description:'제품설명2'}
// ]

const milk = [
    {name:'서울우유 나100',description:'두개의 1등급으로 채우다 나100% ( 체세포수 1등급, 세균수 1A )'},
    {name:'나100 홈밀크',description:'나100% 원유 100%의 가정전용 우유입니다.'},
    {name:'나100 저지방우유',description:'지방함유량을 줄여 라이트한 맛과 칼로리 부담까지 줄인'},
    {name:'고단백저지방',description:'기존 우유보다 단백질과 칼슘을 1.8배 더 함유한 우유'},
    {name:'속편한우유 저지방',description:'우유 속 유당을 분해하지 못해 우유를 마시면 속이 불편한 분들을 위해 유당을 분해한 우유'},
    {name:'목장의 신선함이 살아있는 우유',description:'목장의 신선함이 살아있는 우유는 위생적인 목장 사양관리를 통해 엄선된 1급A 원유 100 %를 사용한 우유입니다'},
    {name:'목장의 신선함이 살아있는 우유 저지방',description:'목장의 신선함이 살아있는 우유 저지방은 저지방 원유 (지방함량 1.85%)로 균형잡힌 몸매와 건강관리에 도움을 주는 프리미엄 우유 입니다.'},
    {name:'무지방&칼슘 우유',description:'몸매관리와 뼈 건강에 관심이 많은 분들을 위한 우유'},
    {name:'뼈에 쏙쏙 고칼슘 우유',description:'고칼슘 우유는 칼슘이 930mL 한팩에 2000 mg 이상 들어 있어 우리 가족의 칼슘 섭취를 충족시켜주는 칼슘 강화우유입니다.'},
    {name:'서울우유',description:'서울우유가 1급A 원유로 우리나라 우유품질의 기준을 또 한번 높였습니다.'},
    {name:'앙팡',description:'아이들을 키우는 힘 앙팡 1994년 어린이 전용 우유로 탄생한 앙팡우유'},
    {name:'서울우유 가공우유',description:'서울우유 가공우유는 대한민국 대표 가공유로 국산 원유로 만들어져 한국인의 입맛에 맞고 색소를 첨가하지 않아 순수하고 풍부한 맛을 느끼실 수 있습니다.'},
    {name:'초코꿀딴지, 딸기꿀딴지',description:'각 FLAVOR의 진한 맛과 국산원유의 만남, 천연 당인 아카시아꿀 첨가'},
    {name:'바나나우유',description:'새로운 맛과 기능등 오감의 즐거움을 주는 프리미엄 저지방 가공우유입니다.'},
    {name:'귀리우유',description:'6가지 곡물과 3가지 견과를 담은 골드푸드 우유'},
]
const ferment = [
    {name:'서울우유 요구르트',description:'온 가족이 함께 마시는 유산균 발효유'},
    {name:'앙팡요구르트',description:'1994년에 만들어진 어린이요구르트! 앙팡요구르트!'},
    {name:'앙팡플러스',description:'내 아이를 위한 요구르트 앙팡플러스'},
    {name:'캐리와장난감친구들 요구르트',description:'캐리와 함께 놀이하며 마시는 어린이 액상 요구르트'},
    {name:'서울우유 요구르트 제로',description:'가볍게 마실 수 있는 무지방요구르트'},
    {name:'오렌지요구르트',description:'“오렌지 과즙과 액상 요구르트의 만남”'},
    {name:'요하임 떠먹는 요거트 85',description:'기존제품보다 당을 25%이상 절감한 요구르트'},
    {name:'서울우유 요거트',description:'온 가족이 함께 즐기는 요거트'},
    {name:'짜요짜요',description:'짜먹는 즐거움이 있는 요구르트 짜요짜요!'},
    {name:'비요뜨',description:'비요뜨를 꺽어봐! 토핑요구르트 비요뜨는 즐거운 간식 뿐만 아니라 출출할 때 대용식으로도 적합합니다.'},
    {name:'듀오안',description:'“신바이오틱스”의 New 리더'},
    {name:'장건강 프로바이오틱 사과,블루베리',description:'프로바이오틱 유산균 및 BB-12유산균 사용: 기능성이 있는 합리적인 요구르트'},
    {name:'상큼함이 살아있는 요구르트',description:'과육이 씹히는 상큼한 맛의 농후 발효유'},
    {name:'목장의 신선함이 살아있는 요구르트 (딸기)',description:'우유함량을 높이고 당을 줄인 건강 발효유'},
    {name:'더 진한 플레인 요구르트 스위트',description:'진한 점도의 프리미엄 요거트'},
]

const juice = [
    {name:'아침에주스 오렌지',description:'까다로운 콜드필링 과정을 거친 100% 천연과즙 주스'},
    {name:'아침에주스 포도',description:'까다로운 콜드필링 과정을 거친 100% 천연과즙 주스'},
    {name:'아침에주스 제주감귤',description:'제주감귤과즙 100%주스로 신선한 냉장유통 주스'},
    {name:'아침에주스 사과',description:'까다로운 콜드필링 과정을 거친 100% 천연과즙 주스'},
    {name:'아침에주스 유기농(900ml)',description:'콜드필링으로 유기농 과즙의 신선함을 지킨 냉장주스'},
    {name:'아침에주스 미니',description:'한 손에 쏙 들어오는 귀여운 파우치형 주스'},
    {name:'아침에주스 ABC주스',description:'사과(Apple) + 비트(Beet) + 당근(Carrot)주스'},
    {name:'아침에주스 블랙라벨',description:'상큼한 아침에 주스 블랙라벨 한 잔으로 시작하는 프레시한 아침!'},
    {name:'리이브',description:'제 6영양소인 식이섬유 뿐만 아니라 비타민C까지 섭취 가능한 리이브'},
    {name:'사과,오렌지,자두나무',description:'식이섬유와 비타민이 들어있는 산뜻한 과채음료'},
    {name:'아침에주스 유기농',description:'아이들이 좋아하는 건강 주스'},
    {name:'원두밀 플러스',description:'원두밀 플러스는 품질 좋은 콩만을 선정하여 만든 달지않고 담백한 맛이 특징인 두유제품 입니다.'},
    {name:'검은깨.검은콩 두유',description:'검은깨 검은콩 두유도 서울우유가 만들면 다릅니다'},
]
const coffee = [
    {name:'스페셜티 카페라떼',description:'스페셜티 원두와 깨끗하고 신선한 서울우유 원유로 만든 프리미엄 카페라떼'},
    {name:'스타벅스',description:'스타벅스 매장의 편안하고 즐거운 분위기를 언제 어디서나, 그대로 느낄 수 있는 스타벅스 컵커피'},
    {name:'스타벅스 콜드브루페트',description:'스타벅스만의 프리미엄을 강조한 PET 제품'},
    {name:'맥심 에스프레소 TOP 컵커피',description:'맥심TOP만이 가진 커피 전문성을 바탕으로 부드러우면서도 커피 본연의 맛과 향이 살아있는 컵커피'},
    {name:'커피빈 아메리카노',description:'신선한 커피 본연의 맛과 향을 그대로 간직한 커피빈 아이스커피'},
    {name:'커피포리 200',description:'1974년 출시된 삼각형 모양의 오리지날 대한민국 국민커피우유'},
    {name:'클릭유커피 200 멸균',description:'삼각포리 맛을 그대로 재현한 커피 멸균우유'},
    {name:'강릉커피',description:'강릉 바다의 감성을 담은 전문 바리스타의 프리미엄 커피'},
]
const pet = [
    {name:'아이펫밀크',description:'국내 최초 생산 반려동물 전용 우유'},
    {name:'아이펫밀크 저지방',description:'저지방, 저칼로리 펫밀크 제품'},
]

const beverage = [milk,ferment,juice,coffee,pet]
const beverage_name = ['milk','ferment','juice','coffee','pet']

let container
let wrap_name
let create_a 
let create_p 
let create_dl
let create_dt
let create_dd

beverage.forEach(function(target,index){
    
    //배열 인덱스 이용해서 DOM 객체 대입
    wrap_name = beverage_name[index]
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


//중요!
//appendChild() -> 기존 노드는 추가되지 않고 순서만 변경되기 때문에
//DOM 객체를 반복해서 추가하는 경우에는
//값을 반복문 안에서 대입해야한다!


//반복문 지정 전 하나의 배열로 먼저 구현해보기!

// const milk_container = document.querySelector('.milk_wrap .container')

// milk_container.forEach(function(target,index){
//     create_a = document.createElement('a')
//     create_p = document.createElement('p')
//     create_dl = document.createElement('dl')
//     create_dt = document.createElement('dt')
//     create_dd = document.createElement('dd')

//     create_a.classList.add('card')
//     create_p.classList.add('img')
//     create_dl.classList.add('txt')
//     create_dt.classList.add('t')
//     create_dd.classList.add('c')
    
//     create_a.appendChild(create_p)
//     create_a.appendChild(create_dl)
//     create_dl.appendChild(create_dt)
//     create_dl.appendChild(create_dd)

//     create_p.style.backgroundImage = `url(../images/sub_product_img/milk${index+1}.jpg`
//     create_dt.innerHTML = target.name
//     create_dd.innerHTML = target.description

//     milk_container.appendChild(create_a)
// })