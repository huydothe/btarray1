let array=[];
for (i=0; i<8; i++){
    let num=prompt('Nhập vào 1 số bất kỳ');
    array.push(num);
    if(array[i]<0){
        document.write(array[i]+'<br>')
    }
}document.write('Phần tử cảu mảng array ='+'['+ array + ']')