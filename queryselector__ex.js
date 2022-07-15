let boxEls = document.querySelectorAll(".box");

boxEls.forEach(function(boxEl, index) {  //일을 시킬 때 익명함수가 기본 ** function ()  
    if(index % 7 === 0 ) {
        boxEl.style.backgroundColor = "red"; //비추...
        boxEl.classList.add(`box_1`);
    } else if(index % 7 === 1 ) {
        boxEl.style.backgroundColor = "orange";
        boxEl.classList.add(`box_2`);
    } else if(index % 7 === 2 ) {
        boxEl.style.backgroundColor = "yellow";
        boxEl.classList.add(`box_3`);
    } else if(index % 7 === 3 ) {
        boxEl.style.backgroundColor = "green";
        boxEl.classList.add(`box_4`);
    } else if(index % 7 === 4 ) {
        boxEl.style.backgroundColor = "blue";
        boxEl.classList.add(`box_5`);
    } else if(index % 7 === 5 ) {
        boxEl.style.backgroundColor = "navy";
        boxEl.classList.add(`box_6`);
    } else if(index % 7 === 6 ) {
        boxEl.style.backgroundColor = "purple";
        boxEl.classList.add(`box_7`);
    }
    
//     boxEl.classList.add(`box_${index + 1}`)
// //각요소한테 가야하니 boxEls x

}) 