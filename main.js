function timMinTrongMang() {
    let arr = [3,5,1,8,-3,7,8];
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    document.write("giá trị nhỏ nhất trong mảng " +"["+ arr +"]"+" là " + min);
}
timMinTrongMang();