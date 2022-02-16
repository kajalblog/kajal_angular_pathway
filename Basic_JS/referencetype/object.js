// Object
// Array
// Function

// object is collection of propeties in keys and values pair

let user=
{
    name:"kajal",
    age:25,
    language:["Hindi","English","Marathi"],
    role:function()
    {
        console.log("Angular");
    }
}
user.company="GreenTiger";
user['lastName']="Parchande";
console.log(user);
user.role();

let obj=new Object();
