let button = document.querySelector('button');
let links = document.querySelectorAll('a');
let body = document.querySelector('body');
let header = document.querySelector('header');
let container = document.querySelector('.container');
let footer = document.querySelector('footer');




button.addEventListener('click', () => {
    button.classList.toggle('dark_button');
    let dark = document.querySelector('.dark_button');
    if(dark){
        dark.innerText = 'White Theme';
    } else{
        button.innerText = 'Dark Theme';
    }
    body.classList.toggle('body_gray');
    header.classList.toggle('dark_gray');
    container.classList.toggle('gray');
    footer.classList.toggle('dark_gray');
    links.forEach((element) => {
        element.classList.toggle('a_white');
    })

})