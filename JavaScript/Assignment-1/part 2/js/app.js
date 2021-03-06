console.log("Loading data to storage...");

function onSubmit() {
    var txt = "";
    if (document.getElementById("number").validity.rangeOverflow) {
        txt = "Value too large";
    } else {
        txt = "Input OK";
    }
    document.getElementById("demo").innerHTML = txt;
    if (document.getElementById("number").validity.rangeUnderflow) {
        txt = "Value too small";
    } else {
        txt = "Input OK";
    }
    document.getElementById("demo").innerHTML = txt;


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const dob = document.getElementById("dob").value;
    const user = new User(name, email, number, dob);
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem(user.email, user.toString());
        alert("Data saved successfully!");
    } else {
        alert("Data not saved!");
    }
}

function User(name, email, number, dob) {
    this.name = name;
    this.email = email;
    this.number = number;
    this.dob = dob;
    this.toString = function() {
        return name + " " + email + " " + number + " " + dob;
    }
}
console.log("Data saved!");