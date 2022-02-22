let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');

let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');

let buttons = [button1, button2, button3];
let divs = [div1, div2, div3];

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        buttons[0].classList.remove('gray');
        divs.forEach((element) => {
            element.classList.remove('active');
        })
        divs[i].classList.add('active');
    })
}
    