console.log("Website Loaded Successfully");

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const cards = document.querySelectorAll(".card");

searchBtn.addEventListener("click", function () {
    let value = searchInput.value.toLowerCase();

    cards.forEach(function (card) {
        let text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

document.getElementById("lostBtn").addEventListener("click", function () {
    alert("Lost Item Form Coming Soon!");
});

document.getElementById("foundBtn").addEventListener("click", function () {
    alert("Found Item Form Coming Soon!");
});