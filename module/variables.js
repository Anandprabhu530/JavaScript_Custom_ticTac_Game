/** all the varialbes */

export let GAME = {
    X_CLASS : 'x', // value for cube and circle // x as oo's
    Y_CLASS : 'y', // value for square and star  // y as xx's
    turn : undefined,
    winner : null,
    selectedProfile :  document.querySelectorAll(".img .id"),
    blockElements : document.querySelectorAll('[data-cell]'),
    boardElement : document.getElementById("board"),
    startBtn : document.getElementById("startBtn"),
    startWindow : document.querySelector(".start-game"),
    winEl: document.querySelector(".winner-msg"),
    drawEl : document.querySelector(".draw-msg"),
    winnerImg : document.querySelector(".winner-msg .winner"),
    restartBtn : document.getElementById("restartBtn"),
    drawBtn : document.getElementById("drawBtn"),
}
