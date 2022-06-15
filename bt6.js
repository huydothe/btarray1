let array=[];
for (i=0; i<5; i++){
    num = prompt('Enter a number');
    array.push(num);
}for (i=0; i<5; i++){
    let V=prompt('Nhập số nguyên V');
    if(V==array[i]){
        alert('V is in the array');
        break;
    }else {
        alert("V isn't in the array");
    }
}


