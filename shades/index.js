const sortBtn = document.getElementById("sort-btn");
const container=document.querySelector(".container")


sortBtn.addEventListener("click", function () {

     container.classList.toggle("reverse")
});
