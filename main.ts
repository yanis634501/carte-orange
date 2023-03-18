radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        radio.sendNumber(input.temperature())
        radio.sendString(".C")
    }
    if (receivedNumber == 2) {
        radio.sendNumber(input.lightLevel())
        radio.sendString(".L")
    }
})
radio.setGroup(743)
