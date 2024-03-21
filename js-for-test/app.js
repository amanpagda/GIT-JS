const button = document.querySelectorAll('.buttons');
const body = document.querySelector('body');
const white = document.querySelector('#white');
const dark = document.querySelector('#black');

button.forEach(function(mnb){
    mnb.addEventListener('click', function(a){
        if(a.target.id === 'white'){
            body.style.backgroundColor = 'white';
            if (white == '') {
                white.body.display = 'none'
            }
        } else if(a.target.id === 'black') {
            body.style.backgroundColor = 'rgb(24, 26, 27)';
           
        }
    })
})