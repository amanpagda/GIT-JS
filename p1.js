function myFunction() {
    const message = document.querySelector("#p1");
    message.innerHTML = "";

    let x = document.querySelector("#demo").value;
    try {
        if (x.trim() == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x <= 5) throw "small number"
        if (x >= 10) throw "big number"
    } catch (error) {
        message.innerHTML = "input is " + error;
    }
    finally {
        document.querySelector("#demo").value = "";
    }
}