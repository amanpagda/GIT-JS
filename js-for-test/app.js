const i = document.querySelector('#click');
const body = document.querySelector('body');

i.addEventListener('click', function aman(e) {
    if(e.target.id === 'click'){
        body.style.backgroundColor = "#212121";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "#fff";
        body.style.color = "black";
    }
})