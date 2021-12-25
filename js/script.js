// CLEAR RESULT SCREEN FUNCTIONS
function q01ClearResultScreen() { document.getElementById("q01ResultScreen").innerHTML = " "; }

function q02ClearResultScreen() { document.getElementById("q02ResultScreen").innerHTML = " "; }

function q03ClearResultScreen() { document.getElementById("q03ResultScreen").innerHTML = "Result Screen "; }

function q04ClearResultScreen() { document.getElementById("q04ResultScreen").innerHTML = "Result Screen "; }

function q05ClearResultScreen() { document.getElementById("q05ResultScreen").innerHTML = "Result Screen "; }

function q06ClearResultScreen() { document.getElementById("q06ResultScreen").innerHTML = "Result Screen "; }

function q07ClearResultScreen() { document.getElementById("q07ResultScreen").innerHTML = "Result Screen "; }

function q08ClearResultScreen() { document.getElementById("q08ResultScreen").innerHTML = "Result Screen "; }

function q09ClearResultScreen() { document.getElementById("q09ResultScreen").innerHTML = "Result Screen "; }

function q10ClearResultScreen() { document.getElementById("q10ResultScreen").innerHTML = "Result Screen "; }

function q11ClearResultScreen() { document.getElementById("q11ResultScreen").innerHTML = "Result Screen "; }

function q12ClearResultScreen() { document.getElementById("q12ResultScreen").innerHTML = "Result Screen "; }

function q13ClearResultScreen() {
    document.getElementById("grandTotal").innerHTML = "Null";
    var x = document.getElementsByClassName("reset");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = "Result"
    }
}

function q14ClearResultScreen() { document.getElementById("q14ResultScreen").innerHTML = "Result Screen "; }

function q15ClearResultScreen() { document.getElementById("q15ResultScreen").innerHTML = "Result Screen "; }

function q16ClearResultScreen() { document.getElementById("q16ResultScreen").innerHTML = "Result Screen "; }

// 01. Write a js program to read and print elements of array.

var computerAccessory = ["Mouse", "Keyboard", "Printer", "HeadPhone", "USB", "PowerSupply", "Porcessor", "RAM", "Hard", "And PowerCable"];
var i = 0;

function printArrayElements() {
    document.getElementById("q01ResultScreen").innerHTML += " " + computerAccessory[i];
    if (i > computerAccessory.length - 1) {
        document.getElementById("q01ResultScreen").innerHTML = " ";
        i = 0
    } else {
        i++;
    }
}
//  02. Write a js program to print all negative elements in an array.
function findNegativeElementsIntoArray() {
    var Numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13, -14, 15];
    var i = 0;
    for (let i = 0; i < Numbers.length; i++) {
        if (Numbers[i] < 0) {
            document.getElementById("q02ResultScreen").innerHTML += " " + Numbers[i];
        }
    }
}

// 03. Write a js program to find sum of all array elements. 
function sumAllArrayNumbers() {
    var Numbers = [1, 22, 35, 24, 55, 26, 75, 28, 95, 210, 511, 212, 513, 214, 515];
    var total = 0;
    for (let i = 0; i < Numbers.length; i++) {
        total = total + Numbers[i];
    }
    document.getElementById("q03ResultScreen").innerHTML = "Sum of Array Numbers is: " + total;
}

// 04. Write a js program to find maximum and minimum element in an array.
function findMinMaxValueInArray() {
    var Numbers = [41, -222, 35, 24, 55, -26, 755, 28, -95, 210, 511, 212, 513, 214, 515];
    var maxNumber = Numbers[0];
    var minNumber = Numbers[0];
    for (let i = 0; i < Numbers.length; i++) {
        if (Numbers[i] > maxNumber) {
            maxNumber = Numbers[i];
        }
        if (Numbers[i] < minNumber) {
            minNumber = Numbers[i];
        }
    }
    document.getElementById("q04ResultScreen").innerHTML = "Max Number is: " + maxNumber + " Min Number is: " + minNumber;
}