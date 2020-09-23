input.onButtonPressed(Button.A, function () {
    if (locatie <= 5) {
        locatie += 1
    } else {
        locatie = 0
    }
    basic.showNumber(locatie)
})
input.onButtonPressed(Button.AB, function () {
    if (locatie == 0) {
        basic.showString("GROTE MARKT")
        basic.pause(200)
        basic.showLeds(`
            # # # . .
            # # . . .
            # . # . .
            . . . # .
            . . . . #
            `)
        basic.pause(200)
        basic.showString("500m")
    }
    if (locatie == 1) {
        basic.showString("ATOMIUM")
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(200)
        basic.showString("1,5km")
    }
    if (locatie == 2) {
        basic.showString("MANNEKE PIS")
        basic.pause(200)
        basic.showLeds(`
            # . . . .
            . # . . #
            . . # . #
            . . . # #
            . # # # #
            `)
        basic.pause(200)
        basic.showString("800M")
    }
    if (locatie == 3) {
        basic.showString("JUBELPARK")
        basic.pause(200)
        basic.showLeds(`
            # # # . .
            # # . . .
            # . # . .
            . . . # .
            . . . . #
            `)
        basic.pause(200)
        basic.showString("750M")
    }
    if (locatie == 4) {
        basic.showString("CENTRAAL STATION")
        basic.pause(200)
        basic.showLeds(`
            . . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
        basic.pause(200)
        basic.showString("400M")
    }
    if (locatie == 5) {
        basic.showString("DE BROUCKERE")
        basic.pause(200)
        basic.showLeds(`
            # # # . .
            # # . . .
            # . # . .
            . . . # .
            . . . . #
            `)
        basic.pause(200)
        basic.showString("2KM")
    }
    if (locatie == 6) {
        basic.showString("ERASMUS")
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.pause(200)
        basic.showString("1,6KM")
    }
})
input.onButtonPressed(Button.B, function () {
    if (locatie >= 1) {
        locatie += -1
    } else {
        locatie = 6
    }
    basic.showNumber(locatie)
})
let locatie = 0
locatie = 0
