let x = [10, 12, 3, 24, 15, 6, 71, 82, 9, 18];
let max=x[0];
let index=0;
let total=0;
let average;
for(let i=0; i < x.length; i++) {
    total += x[i];
}
average=total/x.length;
for(i=0; i<=x.length; i++){
    total+=x[i];
    if(x[i]>max){
        max=x[i];
        index=i;
    }
}document.write('Max = '+ max + ' ; và giá trị trung bình của mảng là ' + average)