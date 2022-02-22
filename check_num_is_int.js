let num=23 ;
function isInt(num){
return num%1===0;
}

if(isInt(num)){
console.log("Integer!!")
}

if(!isNaN(num)){
console.log("Number!!")
}
