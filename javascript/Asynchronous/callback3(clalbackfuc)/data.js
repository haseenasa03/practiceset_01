let employees=[{id:101,name:"RAHUL",sal:45000},
               {id:102,name:"reema",sal:49000}]
let createEmployee=(emp,callback)=>
{
    setTimeout(()=>
    {
        employees.push(emp),
        callback()
    }),4000;
}
//createEmployee({id:103,name:"Rehan",sal:42000})

    let getEmployees=()=>
    {
    setTimeout(()=>
    {
        let rows=""
        for(emp of employees)
        {
            rows=rows+`<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.sal}</td>
            </tr>`
                      
        }
        document.getElementById('tbody_Data').innerHTML=rows;
},1000)
}
createEmployee({id:103,name:"Rehan",sal:42000},getEmployees)
