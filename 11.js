function solve(arrayOfEmployees){
    const employeeData = [];

    for(const employeeRaw of arrayOfEmployees){
        employeeData.push({
            name: employeeRaw,
            personalNumber: employeeRaw.length
        })
    }
    employeeData.forEach((employee)=> console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`))
}
solve()