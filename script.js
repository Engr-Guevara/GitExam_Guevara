document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector("button");

    button.addEventListener("click", function () {
        let rows = document.querySelectorAll("table tr");


        if (rows.length >= 4) {
            rows[2].style.backgroundColor = "yellow";
            rows[4].style.backgroundColor = "yellow";
        }
    });
});
