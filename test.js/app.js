const buttons = document.querySelectorAll(".click");
const body = document.querySelector("body");

buttons.forEach(function(a) {
    a.addEventListener('click', function(x){
        if(x.target.id === 'black'){
            body.style.backgroundColor = "#212121";
        } else if(x.target.id === 'white'){
            body.style.backgroundColor = "white";
        }
    })
})