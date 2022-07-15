// let boxEl = document.querySelector(".box");

// console.log(boxEl);

// boxEl.classList.add("active");

// console.log(boxEl);

// boxEl.classList.remove("active");

// console.log(boxEl.classList.contains("active"));

//addEventListener'

// let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click", function() {
//     if(boxEl.classList.contains("orange")) {
//         boxEl.classList.remove("orange");
//         boxEl.classList.add("skyblue");
//     }else if(boxEl.classList.contains("skyblue")) {
//         boxEl.classList.remove("skyblue");
//         boxEl.classList.add("orange");
//     } else {
//         boxEl.classList.add("orange");
//     }
// })

// let boxEl = document.querySelector(".box");
// let input = document.getElementById("input");

// boxEl.addEventListener("click", function(){
//     inputEl.setAttribute("placeholder", "아이디를 입력하세요");
// })

//textContent
// let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click", function(){
//     boxEl.textContent = "KDT";
// })

//실습
let boxEl = document.querySelector(".box");

boxEl.addEventListener("click", function () {
  if (boxEl.classList.contains("orange")) {
    boxEl.classList.remove("orange");
    boxEl.classList.add("skyblue");
  } else if (boxEl.classList.contains("skyblue")) {
    boxEl.classList.remove("skyblue");
    boxEl.classList.add("orange");
  } else {
    boxEl.classList.add("orange");
  }
});

let buttonOne = document.getElementById("button-1");
let buttonTwo = document.getElementById("button-2");
let inputEl = document.getElementById("input");
let spanEl = documnet.querySelector("span"); // -> 태그선택자

buttonOne.addEventListener("click", function () {
  inputEl.setAttribute("placeholder", "아이디를 입력하세요");
  spanEl.textContent = "아이디를 입력해주세요."; // -> 괄호열지 않고 그냥 부름
});
//첫번째 버튼을 눌렀을 때 동작

buttonTwo.addEventListener("click", function () {
  let inputText; //변수선언
  inputText = inputEl.value;
  spanEl.textContent = inputText;
});
// input.addEventListener("click", function () {
//     input.setAttribute("placeholder", "아이디를 입력하세요");
// })

// textContent
// let abcdEl = document.querySelector(".abcd");

// abcdEl.addEventListener("click", function () {
//     boxEl.textContent = "`아이디를 입력하세요.`";
// })
