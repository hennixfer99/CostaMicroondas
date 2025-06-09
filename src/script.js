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
var splide = new Splide(".splide", {
    perPage: 1,
    gap: "2rem",
    type:"loop",
    drag:"free",
    snap: true,
    breakpoints: {
        850: {
            gap: ".7rem",
            width: "100%"
        },
        480: {
            gap: ".7rem",
        },
    },
});
var bar = splide.root.querySelector(".my-slider-progress-bar");
splide.on("mounted move", function () {
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + "%";
});

splide.mount();