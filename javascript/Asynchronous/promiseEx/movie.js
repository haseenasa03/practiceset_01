let goToMovie=(success,failure)=>
{
    let amount=100;
    if(amount>600)
    {
        success("go to kantara with pop corn")
    }
    else{
        failure("go to home,take nap")
    }
}
goToMovie((msg)=>
{
    console.log(msg)
},(err)=>
{
    console.log(err)
})