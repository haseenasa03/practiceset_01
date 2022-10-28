let calculate=(a,b,op)=>{
    if(op=="sum")
    {
        return a+b;
    }
    if(op=="multi")
    {
        return a*b;
    }
}
let r1=calculate(10,20,"sum");
console.log(r1);

let r2=calculate(50,60,"multi")
console.log(r2);