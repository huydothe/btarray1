let arrayA=[];
let arrayB=[];
for (i=0; i<10; i++) {
    numA = prompt('Enter a number');
    arrayA.push(numA);
}
for (i=0; i<10; i++) {
    numB = prompt('Enter b number');
    arrayB.push(numB);
}
let arrayC=[];
arrayC=arrayA.concat(arrayB);
document.write(arrayC);