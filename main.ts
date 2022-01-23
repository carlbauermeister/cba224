input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("hi!")
    basic.showLeds(`
        # . . . #
        # . . . #
        . . # . .
        # . . . #
        . # # # .
        `)
    music.playMelody("E B C5 A B G A F ", Colors.Indigo)
})
input.onGesture(Gesture.Shake, function () {
	
})
