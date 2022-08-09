const firstPage = document.querySelector('.firstPage')
const secondPage = document.querySelector('.secondPage')
const player1Inp = document.getElementById('player1Inp')
const player2Inp = document.getElementById('player2Inp')
const scoreBoard = document.querySelector('.scoreBoard')

const playField = [...document.querySelectorAll('.playField')]

const player1Name = document.querySelector('.player1Name')
const player2Name = document.querySelector('.player2Name')

function gameStart() {
    goToLobby()
    firstPage.style.display = 'none'
    if (player1Inp.value != '') {
        localStorage.setItem('player1' , player1Inp.value)
    } else {
        localStorage.setItem('player1' , 'guest1')
    }
    if (player2Inp.value != '') {
        localStorage.setItem('player2' , player2Inp.value)
    } else {
        localStorage.setItem('player2' , 'guest2')
    }
    secondPage.style.display = 'grid'
    scoreBoard.style.display = 'block'
    player1Name.innerHTML = localStorage.getItem('player1')
    player2Name.innerHTML = localStorage.getItem('player2')
}

let score = {
    p1Wins : 0,
    p2Wins : 0, 
    draws : 0
}


let turn = 'x'
function play(id) {
    if (document.getElementById(id).innerHTML === '') {
        if (turn === 'x') {
            document.getElementById(id).innerHTML = 'x'
            turn = 'o'
            document.querySelector('.turnInd').innerHTML = 'o'
        } else {
            document.getElementById(id).innerHTML = 'o'
            turn = 'x'
            document.querySelector('.turnInd').innerHTML = 'x'
        }
    }
        if (playField[0].innerHTML == playField[1].innerHTML && playField[0].innerHTML == playField[2].innerHTML && playField[0].innerHTML !='') {
            [playField[0] , playField[1] , playField[2]].forEach(element => {
                element.classList.add('winnerField', 'horizontalWinnerField')
                
            });
            document.querySelector('.gameOverContainer').style.display = 'block'
            if (turn == 'o') {
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player1')} won!`
                score.p1Wins++
                document.querySelector('.p1WinsCount').innerHTML = score.p1Wins
            } else if(turn == 'x'){
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player2')} won!`
                score.p2Wins++
                document.querySelector('.p2WinsCount').innerHTML = score.p2Wins
            }
        } else if (playField[3].innerHTML == playField[4].innerHTML && playField[4].innerHTML == playField[5].innerHTML && playField[5].innerHTML !='') {
            [playField[3] , playField[4] , playField[5]].forEach(element => {
                element.classList.add('winnerField', 'horizontalWinnerField')
            });
            document.querySelector('.gameOverContainer').style.display = 'block'
            if (turn == 'o') {
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player1')} won!`
                score.p1Wins++
                document.querySelector('.p1WinsCount').innerHTML = score.p1Wins
            } else if(turn == 'x'){
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player2')} won!`
                score.p2Wins++
                document.querySelector('.p2WinsCount').innerHTML = score.p2Wins
            }
        }   else if (playField[6].innerHTML == playField[7].innerHTML && playField[7].innerHTML == playField[8].innerHTML && playField[8].innerHTML !='') {
            [playField[6] , playField[7] , playField[8]].forEach(element => {
                element.classList.add('winnerField', 'horizontalWinnerField')
            });
            document.querySelector('.gameOverContainer').style.display = 'block'
            if (turn == 'o') {
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player1')} won!`
                score.p1Wins++
                document.querySelector('.p1WinsCount').innerHTML = score.p1Wins
            } else if(turn == 'x'){
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player2')} won!`
                score.p2Wins++
                document.querySelector('.p2WinsCount').innerHTML = score.p2Wins
            }
        }   
        // vertical
        else if (playField[0].innerHTML == playField[3].innerHTML && playField[6].innerHTML == playField[3].innerHTML && playField[0].innerHTML !='') {
            [playField[0] , playField[3] , playField[6]].forEach(element => {
                element.classList.add('winnerField', 'verticalWinnerField')
            });
            document.querySelector('.gameOverContainer').style.display = 'block'
            if (turn == 'o') {
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player1')} won!`
                score.p1Wins++
                document.querySelector('.p1WinsCount').innerHTML = score.p1Wins
            } else if(turn == 'x'){
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player2')} won!`
                score.p2Wins++
                document.querySelector('.p2WinsCount').innerHTML = score.p2Wins
            }
        } else if (playField[1].innerHTML == playField[4].innerHTML && playField[4].innerHTML == playField[7].innerHTML && playField[7].innerHTML !='') {
            [playField[1] , playField[4] , playField[7]].forEach(element => {
                element.classList.add('winnerField', 'verticalWinnerField')
            });
            document.querySelector('.gameOverContainer').style.display = 'block'
            if (turn == 'o') {
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player1')} won!`
                score.p1Wins++
                document.querySelector('.p1WinsCount').innerHTML = score.p1Wins
            } else if(turn == 'x'){
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player2')} won!`
                score.p2Wins++
                document.querySelector('.p2WinsCount').innerHTML = score.p2Wins
            }
        }   else if (playField[2].innerHTML == playField[5].innerHTML && playField[5].innerHTML == playField[8].innerHTML && playField[8].innerHTML !='') {
            [playField[2] , playField[5] , playField[8]].forEach(element => {
                element.classList.add('winnerField', 'verticalWinnerField')
            });
            document.querySelector('.gameOverContainer').style.display = 'block'
            if (turn == 'o') {
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player1')} won!`
                score.p1Wins++
                document.querySelector('.p1WinsCount').innerHTML = score.p1Wins
            } else if(turn == 'x'){
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player2')} won!`
                score.p2Wins++
                document.querySelector('.p2WinsCount').innerHTML = score.p2Wins
            }
        }
        // diagonal
        else if (playField[0].innerHTML == playField[4].innerHTML && playField[4].innerHTML == playField[8].innerHTML && playField[0].innerHTML !='') {
            
            document.querySelector('.gameOverContainer').style.display = 'block'
            if (turn == 'o') {
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player1')} won!`
                score.p1Wins++
                document.querySelector('.p1WinsCount').innerHTML = score.p1Wins
            } else if(turn == 'x'){
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player2')} won!`
                score.p2Wins++
                document.querySelector('.p2WinsCount').innerHTML = score.p2Wins
            }
            playField[0].classList.add('winnerField' , 'diagonaltopleftWinnerField')
            playField[4].classList.add('winnerField' , 'middleWinnerField1')
            playField[8].classList.add('winnerField' , 'diagonalbottomrightWinnerField')
        } else if (playField[2].innerHTML == playField[4].innerHTML && playField[4].innerHTML == playField[6].innerHTML && playField[6].innerHTML !='') {
        
            document.querySelector('.gameOverContainer').style.display = 'block'
            if (turn == 'o') {
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player1')} won!`
                score.p1Wins++
                document.querySelector('.p1WinsCount').innerHTML = score.p1Wins
            } else if(turn == 'x'){
                document.querySelector('.gameResult').innerHTML = `${localStorage.getItem('player2')} won!`
                score.p2Wins++
                document.querySelector('.p2WinsCount').innerHTML = score.p2Wins
            }
            playField[2].classList.add('winnerField' , 'diagonaltoprightWinnerField')
            playField[4].classList.add('winnerField' , 'middleWinnerField2')
            playField[6].classList.add('winnerField' , 'diagonalbottomleftWinnerField')
        } else if (playField[0].innerHTML != '' && playField[1].innerHTML != '' &&playField[2].innerHTML != '' &&
            playField[3].innerHTML != '' && playField[4].innerHTML != '' && playField[5].innerHTML != '' &&
            playField[6].innerHTML != '' && playField[7].innerHTML != '' && playField[8].innerHTML != '') {
                document.querySelector('.gameOverContainer').style.display = 'block'
                document.querySelector('.gameResult').innerHTML = 'draw!'
                score.draws++
                document.querySelector('.drawsCount').innerHTML = score.draws
            }
        

}

function playAgain() {
    document.querySelector('.gameOverContainer').style.display = 'none'
    playField.forEach(field => {
        field.innerHTML = ''
        field.classList.remove('winnerField' , 'horizontalWinnerField','verticalWinnerField', 'diagonaltopleftWinnerField', 'diagonalbottomrightWinnerField','diagonalbottomleftWinnerField','diagonaltoprightWinnerField', 'middleWinnerField1','middleWinnerField2')
    });
}
function goToLobby() {
    score = {
        p1Wins : 0,
        p2Wins : 0, 
        draws : 0
    }
    document.querySelector('.p1WinsCount').innerHTML = score.p1Wins
    document.querySelector('.p2WinsCount').innerHTML = score.p2Wins


    firstPage.style.display = 'block'
    secondPage.style.display = 'none'
    document.querySelector('.gameOverContainer').style.display = 'none'
    scoreBoard.style.display = 'none'
    playField.forEach(field => {
        field.innerHTML = ''
        field.classList.remove('winnerField' , 'horizontalWinnerField','verticalWinnerField', 'diagonaltopleftWinnerField', 'diagonalbottomrightWinnerField','diagonalbottomleftWinnerField','diagonaltoprightWinnerField', 'middleWinnerField1','middleWinnerField2')
    });
}