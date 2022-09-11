const employees = [
    { name: "Ram", age: 25, gender: "Male" },
    { name: "Shrinivas", age: 32, gender: "Male" },
    { name: "Sanjay", age: 30, gender: "Male" },
    { name: "Sharan", age: 33, gender: "Male" },
    { name: "Manju", age: 31, gender: "Male" },
    { name: "Vinay", age: 30, gender: "Male" },
    { name: "Pratik", age: 28, gender: "Male" },
    { name: "Lakshmikant", age: 28, gender: "Male" },
]

for (let i = 0; i < employees.length; i++) {
    const iDiv = document.createElement('div');
    iDiv.id = 'block' + i;
    iDiv.className = 'block';
    const iDiv1 = document.createElement('div');
    iDiv1.innerHTML = "Name : " + employees[i].name ;
    iDiv1.className = 'disp_50';
    const iDiv2 = document.createElement('div');
    iDiv2.innerHTML = "Age : " + employees[i].age;
    iDiv2.className = 'disp_50';
    iDiv.appendChild(iDiv1);
    iDiv.appendChild(iDiv2);
    document.getElementById("employees").appendChild(iDiv);
}
