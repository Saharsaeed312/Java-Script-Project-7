
function rollBtn(){
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var player1 = document.querySelector("img.img1");
var player2 = document.querySelector("img.img2");
if (randomNumber1 === 1) {
player1.setAttribute("src", "imgs/side_1_pip.png");
}
else if (randomNumber1 === 2) {
player1.setAttribute("src", "imgs/side_2_pip.png");
}
else if (randomNumber1 === 3) {
player1.setAttribute("src", "imgs/side_3_pips.png");
}
else if (randomNumber1 === 4) {
player1.setAttribute("src", "imgs/side_4_pips.png");
}
else if (randomNumber1 === 5) {
player1.setAttribute("src", "imgs/side_5_pips.png");
}
else if (randomNumber1 === 6) {
player1.setAttribute("src", "imgs/side_6_pips.png");
}
if (randomNumber2 === 1) {
player2.setAttribute("src", "imgs/side_1_pip.png");
}
else if (randomNumber2 === 2) {
player2.setAttribute("src", "imgs/side_2_pips.png");
}
else if (randomNumber2 === 3) {
player2.setAttribute("src", "imgs/side_3_pips.png");
}
else if (randomNumber2 === 4) {
player2.setAttribute("src", "imgs/side_4_pips.png");
}
else if (randomNumber2 === 5) {
player2.setAttribute("src", "imgs/side_5_pips.png");
}
else if (randomNumber2 === 6) {
player2.setAttribute("src", "imgs/side_6_pips.png");
}
}


// if (randomNumber2 > randomNumber1) {
// document.querySelector("h1").innerHTML = "Player 2 wins! 🎉";
// }
// else if (randomNumber1 > randomNumber2) {
// document.querySelector("h1").innerHTML = "🎉 Player 1 wins!";
// }
// else {
// document.querySelector("h1").innerHTML = "🎉Tie!🎉";
// }