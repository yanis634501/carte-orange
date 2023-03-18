radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        radio.sendString("temperature")
        radio.sendNumber(input.temperature())
    }
    if (receivedNumber == 2) {
        radio.sendString("luminosité")
        radio.sendNumber(input.lightLevel())
    }
})
radio.setGroup(743)
