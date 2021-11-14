function play_craps() {
    console.log("play_craps() started");
    var die1 = Math.ceil(Math.random() * 6); //selected random number between 0 and 1, multiply by 6 and rounded to the nearest number for 1st die//
    var die2 = Math.ceil(Math.random() * 6); //selected random number between 0 and 1, multiply by 6 and rounded to the nearest number for 2nd die//
    var sum = die1 + die2; //adds both the 1st and 2nd dice numbers//
    document.getElementById("die1Res").innerHTML = die1; //shows the variable of the 1st die on the website//
    document.getElementById("die2Res").innerHTML = die2; //shows the variable of the 2nd die on the website//
    document.getElementById("sum1Res").innerHTML = sum; //shows the sum of the 2 dice on the webiste//
    if (sum == 7 || sum == 11) {
        document.getElementById("final1Res").innerHTML =
            "CRAPS - you lose"; //if the sum of the dice is 7 or 11, there will be a message saying "CRAPS - you lose" underneath the sum//
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("final1Res").innerHTML =
            "Doubles - you win"; //if the 1st and 2nd die 
    }
    else {
        document.getElementById("final1Res").innerHTML =
            "Draw - You did not win or lose, please try again!";

    }
}

// function btrBlastOff() { //starting a "better" blastoff function that replaces previous version via looping//
//     console.log("btrBlastOff() started");
//     var currTime = 50; //setting countdown timer to 50 per UAT Space Program instuctions//
//     for (var i = 0; i <= 10; i = i + 1) { //this is the looping function, where it starts off at 0, doesn't go more than 11 and each time it goes up by 1. there will be 11 loops in total.//
//         setTimeout(function () {
//             if (currTime > 25) { 
//                 document.getElementById("countDownTimer").innerHTML = currTime; //this is saying if the timer is more than 25 seconds then it will count down normally//
//             } else if (currTime == 0) {
//                 document.getElementById("countDownTimer").innerHTML = "Blastoff!" //this is saying once the countdown reaches 0 then it will say Blastoff instead//
//             }
//             else {
//                 document.getElementById("countDownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime; //this is saying once the countdown is 25 seconds or below it will say Warning Less than ½ way to launch, time left = then the amount of seconds left//
//             }
//             currTime = currTime - 5; //this is saying it starts off at 50 seconds and decreses by 5//
//         }, 5000 * i);
//     }

    function start(){
        console.log("start() function started");
        document.getElementById("data").rows[seconds].innerHTML = "Reading Data...";
        index = 0;
        timer = setInterval(updateDisplay, time_interval);
        document.getElementById("startButton").disabled = true;
        document.getElementById("stopButton").disabled = false;
    }

    function stop(){
        console.log("stop() function started");
        clearInterval(timer);
        document.getElementById("startButton").disabled = false;
        document.getElementById("stopButton").disabled = true;

    }

    function getData(){
        var loadedData = loadData();
        return loadedData;
    }

    function dataRow(legend, value, units){
        msg = "<td>";
        msg += legend;
        msg += ": </td><td>";
        msg += value;
        msg += " " + units;
        msg += "</td>";
        return msg;
    }

    class InputData {
        constructor(
            time_seconds,
            latitude,
            longitude,
            gps_altitude,
            bmpSensor_altitude,
            bmpSensor_temp,
            digSensor_temp,
            cssSensor_temp,
            cssSensor_eCO2,
            cssSensor_TVOC,
            UV,
            accelX,
            accelY,
            accelZ,
            magneticX,
            magneticY,
            magneticZ,
            gyroX,
            gyroY,
            gyroZ

        ){
            this.time_seconds = time_seconds;
            this.latitude = latitude;
            this.longitude = longitude;
            this.gps_altitude = gps_altitude;
            this.bmpSensor_altitude = bmpSensor_altitude;
            this.bmpSensor_temp = bmpSensor_temp;
            this.digSensor_temp = digSensor_temp;
            this.cssSensor_temp = cssSensor_temp;
            this.cssSensor_eCO2 = cssSensor_eCO2;
            this.cssSensor_TVOC = cssSensor_TVOC;
            this.UV = UV;
            this.accelX = accelX;
            this.accelY = accelY;
            this.accelZ = accelZ;
            this.magneticX = magneticX;
            this.magneticY = magneticY;
            this.magneticZ = magneticZ;
            this.gyroX = gyroX;
            this.gyroY = gyroY;
            this.gyroZ = gyroZ;
        }
    }

function playStation(){
    console.log("playStation() started");
    mySound = new sound("Space Jam Theme Song.mp3");
    mySound.play(); //This attaches the song file that we downloaded
}

function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function(){
        this.sound.play(); //This makes sure the song we downloaded plays
    }
    this.stop = function(){
        this.sound.pause();
    }
}