namespace SpriteKind {
    export const boss = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . 
        . . . 9 . . . 
        . . 6 6 6 . . 
        . 7 6 6 6 7 . 
        . 7 7 6 6 7 . 
        . 7 7 7 7 7 . 
        . 7 7 7 7 7 . 
        . . 6 6 7 . . 
        `, ship, 0, -140)
    projectile.startEffect(effects.coolRadial, 100)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 2158, 0, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
function sound () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1171, 12, 0, 161, 2000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.InBackground)
}
statusbars.onZero(StatusBarKind.Health, function (status) {
    for (let index = 0; index < 4; index++) {
        music.bigCrash.play()
    }
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    enemies = [img`
        2 2 4 5 . . . . . . . . e e e e 
        2 2 4 4 5 . . . . . . e e e e e 
        . 2 2 4 5 4 4 . . 2 2 e e e e . 
        . . 2 2 f f 2 2 c c f f f e . . 
        . . . . 2 2 5 4 4 4 e e . . . . 
        . . . . 8 2 2 2 c c c 8 . . . . 
        . . . . 8 . 2 5 4 e . 8 . . . . 
        . . . . 8 . 2 5 e e . 8 . . . . 
        . . . . 5 . . 4 e . . 5 . . . . 
        . . . . 2 . . f f . . 2 . . . . 
        . . . . . . . 4 c . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . b c . . . . . . . 
        . . . . . . . d c . . . . . . . 
        . . . . . . . d c . . . . . . . 
        . . . . . . . d c . . . . . . . 
        `, img`
        a c . . . . . . . . . . . . c 8 
        a a 3 3 1 3 . . . . . 8 8 8 8 8 
        . a a 3 1 3 3 3 3 a a 8 8 8 8 . 
        . . a a f f a a c c f f f 8 . . 
        . . 8 8 a a 1 3 3 3 8 8 a a . . 
        . . 8 8 . a a a c c c . a a . . 
        . . 8 8 . . a 1 3 8 . . a a . . 
        . . 8 . . . a 1 8 8 . . . a . . 
        . . 5 . . . . 3 8 . . . . 5 . . 
        . . 2 . . . . f f . . . . 2 . . 
        . . . . . . . 3 c . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . b c . . . . . . . 
        . . . . . . . d c . . . . . . . 
        . . . . . . . d c . . . . . . . 
        . . . . . . . d c . . . . . . . 
        `, img`
        6 6 . 5 7 . . . . . . c c . 8 8 
        . 6 7 7 5 7 7 7 6 6 8 8 8 8 8 . 
        . . 6 7 5 7 7 7 7 6 6 8 8 8 . . 
        . . 6 6 f f 6 6 c c f f f 8 . . 
        . . 5 5 6 6 5 7 7 7 8 8 7 7 . . 
        . . 5 . 5 6 6 6 c c c 7 . 7 . . 
        . . 5 . 5 . 6 5 7 8 . 7 . 7 . . 
        . . 5 . 5 . 6 5 8 8 . 7 . 7 . . 
        . . 5 . 2 . . 7 8 . . 2 . 7 . . 
        . . 2 . . . . f f . . . . 2 . . 
        . . . . . . . 7 c . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . b c . . . . . . . 
        . . . . . . . d c . . . . . . . 
        . . . . . . . d c . . . . . . . 
        . . . . . . . d c . . . . . . . 
        `]
    boss.destroy(effects.fire, 500)
    bossOn = 0
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    statusbar.value += -5
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1445, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate, 200)
    info.changeScoreBy(1)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1445, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    if (info.score() % 5 == 0) {
        enemySpeed += 5
        gamespeed += -50
    }
    if (info.score() % 30 == 0) {
        info.changeLifeBy(1)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 61, 656, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        scene.setBackgroundImage(img`
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222222222222222222299d99bbbbbc22222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222299ddbdd66168bcccccc9222222222222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222222222222999ddbbbd66fff111ccccccb99222222222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222222222996655bbbb66fff11f1fccccccbbc992222222222222222222222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222222222222222222222dd69555bbb6661fff1ffff1ff1fcccccbe922222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222222ddd94554b6dbd6ffffffffffffffffcccccc99222222222222222222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222222222222222222dbbd5444444dbb66fff6ffffffcccccccccccccc922222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222dbbb55444944d4ff66ffffffcccccccccccccccccc69222222222222222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222222222222222dbbb555449444444fffffffffccccbbbcc8bcccccccccc922222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222dbbb555444444444fffffffffcbbcfefbbbcbcccccbbcccb92222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222229bbb5554444444444ffffffffbccbffffffbbbbbfffffbccccc222222222222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222222222222dbbb555449444444844ffff6fbbbbbfffffffcccfffbffbbc8ccc22222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222dbbb9d55ddd44444884ffff6ffbbcbfffffffffbcfffbccfbc886c92222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222bbbbbbddd9444448884ffffffffffffffbfffffffffffccfccc886c9222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222dbbbbbbdd4944444444f6ffffffffffbb2bbebbffffffffffbcc8c86c922222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222229bbdbddd4444444444fff6fff6ffff222222222effffffffffbccbbcccc22222222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222222229dbb5dd44444444444ff4fffffffb222222f2ff22fffffdffbfebccbbbbc92222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222dd5555544444444444ff4fffffffb22222fffff2fffffffffbfbbbccc8bbb9222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222225dd5555449494444444444ffffbbb22222fffddfffffffffffff8bcccbb8bbc222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222225d5555544449444444484fffffbb222ffffdffffffffffffffffffbbccc88bc922222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222225555555544499449444884ff6fbb22222fffdfffffffffffffbfffffbcccc88c522222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222222555556654449444944d884f666b22fff22ffdffffffffffffffffffffbbccc88592222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222225555556655449444444d44ff66fb22ffdffffffffffffffffffffffffffbcccc8552222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222225dd5556655444444444444ff66fb222fffffffffffffffffffffffffffffbbccc559222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222555555665d494444444444fff6fb22fffdfffffffffffffffffffffffffffbbccf59222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222255555556ddd494444444ffffff6f22fddffffffffffffffffffffffffffffffffff55222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222555555569ddd44494444ff6fffffffffffffffffffffffffffffffbfffffffffffff5922222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222255555566ddddd4494444ffffffffffffffffffffffffffffffffbfffffffffffffff5922222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222225552255666dddd444444444fff6fffffffffffffffffffffffffffffffffffffffffff922222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222552222566694444444444fffff6ffffffffffffffffffffffffffbffffffffffffffff522222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222225522d2266694944444444fffff6ffffffffffffffffffffffffffbffffffffffffffff552222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222255d22222669494444444444fff6f6ffffffffeffffffffffffffffffffffffffffffff552222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222255222222e6949444444444ffffffffffffffffffffffffffffffffffffffffffffffff552222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222522222cc2c449444444444fffff6fffffffffffdfffeffffffffffffffffffbbffffff552222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222522222222cc4999444448866fff6ffffff22ffd22dffffffffffffffffffffebffffff552222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222522222222ccc99994444886ffffffffff22222222dffcfffffffffffffffffffffffff552222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222225e2222cccccccc99444444ffffffffffffff222222ffffffffffffffffffffffffffff552222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222522222ccccccccc444444ffff66fffffffff222222ddfffffffffffffffffffffffffbb52222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222222222cccccccccc44444fffffffffffffffff2ffffffffffffffffffffffffffffffbb52222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222225d2222cc22ccccccb4444fff6fffffffffffffffffffffffffffffffffffffffffffffb52222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222225d22222222cccccbb444444fffffffffffffffffffffffffffffffffffffffffffffff652222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222252222222cccccccb4444444fffffffffffffffffffffffffffffffffffffffffffffff652222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222252222222ccccccbb4444444fffffffffffffffffffffffffffffffffffffffffffffff622222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222225522222222ccccb444444ffffffffffffffffffffffffffffffbffffffffffffffffff622222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222255d222c22ccccb444444ffffffffffffffffffffffffffffffffffffffffffccffff6922222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222255d222cccccccc444444f4ff6fffffffffffffffffffffffffffffffffffffccffff6922222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222255522222ccccbc44444444ff6fffffffffffffffffffffffffffffffffffffddffff6222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222565222222cccc4944444444f6fff6ffffffffffffffffffffffffffffffffbdfffff6222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222552222cccccc494bb44ffffffff6fffffffffffffffffffffffffffffffbbdffff69222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222225555222cccc9444dbbbfffffffffffffffffffffffffccfffffffffffffbcfffff62222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222226552222ccc944944bbbfffffffffffffffffffffffffffffffffffffffbccfff592222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222222555522cccc444444dbbddffffffff6fffffffffffffffffffffffffffffffff5592222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222225655d2cccc44444444bb6dfffffff6fffffffffffffffffffffffffffffffff5922222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222229656222cc44444444dbbd6ff6f6fffffffffffffffffffffffffffffffffd55922222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222555e22ccc444444444dbbff6ffff6fffffffffffffffffffffffffffff9b59222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222565cc2cc44994444444bbbf6fffffffffffffffffffffffffffffffffffb52222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222296ccccc944944444444bbf6ff666fffffffffffffffffffffffffffff6992222222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222222222299ccbc994444444444dbb6fff66fffffffffffffffffffffffffffff6922222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222969ccb9444444444444dbbfff66ffffffffffffffffffffffffffff59222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222969ccc4494444444444ddffff66ffffffffffffffffffffffffff552222222222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222222222222969cc9449444944d44ddfffff6fffffffffffffffffffbbffff5592222222222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222222222222296ccc44499449ddddffff6ffffffffffffffffffffffbefff55922222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222296c44449944444ddffff666666ffffffffffffffffddfff559222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222296944449944ddd4f4ff686fffffffffffffffffffdfff5592222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222229694444944444444ff686fffffffffffffffffffff669222222222222222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222222222222222229944944944444444ff6ffffffffffffff6ffffff6692222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222229499994444444ffffffffffffffffff11ffff69922222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222222296999444444ffffff11ffffffffff1fff6692222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222222229969994444ffff1f1fffffffff1ff6669222222222222222222222222222222222222222222222222222222222222222222
            222222222222222222222222222222222222222222222222222222222222222299611411f661ff111ffff611669922222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222229914111161111811166669922222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222999966116666999922222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222299999999922222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 120, 61, 255, 117, 5050, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.InBackground)
        enemies = [img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ....7.fd11111111df......
            ...7..fd11111111df......
            ...7..fd11111111df......
            ...7..fddd1111dddff.....
            ...77.fbdbfddfbdbfcf....
            ...777fcdcf11fcdcfbf....
            ....77fffbdb1bdffcf.....
            ....fcb1bcffffff........
            ....f1c1c1ffffff........
            ....fdfdfdfffff.........
            .....f.f.f..............
            ........................
            ........................
            ........................
            `, img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff2222ff........
            .......fb222222bf.......
            .......f22222222f.......
            ......fa22222222af......
            ......fa22222222af......
            ......faaa2222aaaf......
            ......fbabfddfbabf......
            ......fcacf22fcacf......
            .....ffff222222bf.......
            ....fc222cab2bafff......
            ....f2b2bcbfbfc222cf....
            ....fbfbfbffff2b2b2f....
            .........fffffffbfbf....
            ..........fffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ffaaaaff........
            .......fbaaaaaabf.......
            .....fffcaaaaaaaf.......
            ...fcccccdaaaaaaaf......
            ...fcbcbcbaaaacccf......
            ...fbfbffcfaafcccf......
            ......fcfaaaaaabbf......
            .......ccbdbabafcf......
            .......fffbfbfdff.......
            ........ffffffff........
            ........fffffffffff.....
            .........fffffcaaacf....
            .........fffffccabcf....
            ..........ffffbfbfbf....
            ...........ffff.........
            ........................
            ........................
            ........................
            `]
        bosses = [img`
            ................................
            .....aa....aaaaaaaa.............
            ...aaaaaaaaaaaaaaaaaaaaa........
            ...aaaaaaaaaaaaaaaaaaaaaa.......
            .aaaaaaaaaccccccaaaaaaaaaaaaa...
            .aaaaaaacc111111cccccaaaaaaaa...
            .aaaaaac1111111111111cccaaaaa...
            .aaaaac11111111111111111caaaa...
            .aaaaa1111111111111111111caaa...
            .aaaaa11111111222221111111aaa...
            .aaaaa11111122222222111111aaa...
            .aaaaa111111222fff22111111caa...
            .aaaaa11111122ffff221111111aa...
            .aaaaa11111122ffff22111111daaa..
            ..aaaaa1111122fff222111111daaa..
            ..aaaaaa1111222222221111dddaaaa.
            ..aaaaaa111112222221111ddddaaaa.
            ..aaaaaa1111111111111ddddddaaaa.
            ..caaaaaad1d1111111ddddddaaaaaa.
            ...caaaaaadddd111ddddddaaaaaaaa.
            ....caaaaaadddddddddddaaaaaaaaa.
            .....caaaaaaddddddddaaaaaaaaaaa.
            ......caaaaaaaaaaaaaaaacccccaac.
            .......caaaaaaaaaaaaaaa.....aa..
            .......cccaaaaaaaaaaaaa.....cc..
            ..........ccccccccccccc.........
            ................................
            `, img`
            ................................
            .............88888888....88.....
            ........888888888888888888888...
            .......8888888888888888888888...
            ...8888888888888cccccc888888888.
            ...88888888ccccc111111cc8888888.
            ...88888ccc1111111111111c888888.
            ...8888c11111111111111111c88888.
            ...888c111111111111111111188888.
            ...8881111111222221111111188888.
            ...8881111112222222211111188888.
            ...88c11111122fff22211111188888.
            ...88111111122ffff2211111188888.
            ..888d11111122ffff2211111188888.
            ..888d111111222fff221111188888..
            .8888ddd1111222222221111888888..
            .8888dddd111122222211111888888..
            .8888dddddd1111111111111888888..
            .888888dddddd1111111d1d888888c..
            .88888888dddddd111dddd888888c...
            .888888888ddddddddddd888888c....
            .88888888888dddddddd888888c.....
            .c88ccccc8888888888888888c......
            ..88.....888888888888888c.......
            ..cc.....8888888888888ccc.......
            .........ccccccccccccc..........
            ................................
            `, img`
            ................................
            .............55555555....55.....
            ........555555555555555555555...
            .......5555555555555555555555...
            ...5555555555555cccccc555555555.
            ...55555555ccccc222222cc5555555.
            ...55555ccc2222222222222c555555.
            ...5555c22222222222222222c55555.
            ...555c222222222222222222255555.
            ...5552222222666662222222255555.
            ...5552222226666666622222255555.
            ...55c22222266fff66622222255555.
            ...55222222266ffff6622222255555.
            ..555a22222266ffff6622222255555.
            ..555a222222666fff662222255555..
            .5555aaa2222666666662222555555..
            .5555aaaa222266666622222555555..
            .5555aaaaaa2222222222222555555..
            .555555aaaaaa2222222a2a555555c..
            .55555555aaaaaa222aaaa555555c...
            .555555555aaaaaaaaaaa555555c....
            .55555555555aaaaaaaa555555c.....
            .c55ccccc5555555555555555c......
            ..55.....555555555555555c.......
            ..cc.....5555555555555ccc.......
            .........ccccccccccccc..........
            ................................
            `]
        boss = sprites.createProjectileFromSide(bosses._pickRandom(), 50, 0)
        boss.setKind(SpriteKind.boss)
        boss.setBounceOnWall(true)
        boss.setPosition(80, 10)
        bossOn = 1
        statusbar = statusbars.create(20, 4, StatusBarKind.Health)
        statusbar.attachToSprite(boss)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate)
    sprite.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 642, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
