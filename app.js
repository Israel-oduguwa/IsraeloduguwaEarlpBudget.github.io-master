var helpButton = document.querySelector(".help-button");
var financialHelp = document.getElementById("financial-help");
helpButton.addEventListener("click",()=>{
  financialHelp.classList.toggle("see");
})
 function getUsername(){
  var profileName = document.getElementById("profile-name").value;
  let budgetWelcome =document.getElementById("budget-welcome");
  let welcomeFeedback = document.getElementById("welcome-feedback");
  let mainApp = document.getElementById("main-app");
  let welcomeGreetings  = document.getElementById("welcome-greeting");
  var currency =document.getElementById("currency-input").value;
  var cash1 = document.getElementById("currency1");
  var cash2 = document.getElementById("currency2");
  var cash3 = document.getElementById("currency3");
  var cash4 = document.getElementById("currency4");
  var cash5 = document.getElementById("currency5");
  var cash6 = document.getElementById("currency6");

  if (profileName.length === 0 || profileName ==''){

    welcomeFeedback.innerText = "Enter a username !";
    
 function reType(){
  let welcomeFeedback = document.getElementById("welcome-feedback");
  welcomeFeedback.innerHTML ="";
 }
 var profileName = document.getElementById("profile-name");
  profileName.addEventListener("keyup",reType,false);
  }
  else if (currency.length==0){
    welcomeFeedback.innerText = "Enter currency notation !";
    function reTypeCurrency(){
      let welcomeFeedback = document.getElementById("welcome-feedback");
      welcomeFeedback.innerHTML ="";
   }
   const currencyin = document.getElementById("currency-input");
    currencyin.addEventListener("keyup",reTypeCurrency,false); 
  }
  else{
    budgetWelcome.className = "nameEntered"
    mainApp.className ="show";
   welcomeGreetings.innerHTML ="Welcome "+profileName;
   cash1.innerHTML= currency;
   cash2.innerHTML = currency;
   cash3.innerHTML = currency;
   cash4.innerHTML = currency;
   cash5.innerHTML= currency;
  


    }
  }
 const submitButton = document.querySelector("#submit-name");
 submitButton.addEventListener("click",getUsername,false);
 
 class UI{
  constructor(){
    this.salaryFeedback = document.querySelector(".salary-feedback");
    this.expensesFeedback = document.querySelector(".expenses-feedback");
    this.expensesValueFeedback = document.querySelector(".expensesValue-feedback");
    this.incomeForm = document.getElementById("income-form");
    this.salaryInput = document.getElementById("salary-input");
    this.totalIncome = document.getElementById("total-income");
    this.expenseAmount = document.getElementById("expenses-amount");
    this.expenseForm = document.getElementById("expenses-form");
    this.expenseInput = document.getElementById("expenses-input"); 
    this.expensesList = document.getElementById("expenses-list");
    this.totalExpenses = document.getElementById("total-expenses");     
    this.totalAmount = document.getElementById("total-amount");
    this.helpButton = document.querySelector(".help-button");
    this.helpButtonShow = document.getElementById("help-button-show");
    this.RemainingCash = document.getElementById("remaining-cash");
    this.financialHelp - document.getElementById("financial-help");
    this.itemList=[];
    this.itemID = 0;
  }
   submitIncomeForm(){
    //console.log("you clicked me israel");
    const salaryValue = this.salaryInput.value;
    if(salaryValue===""||salaryValue<0){
     this.salaryFeedback.textContent="Value cannot be empty or negative";
     const innersalary = this ;
     console.log(this);
       function reTypeSalary(){
      innersalary.salaryFeedback.textContent=""
       
       }
      
       var salaryValueInput = this.salaryInput; 
       salaryValueInput.addEventListener("keyup",reTypeSalary,false);
    }else{
      this.totalIncome.textContent=salaryValue;
   
      this.salaryInput.value="";
      this.showTotalAmount();
      
    }
  }

  showTotalAmount(){
    const expenses = this.totalExpense();
    const total = parseInt(this.totalIncome.textContent)-expenses;
    this.RemainingCash.textContent=total
    this.totalAmount.textContent=total;
    if(total < 0){
      this.totalAmount.classList.remove("showGreen","showblack");
      this.totalAmount.classList.add("bankrupt");
      this.helpButtonShow.classList.add("help");
      
     
    }
    else if(total > 0){
      this.totalAmount.classList.remove("bankrupt","showblack");
      this.totalAmount.classList.add("showGreen");
      this.helpButtonShow.classList.remove("help");
      
    }
    else if(total === 0){
      this.totalAmount.classList.remove("bankrupt");
      this.totalAmount.classList.add("showblack");
      this.helpButtonShow.classList.remove("help");
    }
    else if (total<0){
      this.RemainingCash.textContent="0";
    }
  }
  // expense form
  submitExpenseForm(){
    const expenseItem = this.expenseInput.value;
    const expensesAmount = this.expenseAmount.value;
    if (expenseItem ===""|| expensesAmount===""||expensesAmount < 0){
      this.expensesFeedback.innerHTML="values cannot be empty or less than zero";
      const self = this;
      function reTypeExpenses(){
      self.expensesFeedback.textContent=""
         }
         var expensesvalue =this.expenseInput;
      expensesvalue.addEventListener("keyup",reTypeExpenses,false);
      var expensesMoney = this.expenseAmount;
      expensesMoney.addEventListener("keyup",reTypeExpenses,false);
    }
    else{
      let amount =parseInt(expensesAmount);
      this.expenseInput.value="";
      this.expenseAmount.value="";



      let expense ={
        id:this.itemID,
        item:expenseItem,
        amount:amount,
      }
      this.itemID++;
      this.itemList.push(expense);
      this.addExpense(expense);
      this.showTotalAmount();
    }
  }
  addExpense(expense){
    const div = document.createElement("div");
    div.classList.add('expense');
    div.innerHTML =`
    <div style="color: red; font-size: 2vh;" class="expense-item d-flex justify-content-between align-items-baseline">
    <h6 class="expense-items  list-item">${expense.item}</h6>
    <h6 class="expense-amount  list-item"><span id="currency6">${expense.amount}</span></h6>
    <div class="expense-icons list-item">
     <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
      <i style="color: red;font-size: 2vh;" class="fas fa-edit"></i>
     </a>
     <a href="#" class="delete-icon" data-id="${expense.id}">
      <i style="color: red;font-size: 2vh;" class="fas fa-trash"></i>
     </a>
    </div>
   </div>`;
   this.expensesList.appendChild(div);
  }
  // toatal expenses
  totalExpense(){
    let total = 0;
    if(this.itemList.length>0){
     total = this.itemList.reduce(function(acc,curr){
      acc += curr.amount
      return acc;
     },0);
    }
    this.totalExpenses.textContent = total;
    return total;
  }
  editExpense(element){
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    //remove from the dom
    this.expensesList.removeChild(parent);
    // remove the expense list
    let expense = this.itemList.filter(function(item){
      return item.id == id;
    })
    //show value
    this.expenseInput.value = expense[0].item;
    this.expenseAmount.value = expense[0].amount;
    //remove from the list
    let tempList= this.itemList.filter(function(item){
      return item.id !== id;
    })
    this.itemList= tempList;
    this.showTotalAmount()
  }

  //delete
  deleteExpense(element){
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    //remove from the dom
    this.expensesList.removeChild(parent);
    let tempList= this.itemList.filter(function(item){
      return item.id !== id;
    })
    this.itemList= tempList;
    this.showTotalAmount()
  }
}


function eventListeners(){
  const incomeForm =document.getElementById("income-form");
  const expenseForm =document.getElementById("expenses-form");
  const expensesList = document.getElementById("expenses-list");
  
  //newinstance ofUi class
  const ui = new UI()

  // incoem-form dubmit
  incomeForm.addEventListener("submit",function(e){
    e.preventDefault();
    ui.submitIncomeForm()

  })
  expenseForm.addEventListener("submit",function(e){
    e.preventDefault();
   ui.submitExpenseForm();

  })

  expensesList.addEventListener("click",function(e){
 if (e.target.parentElement.classList.contains("edit-icon")){
  e.preventDefault();
  ui.editExpense(e.target.parentElement)
 }
 else if(e.target.parentElement.classList.contains("delete-icon")){
  e.preventDefault();
  ui.deleteExpense(e.target.parentElement);

 }
  });

}

document.addEventListener("DOMContentLoaded",function(){
  eventListeners();
})





