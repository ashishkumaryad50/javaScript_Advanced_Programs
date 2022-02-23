let student ={
name:"Ashish",
age:26
}
let teacher ={
name:"Gaurav",
age:30
}

let printDetail=function(add,mob){
console.log(this.name+" "+this.age+" "+add+" "+mob)
}
printDetail.call(student, "Delhi", 898989)
printDetail.call(teacher, "Delhi", 8789786689)

printDetail.apply(teacher,["Delhi", 63753765])

let personDetails=printDetail.bind(student,["Delhi", 898989])
console.log(personDetails())

