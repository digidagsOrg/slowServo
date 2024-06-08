//% weight=100 color=#0fbc11 icon="\uf0eb"
namespace myExtension {
    //% block
    export function blinkLED(): void {
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    }
}

