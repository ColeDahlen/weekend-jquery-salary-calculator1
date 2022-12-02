$(document).ready(onReady);
let employees = [];

function onReady(){
    $('#submitButton').on('click', addEmployee);
}
function addEmployee(){
    let firstNameInput = $('#firstNameInput').val();
    let lastNameInput = $('#lastNameInput').val();
    let idInput = $('#idInput').val();
    let titleInput = $('#titleNameInput').val();
    let annualSalaryInput = $('#annualSalaryInput').val();
    let newEmployee = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        id: idInput,
        title: titleInput,
        annualSalary: Number(annualSalaryInput)
    }
    employees.push(newEmployee);
    console.log(employees)
    for(let i = 0; i < employees.length; i++){
        $('table').append(`
        <tr>
            <th>${employees[i].firstName}</th>
            <th>${employees[i].lastName}</th>
            <th>${employees[i].id}</th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
        `)
}
function deleteEmployee(){

}