let bossShot: Sprite = null
let bosses: Image[] = []
let statusbar: StatusBarSprite = null
let bossOn = 0
let boss: Sprite = null
let projectile: Sprite = null
let enemies: Image[] = []
let ship: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
ship = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ..........6.........
    .........886........
    ......888888866.....
    ........ffffb.......
    ........99999.......
    .......9999119......
    .......9999919......
    ......299999992.....
    .....22888888622....
    ....ba288888862ab...
    ..bbaa888888886aab..
    .baaaafffffffbbaaab.
    baaaaaa.22222.aaaaab
    .ccccc...222...cccc.
    `, SpriteKind.Player)
enemies = [img`
    2 2 4 5 . . . . . . . . e e e e 
    2 2 4 4 5 . . . . . . e e e e e 
    . 2 2 4 5 4 4 . . 2 2 e e e e . 
    . . 2 2 f f 2 2 c c f f f e . . 
    . . . . 2 2 5 4 4 4 e e . . . . 
    . . . . 8 2 2 2 c c c 8 . . . . 
    . . . . 8 . 2 5 4 e . 8 . . . . 
    . . . . 8 . 2 5 e e . 8 . . . . 
    . . . . 5 . . 4 e . . 5 . . . . 
    . . . . 2 . . f f . . 2 . . . . 
    . . . . . . . 4 c . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . b c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    `, img`
    a c . . . . . . . . . . . . c 8 
    a a 3 3 1 3 . . . . . 8 8 8 8 8 
    . a a 3 1 3 3 3 3 a a 8 8 8 8 . 
    . . a a f f a a c c f f f 8 . . 
    . . 8 8 a a 1 3 3 3 8 8 a a . . 
    . . 8 8 . a a a c c c . a a . . 
    . . 8 8 . . a 1 3 8 . . a a . . 
    . . 8 . . . a 1 8 8 . . . a . . 
    . . 5 . . . . 3 8 . . . . 5 . . 
    . . 2 . . . . f f . . . . 2 . . 
    . . . . . . . 3 c . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . b c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    `, img`
    6 6 . 5 7 . . . . . . c c . 8 8 
    . 6 7 7 5 7 7 7 6 6 8 8 8 8 8 . 
    . . 6 7 5 7 7 7 7 6 6 8 8 8 . . 
    . . 6 6 f f 6 6 c c f f f 8 . . 
    . . 5 5 6 6 5 7 7 7 8 8 7 7 . . 
    . . 5 . 5 6 6 6 c c c 7 . 7 . . 
    . . 5 . 5 . 6 5 7 8 . 7 . 7 . . 
    . . 5 . 5 . 6 5 8 8 . 7 . 7 . . 
    . . 5 . 2 . . 7 8 . . 2 . 7 . . 
    . . 2 . . . . f f . . . . 2 . . 
    . . . . . . . 7 c . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . b c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    . . . . . . . d c . . . . . . . 
    `]
ship.setFlag(SpriteFlag.StayInScreen, true)
ship.bottom = 120
controller.moveSprite(ship, 100, 100)
info.setLife(3)
effects.starField.startScreenEffect()
let enemySpeed = 50
let gamespeed = 2000
forever(function () {
    projectile = sprites.createProjectileFromSide(enemies._pickRandom(), 0, enemySpeed)
    projectile.setKind(SpriteKind.Enemy)
    projectile.x = randint(10, 150)
    sound()
    game.setGameOverSound(false,music.thump)
game.setGameOverSound(true, music.thump)
pause(gamespeed)
})
game.onUpdateInterval(500, function () {
    if (bossOn == 1) {
        bossShot = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, boss, 0, 80)
        bossShot.setKind(SpriteKind.Enemy)
        animation.runImageAnimation(
        bossShot,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 3 5 5 3 2 . . . . . 
            . . . . . 2 3 5 5 3 2 . . . . . 
            . . . . . 2 3 5 5 3 2 . . . . . 
            . . . . . 2 3 5 5 3 2 . . . . . 
            . . . . . 2 3 5 5 3 2 . . . . . 
            . . . . . 2 3 5 5 3 2 . . . . . 
            . . . . . 2 3 5 5 3 2 . . . . . 
            . . . . . 2 3 5 5 3 2 . . . . . 
            . . . . . 2 3 5 5 3 2 . . . . . 
            . . . . . 2 3 5 5 3 2 . . . . . 
            . . . . . 2 3 5 5 3 2 . . . . . 
            . . . . . 2 3 5 5 3 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 7 3 . . . . . . . 
            . . . . . . 3 7 3 . . . . . . . 
            . . . . . . 2 7 3 2 . . . . . . 
            . . . . . . 2 7 3 2 . . . . . . 
            . . . . . 2 3 7 7 3 . . . . . . 
            . . . . . 2 7 7 7 3 2 . . . . . 
            . . . . . 3 7 7 7 7 2 . . . . . 
            . . . . 2 7 7 7 7 7 7 2 . . . . 
            . . . . 2 7 7 7 7 7 7 2 . . . . 
            . . . . 2 7 7 7 7 7 7 2 . . . . 
            . . . . 2 7 7 7 7 7 7 2 . . . . 
            . . . . . 2 7 7 7 7 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . 1 1 3 3 3 3 3 3 3 1 1 . . . 
            . 1 3 . . . 3 1 3 . . . 3 1 . . 
            . 1 . . . 2 3 1 3 2 . . . 1 . . 
            . 3 3 . . 2 3 1 3 2 . . 3 3 . . 
            . . 3 3 2 3 3 1 3 3 2 3 3 . . . 
            . . . 2 2 1 1 1 1 1 2 2 . . . . 
            . . . 2 1 1 1 1 1 1 1 2 . . . . 
            . . . 3 3 1 1 1 1 1 3 3 . . . . 
            . . . . 3 3 3 3 3 3 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        true
        )
    }
})
