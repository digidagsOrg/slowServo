//% weight=100 color=#0fbc11 icon="\uf0eb"
namespace myExtension {
   
    export enum ServoChoice {
        //% block="1"
        servo1,
        //% block="2"
        servo2,
        //% block="3"
        servo3
    }

    export enum ServoDirection {
        //% block="clockwise"
        CW,
        //% block="counter-clockwise"
        CCW
    }
    
    let servo1Pin = AnalogPin.P8
    let servo2Pin = AnalogPin.P15
    let servo3Pin = AnalogPin.P16

    //% group="180 Servo Slow"
    //% blockId=kitronik_simple_servo_angle_slow
    //% block="set servo %servoSelection|tiks %tiks|speed %Aspeed|position %Aposition|direction %direction"
    //% inlineInputMode=inline
    //% color=#00A654
    //% tiks.min=0 tiks.max=180 tiks.defl=90
    //% Aspeed.defl=10
    //% servoSelection.min=1 servoSelection.max=3 servoSelection.defl=1
    //% Aposition.min=0 Aposition.max=180 Aposition.defl=90
    //% direction.defl=myExtension.ServoDirection.CW
    //% weight=100 blockGap=8
    export function setServoAngle(servoSelection: number, tiks: number, Aspeed: number, Aposition: number, direction: ServoDirection): number {
        let servoPin: AnalogPin
        if (servoSelection == 1) {
            servoPin = AnalogPin.P8
        } else if (servoSelection == 2) {
            servoPin = AnalogPin.P15
        } else if (servoSelection == 3) {
            servoPin = AnalogPin.P16
        }
        
        if (tiks > 180) tiks = 180
        if (tiks < 0) tiks = 0

        if (Aposition > 180) Aposition = 180
        if (Aposition < 0) Aposition = 0

     
		
        if (direction == ServoDirection.CCW) {
            // CW - im Uhrzeigersinn
            for (let index = 0; index <= tiks; index++) {
                Aposition = Aposition + 1
                pins.servoWritePin(servoPin, Aposition)
                basic.pause(Aspeed)
                if (Aposition >= 180) {
					//pins.servoWritePin(servoPin, 0)  // Servo anhalten
                    break;
                }
            }
        } else {
            // CCW - gegen den Uhrzeigersinn
            for (let index = 0; index <= tiks; index++) {
                Aposition = Aposition - 1
                pins.servoWritePin(servoPin, Aposition)
                basic.pause(Aspeed)
                if (Aposition <= 0) {
					//pins.servoWritePin(servoPin, 0)  // Servo anhalten
                    break;
                }
            }
        }
		//servoStop(servoSelection)
		
		if (servoSelection == 1) {
           pins.digitalWritePin(DigitalPin.P8, 0)
        } else if (servoSelection == 2) {
           pins.digitalWritePin(DigitalPin.P15, 0)
        } else if (servoSelection == 3) {
           pins.digitalWritePin(DigitalPin.P16, 0)
        }
        return Aposition;
    }
    
}



