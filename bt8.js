let array=[];
for (i=0; i<10; i++){
    num=prompt('Enter a number');
    array.push(num);
}
let first=0;
let last=array.length-1;
while( first < last ) {
    let b=array[first];
    array[first]=array[last];
    array[last]=b;
    first++;
    last--;
}
document.write(array)