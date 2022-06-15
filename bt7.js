let array=[];
for (i=0; i<5; i++){
    num = prompt('Enter a number');
    array.push(num);
}
let V=prompt('Nhập số nguyên V');
for (let i=0; i<array.length; i++){
    if (array[i]==V){
        array.splice(i,1);
    }
}document.write(array);