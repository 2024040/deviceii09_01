let play = 0
let num = 0
let stop = 0
let press = 0

dfplayermini.connect(SerialPin.P0, SerialPin.P1)

input.onButtonPressed(Button.A, function(){
    press = 1
    if(play == 0){
        dfplayermini.playFileInFolder(0, 5, dfplayermini.isRepeat.No)
        dfplayermini.setVolume(0)
        if (num == 0) {
            dfplayermini.playFileInFolder(0, 1, dfplayermini.isRepeat.No)
        } else if (num == 1) {
            dfplayermini.playFileInFolder(0, 2, dfplayermini.isRepeat.No)
        } else if (num == 2) {
            dfplayermini.playFileInFolder(0, 3, dfplayermini.isRepeat.No)
        }
        basic.showString("Vol")
        basic.showNumber(0)
        play =1
    }else if(play == 1){
        dfplayermini.playFileInFolder(0, 5, dfplayermini.isRepeat.No)
        dfplayermini.setVolume(20)
        if (num == 0) {
            dfplayermini.playFileInFolder(0, 1, dfplayermini.isRepeat.No)
        } else if (num == 1) {
            dfplayermini.playFileInFolder(0, 2, dfplayermini.isRepeat.No)
        } else if (num == 2) {
            dfplayermini.playFileInFolder(0, 3, dfplayermini.isRepeat.No)
        }
        basic.showString("Vol")
        basic.showNumber(1)
        play = 2
    }else if(play == 2){
        dfplayermini.playFileInFolder(0, 5, dfplayermini.isRepeat.No)
        dfplayermini.setVolume(30)
        if (num == 0) {
            dfplayermini.playFileInFolder(0, 1, dfplayermini.isRepeat.No)
        } else if (num == 1) {
            dfplayermini.playFileInFolder(0, 2, dfplayermini.isRepeat.No)
        } else if (num == 2) {
            dfplayermini.playFileInFolder(0, 3, dfplayermini.isRepeat.No)
        }
        basic.showString("Vol")
        basic.showNumber(2)
        play = 0
    }
})

input.onButtonPressed(Button.B, function(){
    press = 1
    if(num == 0){
        dfplayermini.playFileInFolder(0, 4, dfplayermini.isRepeat.No)
        dfplayermini.playFileInFolder(0, 1, dfplayermini.isRepeat.Yes)
        basic.showNumber(1)
        num = 1
    }else if(num == 1){
        dfplayermini.playFileInFolder(0, 4, dfplayermini.isRepeat.No)
        dfplayermini.playFileInFolder(0, 2, dfplayermini.isRepeat.Yes)
        basic.showNumber(2)
        num = 2
    }else if(num == 2){
        dfplayermini.playFileInFolder(0, 4, dfplayermini.isRepeat.No)
        dfplayermini.playFileInFolder(0, 3, dfplayermini.isRepeat.Yes)
        basic.showNumber(3)
        num = 0
    }
})

input.onButtonPressed(Button.AB, function(){
    press = 1
    if(stop == 0){
        dfplayermini.press(dfplayermini.playType.Play)
        basic.showLeds(`
        . # . . .
        . # # . .
        . # # # #
        . # # . .
        . # . . .
        `)
        stop = 1
    }else if(stop == 1){
        dfplayermini.press(dfplayermini.playType.Stop)
        basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        `)
        stop = 0
    }
    
})