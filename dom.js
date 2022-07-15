// let boxEl = document.querySelector(".box");
// //querySelector css의 선택자 랑 비슷 (백엔드에서 데이터를 주고받을 때 부르는 것이 쿼리)
// console.log(boxEl);

let boxEl = document.getElementById("second-box"); //#쓰면안됨 querySelector은 #써야함.

console.log(boxEl);

// let boxEl = document.getElementsByTagName : ex :p하면 p태그 다 호출


let boxEl = document.querySelector(".box");

console.log(boxEl);

boxEl.classList.add(".active");

console.log(boxEl);