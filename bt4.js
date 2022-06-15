let array=[];
for (i=0; i<5; i++){
    num = prompt('Enter a number');
    array.push(num);
}document.write(array+'<br>');
document.write('Đảo lại trật tự mảng: '+ array.reverse());