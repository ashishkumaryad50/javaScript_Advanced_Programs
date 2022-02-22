let counter = 0;
let interval = setInterval(()=>{
  console.log(++counter);
  //counter++
  if(counter==5){
  clearInterval(interval);
  }
}, 1000);
