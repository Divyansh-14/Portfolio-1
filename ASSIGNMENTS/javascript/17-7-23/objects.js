// use key and value pair to create object
// const student = {
// id:1,
// name:"divyansh"
// };
// console.log(student);



// constructor method
// let obj= new Object();
// obj.rollno=57;
// obj.name="divyansh";
// obj.branch="cse";
// console.log(obj);


// let a={};
// console.log(a);


// let obj={
// id:1,
// name:"divyansh"
// };
// let new_stu =Object.create(obj);
// console.log(new_stu.id);






// const student = {
// id:1,
// name:"divyansh"
// };

// for(let key in student) console.log(key);
// for(let key in student) console.log(student[key]);






// let obj1={
//     id:1,
//     name:"divyansh"
// };
// let obj2={
//  branch:"cse"
// };
// let new_obj1= Object.assign({},obj1,obj2);
// console.log(new_obj1.branch);







// let obj={
//  id:1,
//  name:"divyansh",
//  address:{
//     house_no:123,
//     street_name:"crossing republik ",
//     city:"ghaziabad"
//  }
// };
// console.log(obj.address)







let obj ={
    id:123,
    name:"divyansh",
    bransh:"cse",
    info:function(){
        return "welcome mr./mrs." + this.name +" bransh is " +this.bransh;
    }

}
console.log(obj.info());