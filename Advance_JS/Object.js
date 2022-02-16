//object using  constructor function
 function Person(fname,lastName)
 {
     this.fname=fname;
     this.lname=lastName;
     this.lang=function()
     {
         console.log("Angular");
     }

 }
 let obj=new Person("kajal","Parchande");
 console.log(obj);