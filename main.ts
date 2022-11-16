let index = 0
radio.setGroup(1)
let text_list = ["a", "b", "c"]
if (true) {
    text_list = ["a", "b", "c"]
    control.waitForEvent(0, 0)
} else if (false) {
    radio.setFrequencyBand(0)
} else {
    radio.setGroup(1)
    serial.writeNumbers([0, 1])
}
while (true) {
    basic.showIcon(IconNames.Scissors)
}
serial.writeNumbers([0, 1])
music.ringTone(262)
index += 1
for (let index = 0; index <= 4; index++) {
    radio.setGroup(1)
    for (let index = 0; index <= 4; index++) {
        radio.sendNumber(0)
    }
}
basic.forever(function () {
    radio.setGroup(1)
})
