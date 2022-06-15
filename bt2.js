let x=[10, 12, 3, 24, 15, 6, 71, 82, 9, 18];
let max=x[0];
let index = 0;
for(i=0; i<x.length; i++){
    if(max<x[i]){
        max =x[i];
        index =i;
    }
}
document.write('Max = ' + max + ' ở vị trí thứ ' + index );