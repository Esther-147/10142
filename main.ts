input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.West)
    basic.pause(200)
})
basic.forever(function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
})
