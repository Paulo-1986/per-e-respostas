input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let botaoNAOpressionado = true
basic.forever(function () {
    while (botaoNAOpressionado) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            basic.pause(100)
            botaoNAOpressionado = false
        } else if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("B")
            basic.pause(100)
            botaoNAOpressionado = false
        }
    }
})
