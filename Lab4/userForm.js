function validateName() {
    var name = document.getElementById("name").value.trim();
    var err = document.getElementById("nameErr");

    if (name === "") {
        err.innerText = "Name is required";
        return false;
    } else {
        err.innerText = "";
        return true;
    }
}

function validateAge() {
    var age = document.getElementById("age").value.trim();
    var err = document.getElementById("ageErr");

    if (age === "" || isNaN(age) || age <= 0) {
        err.innerText = "Enter a valid age";
        return false;
    } else {
        err.innerText = "";
        return true;
    }
}

function validateEmail() {
    var email = document.getElementById("email").value.trim();
    var err = document.getElementById("emailErr");
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email)) {
        err.innerText = "Invalid email format";
        return false;
    } else {
        err.innerText = "";
        return true;
    }
}

function addUser() {
    if (!(validateName() && validateAge() && validateEmail())) {
        return;
    }

    var table = document.getElementById("table");
    var row = table.insertRow();

    row.insertCell(0).innerText = document.getElementById("name").value;
    row.insertCell(1).innerText = document.getElementById("age").value;
    row.insertCell(2).innerText = document.getElementById("email").value;

    resetForm();
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";

    document.getElementById("nameErr").innerText = "";
    document.getElementById("ageErr").innerText = "";
    document.getElementById("emailErr").innerText = "";
}
