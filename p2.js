const person1 = {
    fullName : function() {
        return this.fname + " " + this.lname; 
    }
}

const person2 = {
    fname : "aman",
    lname : "pagda", 
}

let x = person1.fullName.call(person2);
document.querySelector("#p2").innerHTML = x;