input.onButtonPressed(Button.A, function () {
    sprite_1.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    sprite_1.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite_1.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    sprite_1.change(LedSpriteProperty.Y, -1)
})
let sprite_1: game.LedSprite = null
sprite_1 = game.createSprite(2, 0)
basic.forever(function () {
	
})
