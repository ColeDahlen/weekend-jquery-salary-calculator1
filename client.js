$(document).ready(onReady);
let employees = [];
let monthlyMoney = 0; 
function onReady(){
    $('#submitButton').on('click', addEmployee);
    $('body').on('click', '.deleteButton', removeMonthlyMoney)
    $('body').on('click', '.deleteButton', deleteEmployee);
}
function ifMonthlyMoney(){
    if($('#monthlyMoney').text() > 20000){
        $('h3').css({'background-color': 'red', 'font-size': '200%'});
    }
}
function addEmployee(){
    let firstNameInput = $('#firstNameInput').val();
    let lastNameInput = $('#lastNameInput').val();
    let idInput = $('#idInput').val();
    let titleInput = $('#titleNameInput').val();
    let annualSalaryInput = $('#annualSalaryInput').val();
    let monthlySalary = annualSalaryInput / 12;
    monthlyMoney += monthlySalary;
    $('#monthlyMoney').text(Number(monthlyMoney))
    let newEmployee = {
        firstName: firstNameInput,
        lastName: lastNameInput,
        id: idInput,
        title: titleInput,
        annualSalary: Number(annualSalaryInput)
    }
    employees.push(newEmployee);
    $('.newEmployeeTR').empty();
    for(let i = 0; i < employees.length; i++){
        $('table').append(`
        <tr class="newEmployeeTR">
            <th>${employees[i].firstName}</th>
            <th>${employees[i].lastName}</th>
            <th>${employees[i].id}</th>
            <th>${employees[i].title}</th>
            <th class="annualSalaryTH">${employees[i].annualSalary}</th>
            <th><button class="deleteButton">DELETE</button></th>
        </tr>
        `)
    }
    $('#firstNameInput').val('')
    $('#lastNameInput').val('')
    $('#idInput').val('')
    $('#titleNameInput').val('')
    $('#annualSalaryInput').val('')
    ifMonthlyMoney()
}
function deleteEmployee(){
    $(this).parent().parent().remove()
    ifMonthlyMoney()
}
function removeMonthlyMoney(){
    let newEmployeeAnnualSalaryRemove = $(this).parent().siblings('.annualSalaryTH').text();
    console.log(newEmployeeAnnualSalaryRemove)
    let newEmployeeSalaryValue = newEmployeeAnnualSalaryRemove
    let monthlySalary = newEmployeeSalaryValue / 12;
    monthlyMoney = monthlyMoney - monthlySalary;
    $('#monthlyMoney').text(monthlyMoney);
    ifMonthlyMoney()
}