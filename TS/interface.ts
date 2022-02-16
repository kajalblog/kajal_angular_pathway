interface userstype{
    name:string,
    age:number,
    getdata:()=>string
}
let users:userstype={
    name:"kajal",
    age:25,
    getdata:function()
    {
        return "Welcome " +this.name;
    }
}
console.log(users);
console.log(users.getdata());