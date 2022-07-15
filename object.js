const pororo = {
    name: "뽀로로",
    height: 70,
    weight: 50,
    gender: "None",
    say : function() {  // <- say(){ 로 축약 가능 
        console.log("뽀로로가 말을 합니다.")
    }
}

// for(key in pororo) {
//     console.log(key, pororo[key])  //pororo 에 key가 있는지 확인
// }

pororo.say();