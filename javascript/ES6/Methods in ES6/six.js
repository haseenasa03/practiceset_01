let a=[10,20,[30,[40,50,[60,70,80]]]]
console.log(a.length);
let b=[]
for(ele of a)
{
    b.push(ele)
}
console.log(a);
console.log(b);
