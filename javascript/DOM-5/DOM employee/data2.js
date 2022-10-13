let employees = [
    { id: 101, name: "Rahul", sal: 45000 },
    { id: 102, name: "Sonia", sal: 55000 },
    { id: 103, name: "Priyanka", sal: 65000 },
    { id: 104, name: "Priyanka", sal: 65000 },
    { id: 105, name: "Priyanka", sal: 65000 }
]

function display_Data() {
    let rows = ""
    for (employee of employees) {
        rows = rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.sal}</td>
                        <tr>`
    }

    document.getElementById('abc').innerHTML = rows
}
/* function display_Data() {
    let rows = "<tr><td>101</td><td>Rahul</td></tr>"
    document.getElementById('abc').innerHTML = rows
    //document.getElementById('abc').innerHTML = "GM"
} */