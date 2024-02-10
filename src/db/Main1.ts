export interface MainDataInter {
  id: number;
  title: string;
  content: string;
  price: number;
  thumbnail: string;
  url: string[];
}

let mainData :MainDataInter[]  = [
  {
    id: 1, 
    title: "상큼딸기 마카롱",
    content: "새콤달콤한 딸기크림을 필링하여 리얼100% 딸기다이스를 입힌 상큼딸기 마카롱",
    price: 1800,
    thumbnail: "https://jonghoonkim1004.github.io/FirstReactData/img/Product/001/001_1.jpg",
    url: ["https://jonghoonkim1004.github.io/FirstReactData/img/Product/001/001_1.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/001/001_2.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/001/001_3.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/001/001_4.jpg","info_del.jpg"]
  },{
    id: 2,
    title: "겨울왕국 마카롱",
    content:"부드럽고 밀크한 순수 우유필링에 달콤한 초코칩과 눈꽃을 토핑한 비쥬얼최고! 겨울왕국 마카롱",
    price: 1700,
    thumbnail: "https://jonghoonkim1004.github.io/FirstReactData/img/Product/002/002_1.jpg",
    url: ["https://jonghoonkim1004.github.io/FirstReactData/img/Product/002/002_1.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/002/002_2.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/002/002_3.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/002/002_4.jpg","info_del.jpg"]
  },{
    id: 3,
    title: "솔티카라멜 마카롱",
    content: "카라멜과 프랑스산 소금으로 필링하여 프레젤과자를 올린 단짠단짠~ 솔티카라멜 마카롱",
    price: 1600,
    thumbnail: "https://jonghoonkim1004.github.io/FirstReactData/img/Product/003/003_1.jpg",
    url: ["https://jonghoonkim1004.github.io/FirstReactData/img/Product/003/003_1.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/003/003_2.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/003/003_3.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/003/003_4.jpg","info_del.jpg"]
  },{
    id: 4,
    title: "황치즈 마카롱",
    content: "짭조름한 진한 치즈 맛으로 필링하고 바삭한 크래커를 올려 자꾸만 손이 가는 황치즈 마카롱",
    price: 1600,
    thumbnail: "https://jonghoonkim1004.github.io/FirstReactData/img/Product/004/004_1.jpg",
    url: ["https://jonghoonkim1004.github.io/FirstReactData/img/Product/004/004_1.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/004/004_2.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/004/004_3.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/004/004_4.jpg","info_del.jpg"]
  },{
    id: 5,
    title: "크러쉬초코 마카롱",
    content: "달달한 초코크림을 필링하여, 초콜렛 코팅과 벨기에산 렌틸초콜렛을 올려준 크러쉬초코 마카롱",
    price: 1700,
    thumbnail: "https://jonghoonkim1004.github.io/FirstReactData/img/Product/005/005_1.jpg",
    url: ["https://jonghoonkim1004.github.io/FirstReactData/img/Product/005/005_1.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/005/005_2.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/005/005_3.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/005/005_4.jpg", "https://jonghoonkim1004.github.io/FirstReactData/img/Product/collection_m.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/info_del.jpg"]
  },{
    id: 6,
    title: "돼지바 마카롱",
    content: "마다가스카르산 최고급 바닐라 크림을 필링하여 딸기잼으로 속을 채우고 바삭하고 달콤한 초코, 딸기, 카라멜 쿠키크런치를 입힌 돼지바 마카롱",
    price: 1800,
    thumbnail: "https://jonghoonkim1004.github.io/FirstReactData/img/Product/006/006_1.jpg",
    url: ["https://jonghoonkim1004.github.io/FirstReactData/img/Product/006/006_1.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/006/006_2.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/006/006_3.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/006/006_4.jpg", "https://jonghoonkim1004.github.io/FirstReactData/img/Product/collection_m.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/info_del.jpg"]
  },{
    id: 7,
    title: "얼그레이 마카롱",
    content: "진한 얼그레이 크림을 필링하여 입안 가득 향긋함이 퍼지는 얼그레이 마카롱",
    price: 1700,
    thumbnail: "https://jonghoonkim1004.github.io/FirstReactData/img/Product/007/007_1.jpg",
    url: ["https://jonghoonkim1004.github.io/FirstReactData/img/Product/007/007_1.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/007/007_2.jpg", "https://jonghoonkim1004.github.io/FirstReactData/img/Product/collection_m.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/info_del.jpg"]
  },{
    id: 8,
    title: "누텔라 과자상자 마카롱",
    content: "달달한 누텔라크림 필링하여, 다양한 과자를 올린 누텔라 과자상자 마카롱",
    price: 1800,
    thumbnail: "https://jonghoonkim1004.github.io/FirstReactData/img/Product/008/008_1.jpg",
    url: ["https://jonghoonkim1004.github.io/FirstReactData/img/Product/008/008_1.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/008/008_2.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/008/008_3.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/008/008_4.jpg", "https://jonghoonkim1004.github.io/FirstReactData/img/Product/collection_m.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/info_del.jpg"]
  },{
    id: 9,
    title: "오레오 마카롱",
    content: "달달한 오레오 크림으로 필링하고 오레오 과자를 넣은 오레오 마카롱",
    price: 1700,
    thumbnail: "https://jonghoonkim1004.github.io/FirstReactData/img/Product/009/009_1.jpg",
    url: ["https://jonghoonkim1004.github.io/FirstReactData/img/Product/009/009_1.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/009/009_2.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/009/009_3.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/009/009_4.jpg", "https://jonghoonkim1004.github.io/FirstReactData/img/Product/collection_m.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/info_del.jpg"]
  },{
    id: 10,
    title: "딸기요거트 마카롱",
    content: "새콤달콤한 요거트크림과 딸기잼의 환상의 조합 딸기요거트 마카롱",
    price: 1700,
    thumbnail: "https://jonghoonkim1004.github.io/FirstReactData/img/Product/010/010_1.jpg",
    url: ["https://jonghoonkim1004.github.io/FirstReactData/img/Product/010/010_1.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/010/010_2.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/010/010_3.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/010/010_4.jpg", "https://jonghoonkim1004.github.io/FirstReactData/img/Product/collection_m.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/info_del.jpg"]
  },{
    id: 11,
    title: "복숭아요거트 마카롱",
    content: "상큼한 요거트 크림 필링 안에 달콤한 복숭아를 채운 복숭아요거트 마카롱",
    price: 1700,
    thumbnail: "https://jonghoonkim1004.github.io/FirstReactData/img/Product/011/011_1.jpg",
    url: ["https://jonghoonkim1004.github.io/FirstReactData/img/Product/011/011_1.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/011/011_2.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/011/011_3.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/011/011_4.jpg", "https://jonghoonkim1004.github.io/FirstReactData/img/Product/collection_m.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/info_del.jpg"]
  },{
    id: 12,
    title: "말차초코칩 마카롱",
    content: "진한 말차크림으로 필링하여, 달콤한 초코칩 씹히는 식감도 느낄 수 있는 고급진 말차초코칩 마카롱",
    price: 1600,
    thumbnail: "https://jonghoonkim1004.github.io/FirstReactData/img/Product/012/012_1.jpg",
    url: ["https://jonghoonkim1004.github.io/FirstReactData/img/Product/012/012_1.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/012/012_2.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/012/012_3.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/012/012_4.jpg", "https://jonghoonkim1004.github.io/FirstReactData/img/Product/collection_m.jpg","https://jonghoonkim1004.github.io/FirstReactData/img/Product/info_del.jpg"]
  }
]

export default mainData;