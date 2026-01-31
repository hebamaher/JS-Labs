var inp = document.querySelector("#Answer");

function EnterNumber(num) {
    inp.value += num;
}

function EnterOperator(op) {
    // Prevent entering two operators in a row
    var lastChar = inp.value[inp.value.length - 1];

    if (isNaN(lastChar) && lastChar !== ".") {
        return;
    }

    inp.value += op;
}

function EnterEqual() {
    try {
        inp.value = eval(inp.value);
    } catch (error) {
        alert("Invalid Expression");
        inp.value = "";
    }
}

function EnterClear() {
    inp.value = "";
}

// Prevent keyboard input
inp.addEventListener("keydown", function (event) {
    event.preventDefault();
});
