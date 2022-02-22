function modifyArr(arr, callback){
arr.push(100);
callback();
}

var arr=[1,3,5,7,8];

modifyArr(arr,function(){
console.log("array modified  ", arr)
})

