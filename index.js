// Code your solutions in this file
// const employee = {
//     name: "Faith",
//     streetAddress: "123 Main St"
//   };
  
//   console.log("Initial Employee:", employee);
  
//   function updateEmployeeWithKeyAndValue(employee, key, value) {
//     return { ...employee, [key]: value };
//   }
  
//   function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee;
//   }
  
//   function deleteFromEmployeeByKey(employee, key) {
//     const newEmployee = { ...employee };
//     delete newEmployee[key];
//     return newEmployee;
//   }
  
//   function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key];
//     return employee;
//   }
  

//   console.log("Updated Employee (non-destructive):", updateEmployeeWithKeyAndValue(employee, "title", "Developer"));
//   console.log("Original Employee:", employee);
  
//   destructivelyUpdateEmployeeWithKeyAndValue(employee, "title", "Manager");
//   console.log("Employee after destructive update:", employee);
  
//   console.log("Employee after non-destructive delete:", deleteFromEmployeeByKey(employee, "title"));
//   console.log("Original Employee:", employee);
  
//   destructivelyDeleteFromEmployeeByKey(employee, "title");
//   console.log("Employee after destructive delete:", employee);
  

function writeCards(names, event) {
  let messages = []; 
  for (let i = 0; i < names.length; i++) { 
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages; 
}


function countDown(number) {
  while (number >= 0) { 
    console.log(number);
    number--; 
  }
}


console.log(writeCards(["Faith", "Alex", "Jordan"], "wedding"));
countDown(5);
