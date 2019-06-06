function minArray(arr) {
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

let arr1 = [3,5,1,8,-3,7,8];
let min1 = minArray(arr1);
document.write("giá trị nhỏ nhất trong mảng " + "[" +arr1 + "] là : " + min1);

document.write("<br/>");

let arr2 = [7,12,6,9,20,56,89];
let min2 = minArray(arr2);
document.write("giá trị nhỏ nhất trong mảng " + "[" +arr2 + "] là : " + min2);

function minArray2(arr) {
    if (arr.length == 0)
        return -1;
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

document.write("<br/>");

let arr3 = [];
let min3 = minArray2(arr3);
document.write("giá trị nhỏ nhất trong mảng " + "[" +arr3 + "] là : " + min3);

document.write("<br/>");

let arr4 = [0,0,0,0,0,0];
let min4 = minArray2(arr4);
document.write("giá trị nhỏ nhất trong mảng " + "[" +arr4 + "] là : " + min4);