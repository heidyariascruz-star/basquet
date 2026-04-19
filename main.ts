basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        game.addScore(1)
        game.addLife(0)
    } else {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    }
    basic.pause(5000)
    music.play(music.stringPlayable("C D E - - - - - ", 100), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.showNumber(game.score())
})
