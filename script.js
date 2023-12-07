// function calcArea(width=1,length=1){
//     let area = width*length;
//     return area
// }
// let areaResult = calcArea(15,20);
// console.log(areaResult +" Metru plotas")

function findMax(num1,num2,num3){
    let max = num1;
    if(num2>max){
        max=num2
    }
    if(num3>max){
        max=num3
    }
    return max
}
let maxResult = findMax(100,52,31)
console.log(maxResult +" Yra didziausias skaicius")