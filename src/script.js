const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
        value = `(${value}`;
    }

    console.log(value.length)
    e.target.value = value;
});
phoneInput.addEventListener("keydown", function (e) {
    const key = e.key;
    if (key === "Backspace") {
        const value = e.target.value;
        const pos = e.target.selectionStart;

        if (pos && value[pos - 1] === "-") {
            e.target.setSelectionRange(pos - 1, pos - 1);
        }

        if (pos && [" ", ")", "("].includes(value[pos - 1])) {
            e.target.setSelectionRange(pos - 1, pos - 1);
        }
    }
});
