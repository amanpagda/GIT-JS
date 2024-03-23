// document.querySelector('#images').addEventListener('click', function(e) {
//     console.log(e.target.tagName)
//     if(e.target.tagName === 'IMG'){
//         let removeIt = e.target.parentNode;
//         removeIt.remove();
//     }
// })

// setTimeout(function(){
//     console.log("aman pagda");
// }, 3000)

const change = function() {
    document.querySelector('h2').innerHTML = 
    "not a Amazing image" 
}

const changeMe = setTimeout(change, 3000);

document.querySelector('#stop').addEventListener('click', function() {
    clearTimeout(changeMe);
})