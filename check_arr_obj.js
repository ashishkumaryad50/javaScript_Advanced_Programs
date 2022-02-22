var arrListData=[1,23,4,5];

function check(arrList){
if(Object.prototype.toString.call(arrList) === '[object Array]'){
console.log("Array !!!")
}else{
console.log("Object !!!")
}}
check(arrListData) 

var objData={1:'jhgjhg',23:'jhgjg',4:'ghg',5:"hgh"};
check(objData) 
