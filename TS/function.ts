export{}

function Cals():number
{
    return 10+10;
}
console.log(Cals());

function str():string
{
    return "Typescript";
}
console.log(str());

function add(a:number,b?:number):number
{
    return b?a+b:a;
}
console.log(add(100,50));
