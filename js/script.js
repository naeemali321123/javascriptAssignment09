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

// 05. Write a js program to find second largest element in an array.
function findSecondLargestElement() {
    var Numbers = [41, -222, 35, 24, 55, -26, 755, 28, -95, 210, 511, 212, 513, 214, 515];
    Numbers.sort((a, b) => a - b );
    document.getElementById("q05ResultScreen").innerHTML = "Second Largest Number is: " + Numbers[Numbers.length - 2];
}

// 06. Write a js program to count total number of even and odd elements in an array.
function findEvenAndOdenNumbers() {
    var Numbers = [41, -222, 35, 24, 55, -26, 755, 28, -95, 210, 511, 212, 513, 214, 515];
    var evenNumberArray = []
    var oddNumberArray = [];
    odd = 0
    even = 0
    for (let i = 0; i < Numbers.length; i++) {
        var evenAndOden = Numbers[i] % 2;
        if (evenAndOden == 0) {
            evenNumberArray[even] = Numbers[i]
            even++
        }
        else {
            oddNumberArray[odd] = Numbers[i]
            odd++
        }
    }
    document.getElementById("q06ResultScreen").innerHTML = "The Even Number Array is: " + evenNumberArray + ":<br> Total Even Numbers are " + even + ":<br> And Odd Number Array is: " + oddNumberArray + ":<br> Total Odd Numbers are " + odd;
}
// 07. write a js program to count total number of negative elements in an array.
function findAndCountNegativeNumbers() {
    var Numbers = [41, -222, 35, 24, 55, -26, 755, 28, -95, 210, 511, -212, 513, 214, -515];
    totalNegativeNumber = 0
    for (let i = 0; i < Numbers.length; i++) {
        if (Numbers[i] < 0) {
            totalNegativeNumber++
        }
    }
    document.getElementById("q07ResultScreen").innerHTML = "Total Negative Number is: " + totalNegativeNumber;
}
// 08. Write a js program to copy all elements from an array to another array.
function copyElementToAnotherArray() {
    var numbers = [41, -222, 35, 24, 55, -26, 755, 28, -95, 210, 511, -212, 513, 214, -515];
    var anotherArray = [];
    for (let i = 0; i < numbers.length; i++) {
        anotherArray[i] = numbers[i]
    }
    document.getElementById("q08ResultScreen").innerHTML = " The another Array Elements is: " + anotherArray;
}
// 09. Write a js program to insert an element in an array.
function insertElement() {
    var inputElement = document.getElementById("q09Num1").value;
    var numbers = [41, -222, 35, 24, 55, -26, 755, 28, -95, 210, 511, -212, 513, 214, -515];
    numbers.push(inputElement);
    document.getElementById("q09ResultScreen").innerHTML = "The current Array Elements is: " + numbers;
}
// 10. Write a js program to delete an element from an array at specified position.
function deleteElement() {
    var inputElement = document.getElementById("q10Num1").value;
    var numbers = [41, -222, 35, 24, 55, -26, 755, 28, -95, 210, 511, -212, 513, 214, -515];
    var index = numbers.indexOf(parseInt(inputElement));
    if (index > -1) {
        numbers.splice(index, 1);
        updatedArray = numbers
    }
    document.getElementById("q10ResultScreen").innerHTML = "The current Array Elements is: " + updatedArray;
}
// 11. Write a js program to count frequency of each element in an array.
function countFrequancyElements() {
    var userInput = parseInt(document.getElementById("q11Num1").value);
    var numbers = [41, 35, 24, 55, 755, 24, 210, 55, 35, 41];
    var count = 0;
   numbers.forEach((item, index) => {
        if(userInput == item){
            count++
        }
    });
    document.getElementById("q11ResultScreen").innerHTML = " Frequancy of " + userInput + " is: " + count;
}
// 12. Write a js program to print all unique elements in the array.
function findUniqueElements() {
    var numbers = [41, 35, 24, 55, 755, 24, 210, 55, 35, 41];
    for (let i = 0; i < numbers.length; i++) {
        j =  i + 1
        for ( j; j < numbers.length; j++) {
            if (numbers[i] == numbers[j]) {
                numbers.splice(j, 1)
            }  
        }
    }
    document.getElementById("q12ResultScreen").innerHTML = "Unique Elements Array is: " + numbers;
}
// 13.Write a js program to count total number of duplicate elements in an array.
function countTotalNumberOfDuplicateElements() {
    var numbers = [41, 35, 24, 55, 755, 24, 24, 210,41, 55, 35, 41];
    totalDuplicateElements = 0;
    count = 0;
    for (let i = 0; i < numbers.length; i++) {
        j =  i + 1
        for ( j; j < numbers.length; j++) {
            if (numbers[i] == numbers[j]) {
                numbers.splice(j, 1);
                count++;
            }  
        }
        if(count > 0){
            totalDuplicateElements++
            count = 0;
        }
    }
    document.getElementById("q13ResultScreen").innerHTML = "Total Number Of Duplicate Elements is: " + totalDuplicateElements;
}
// 14. Write a js program to delete all duplicate elements from an array.
function deleteDuplicateElements() {
    var numbers = [41, 35, 24, 55, 755, 24, 24, 210,41, 55, 35, 41];
    for (let i = 0; i < numbers.length; i++) {
        j =  i + 1
        for ( j; j < numbers.length; j++) {
            if (numbers[i] == numbers[j]) {
                numbers.splice(j, 1);
            }  
        }
    }
    document.getElementById("q14ResultScreen").innerHTML = "After Deleted Duplicate Elements Array is: " + numbers;
}
// 15. Write a js program to merge two array to third array.
function mergeElementsOfTwoArray() {
    var numbers1 = [41, 35, 24, 55, 755, 24];
    var numbers2 = [81, 35, 28, 55, 75, 28];
    var mergeArray = [...numbers1 , ...numbers2];
    document.getElementById("q15ResultScreen").innerHTML = "Merge Array is: " + mergeArray;
}
// 16. Write a js program to find reverse of an array.
function findReverseOfArray() {
    var numbers = [41, 35, 24, 55, 755, 24];
    numbers.reverse()
    document.getElementById("q16ResultScreen").innerHTML = "Merge Array is: " + numbers;
}
// 17. Write a js program to put even and odd elements of array in two separate array.
