const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const mainContent = document.querySelector(".main-content");

sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    if (sidebar.classList.contains("collapsed")) {
        mainContent.classList.add("collapsed");
    } else {
        mainContent.classList.remove("collapsed");
    }
});

let expenses =[];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select')
const amountInput = document.getElementById('amount-input')
const dateInput = document.getElementById('date-input')
const addBtn = document.getElementById('add-btn')
const expenseTableBody = document.getElementById('expense-table-body')
const totalAmountCell = document.getElementById('total-amount')

addBtn.addEventListener('click', function(){
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date= dateInput.value;

    if(category === ''){
        alert('Please select a category');
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert('Please enter a valid amount');
        return;
    }
    if(date ===''){
        alert('Please select a date');
        return;
    }
    expenses.push({category,amount,date})

    totalAmount += amount;
    totalAmountCell.textContent=totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expenseTableBody.removeChild(newRow);
    })
    const expense= expenses[expenses.length - 1];
    categoryCell.textContent=expense.category;
    AmountCell.textContent=expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);

});
for(const exepense of expenses){
    totalAmount += amount;
    totalAmountCell.textContent=totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splioce(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expenseTableBody.removeChild(newRow);
    })
    const expense= expenses[expenses.length - 1];
    categoryCell.textContent=expense.category;
    AmountCell.textContent=expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);
}