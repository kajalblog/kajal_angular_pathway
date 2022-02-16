class Parent{
    name;
    setName(name)
    {
        this.name=name
    }

}

class Child extends Parent{
    name="kajal";
    getName()
    {
        return this.name;
    }
}
let a1=new Child();
a1.setName("Angular")
console.log(a1.getName());