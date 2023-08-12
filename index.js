const search = document.querySelector("#search");
const divs = document.querySelectorAll(".list");
console.log(search);

search.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();

    divs.forEach(item => {
        item.querySelector("h3").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display="none");
    })
})



