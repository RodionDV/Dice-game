const gameInfo = document.querySelector("[data-game-info]");
const actionBtn= document.querySelector("[data-action-btn]");
const container = document.querySelector("[data-container]");

const generateRandomNumber = () => Math.ceil(Math.random() * 6);

const BlueWinnerText = `The winner is <span style="color: #449fcc;">Blue</span>`
const RedWinnerText = `The winner is <span style="color: #E98888;;">Red</span>`

 if (container.innerHTML === "") {
        gameInfo.innerHTML = `<span>Click on the button below</span>`
    }

actionBtn.addEventListener("click", () => {
    render();
})

const render = () => {
    const player1 = generateRandomNumber();
    const player2 = generateRandomNumber();

    container.innerHTML = "";

    container.insertAdjacentHTML("beforeend", `
        <svg class="dice dice-red">
            <use href="sprites.svg#dice-${player1}-icon"></use>
        </svg>
    `)

    container.insertAdjacentHTML("beforeend", `
        <svg class="dice dice-blue">
            <use href="sprites.svg#dice-${player2}-icon"></use>
        </svg>
    `)

    if (player2 > player1) {
        gameInfo.innerHTML = BlueWinnerText;
    } else if (player1 > player2) {
        gameInfo.innerHTML = RedWinnerText;
    } else {
        gameInfo.innerHTML = `<span style="color:grey">Draw</span>`
    }

}