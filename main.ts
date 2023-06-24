input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 3) {
        basic.showNumber(input.temperature())
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
