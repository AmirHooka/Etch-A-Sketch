
const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer");
document.body.prepend(buttonContainer);

const container = document.querySelector("#container");
let cubePerSide = 64; 
buildGrid(cubePerSide);

function clearContainer() {
    container.innerHTML = "";
}

function buildGrid(size) {
    for(let i = 0 ; i < (size * size) ; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    }
    document.querySelectorAll(".square").forEach(square => {
    square.addEventListener("mouseenter", event => {
        event.target.style.backgroundColor = "white";
    });
    });

}

const popBtn = document.createElement("button"); 
popBtn.setAttribute("id", "popBtn");
popBtn.textContent = "SELECT THE GRID RESOLUTION";
popBtn.addEventListener("click", event => {
    let userChoice = prompt("SELECT THE GRID SIZE");
    if (Number(userChoice) && userChoice >= 1 && userChoice <= 100) {
        cubePerSide = userChoice;
        container.style.setProperty("--user-choice", cubePerSide);
        
    } else {
        alert("your mum is ded");
        buildGrid(userChoice);
    }
    clearContainer();
    buildGrid(userChoice);
    


})
buttonContainer.prepend(popBtn);







