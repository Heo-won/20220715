let boxEls = document.querySelectorAll(".box");

console.log(boxEls);

boxEls.forEach(function (boxEl, index) {
    boxEl.classList.add(`box_${index + 1}`);
})

console.log(boxEls);