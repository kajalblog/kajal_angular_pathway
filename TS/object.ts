interface usertype{
    name:string,
    age:number,
    city:string

}
let user={
    name:"kajal",
    age:25,
    city:"Pandharpur"
}
// user.name=16;
console.log(user);
// we cant not create new value of object in TS

let person:any={
    name:"suchita",
    age:24,
    city:45236
}
console.log(person);