// 생성자함수 대문자로 시작

// function Fruits(name, price) {
//     this.name = name;
//     this.price = price;
//     this.showPrice = function() {
//         console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
//     }

// }

// let orange = new Fruits("오렌지", 3000);
// let dragonFruit = new Fruits("용과", 2500);
// let banana = new Fruits("바나나", 2000);
// let pineApple = new Fruits("파인애플", 5000);

// orange.showPrice();
// dragonFruit.showPrice();
// banana.showPrice();
// pineApple.showPrice();


//실습

function People(name, gender) {
    this.name = name;
    this.gender = gender;
    this.shwoGender = function() {
        console.log(`${this.name}님의 성별은 ${this.gender} 입니다.`);
    }
}

let ur = new People("유림", "여");
let hs = new People("한솔", "남");
let sy = new People("세영", "여");

ur.shwoGender();
hs.shwoGender();
sy.shwoGender();