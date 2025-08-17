let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let btns = ["red", "green", "blue", "orange"];

document.addEventListener("keydown", function () {
    if (!started) {
        started = true;
        levelup();
    }
});

function levelup() {
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    btnFlash(randBtn);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 700);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let useColor = btn.getAttribute("id");
    userseq.push(useColor);
    checkAns(userseq.length - 1);
}

function checkAns(currentIndex) {
    if (userseq[currentIndex] === gameseq[currentIndex]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h3.innerText = "Game Over! Press Any Key to Restart";
       document.body.classList.add("game-over");

    setTimeout(function () {
    document.body.classList.remove("game-over");
    }, 200);

    
        setTimeout(function () {
            document.body.classList.remove("game-over");
        }, 200);
        resetGame();
    }
}

function resetGame() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

// Add event listeners to all buttons
for (let color of btns) {
    let btn = document.querySelector(`.${color}`);
    btn.addEventListener("click", btnPress);
}
