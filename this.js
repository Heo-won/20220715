//this. 자기가 속한 오브젝트를 반영한다

// function sayHello() {
//     console.log(`Hello, I'm ${this.name}`);
//     console.log(this);
// }

// let boy = {
//     name:"Dustin",
//     sayHello
// }

// let girl = {
//     name:"Anna",
//     sayHello
// }

// boy.sayHello();
// girl.sayHello();


//실습
function showHeight() {
    console.log(this.height)
}

// const showHeight = () => {
//     console.log(this.height);
//     consonle.log(this);
// }     //화살표 함수 let const 상관없음
// // 결과 : 화살표 함수 this 먹지 않음

function showName() {
    console.log(this.name)
}

// let showName = () => {
//     console.log(this.name);
//     consonle.log(this);
// }     //화살표 함수 let const 상관없음
// //결과 : 화살표 함수 this 먹지 않음

const pororo = {
    name:"뽀로로",
    height:200,
    showName,
    showHeight
}

const loopy = {
    name:"루피",
    height:210,
    showName,
    showHeight
}

pororo.showName();
pororo.showHeight();

loopy.showName();
loopy.showHeight();

                //  ***화살표 함수에는 this 를 가지지 않음 (this가 없음)