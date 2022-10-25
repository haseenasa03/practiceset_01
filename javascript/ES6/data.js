let employees = [{ id: 101, name: "rahul", email: "rahul@gmail.com" },
{ id: 102, name: "sonia", email: "sonia@gmail.com" },
{ id: 103, name: "priyanks", email: "priyanka1@gmail.com" },
{ id: 104, name: "subhash", email: "subhash@gmail.com" }]
function display_Data() {
    let rows = " ";
    employees.forEach((employee) => {
        rows = rows + `<tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        </tr>`
    })
    document.getElementById('tbody_Data').innerHTML = rows
}