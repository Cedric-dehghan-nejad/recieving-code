/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Bruneau
 * Created on: Dec 2023
 * This program that responds to conrtoller
 * Created by: Cedric
 * Created on: Sep 2020
 * This program controls a servo.
*/

// variables
let distanceToObject: number = 0
let driveDirection: number = 1
let onAndOff: number = 0

// setup
radio.setGroup(7)
basic.showIcon(IconNames.Heart)

// recieving code
radio.onReceivedNumber(function (receivedNumber) {
  // drive forward
  if (receivedNumber == 3) {
    robotbit.StpCarMove(1, 42)
  }

  // drives backward
  if (receivedNumber == 4) {
    robotbit.StpCarMove(-1, 42)
  }

  // honk
  if (receivedNumber == 5) {
    music.ringTone(Note.A)
    music.ringTone(Note.C)
    music.ringTone(Note.D)
    music.ringTone(Note.F)
    music.setVolume(300)
    basic.pause(1500)
    music.stopAllSounds()
    receivedNumber = 0
   }

  // sonar
  distanceToObject = sonar.ping(
    DigitalPin.P8,
    DigitalPin.P15,
    PingUnit.Centimeters
  )

  // to close
  radio.sendNumber(distanceToObject)
})

