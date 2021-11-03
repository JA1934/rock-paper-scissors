input.onButtonPressed(Button.A, function () {
    PLAYERASCORE = PLAYERASCORE + 1
    basic.showNumber(PLAYERASCORE)
    if (PLAYERASCORE == 10) {
        basic.showString("PLAYER A WINS")
    }
})
input.onButtonPressed(Button.AB, function () {
    PLAYERASCORE = 0
    PLAYERBSCORE = 0
})
input.onButtonPressed(Button.B, function () {
    PLAYERBSCORE = PLAYERBSCORE + 1
    basic.showNumber(PLAYERBSCORE)
    if (PLAYERBSCORE == 10) {
        basic.showString("PLAYER B WINS")
    }
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
let hand = 0
let PLAYERBSCORE = 0
let PLAYERASCORE = 0
PLAYERASCORE = 0
PLAYERBSCORE = 0
