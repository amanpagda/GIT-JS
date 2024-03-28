const button = document.querySelectorAll('.click');
const body = document.querySelector('body');

button.forEach(function(buttons){
    buttons.addEventListener('click', function(w){
        if(w.target.id === 'white'){
            body.style.backgroundColor = 'white';
        }else if(w.target.id === 'black'){
            body.style.backgroundColor = '#212121';
        }
    })
});