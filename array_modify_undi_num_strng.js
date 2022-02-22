// input1 = [2, 'abc']
// output1 = [3, 'abc AE']

// input2 = [3, 4, 2]
// output2 = [4, 5, 3]

// input3 = [undefined, 'cd', '3']
// output3 = [undefined, 'cd AE', '3 AE']

let input1=[undefined, 'cd', '3']

let output1= input1.map((item)=>{
//   console.log(typeof(item));
  if(typeof(item)==='number'){
    return item=item+1;
  }else if(typeof(item)==='string'){
    return item = item+ ' AE';
  }else{
    return undefined
  }
})
console.log(output1)
