input.onButtonPressed(Button.A, function () {
    answer += 1
    basic.showNumber(answer)
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.showNumber(answer)
})
input.onButtonPressed(Button.B, function () {
    answer += -1
    basic.showNumber(answer)
})
let answer = 0
basic.showString("calculator")
answer = 0
