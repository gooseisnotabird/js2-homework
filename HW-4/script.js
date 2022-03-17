
let textBefore = document.getElementById('text-box__before-text');
let textAfter = document.getElementById('text-box__after-text');



let changeText = () => {
    let str = textBefore.textContent;
    console.log(str);

    textAfter.innerText = str.replace(/\B'|'\B/g, '"');

    //другой вариант
    //textAfter.innerText = str.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');    

};