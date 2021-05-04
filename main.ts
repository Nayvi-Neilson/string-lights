input.onPinPressed(TouchPin.P0, function () {
    radio.sendString("receivedString")
})
input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 100)
    for (let index = 0; index < 4; index++) {
        strip.rotate(1)
        strip.show()
        strip.rotate(1)
    }
})
radio.onReceivedString(function (receivedString) {
	
})
let strip: neopixel.Strip = null
radio.setGroup(14)
strip = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGBW)
strip.show()
basic.forever(function () {
	
})
