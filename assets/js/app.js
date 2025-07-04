var users = [
    { "id": 1, "name": "Chryste Grave", "parmananet": true, "status": "Senior Editor", "shift": false},
    { "id": 2, "name": "Huntlee Broddle", "parmananet": true, "status": "Account Coordinator", "shift": true},
    { "id": 3, "name": "Candy Danielsky", "parmananet": false, "status": "Accounting Assistant IV", "shift": true},
    { "id": 4, "name": "Kimmi Vicarey", "parmananet": false, "status": "Paralegal", "shift": false},
    { "id": 5, "name": "Arden De Avenell", "parmananet": true, "status": "VP Marketing", "shift": true},
    { "id": 6, "name": "Lonni Howey", "parmananet": true, "status": "VP Accounting", "shift": true},
    { "id": 7, "name": "Juanita Willoughley", "parmananet": false, "status": "Marketing Manager", "shift": true},
    { "id": 8, "name": "Chancey Kilbey", "parmananet": false, "status": "Chemical Engineer", "shift": true},
    { "id": 9, "name": "Valry Ledgley", "parmananet": true, "status": "Design Engineer", "shift": false},
    { "id": 10, "name": "Darci Pregel", "parmananet": false, "status": "Statistician II", "shift": true}
    ]
console.log(users);

function checkNumber(arg) {
    var arr_1 = [];
    var checkNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var errorFlage = false;
    for (let i = 0; i < arg.length; i++) {
        arr_1.push(arg[i]);
    }
    arr_1.forEach(v => {
        if (checkNumber.indexOf(v) == -1) {
            errorFlage = true;
        }
    })
    if (errorFlage) {
        console.log("error input");
    } else {
        console.log("your input was true");
    }
    return errorFlage;
}
function searchEmployee(arg) {
    var getEmployee = document.querySelector(".getEmployee");
    getEmployee.innerHTML = ""
    if (!checkNumber(arg)) {
        getEmployee.style.fontSize = "small"
        users.map((user) => {
            if (user.id.toString() == arg) {
                var isActive = user.parmananet== true ? "active" : "non-active";
                var isActiveValue = user.parmananet ? "Done" : "Pending";
                var shiftValue = user.shift ? "Morning":"Evening"
                getEmployee.innerHTML = `
                <ul >
                        <li>
                            <div style="font-size:16px">
                                <span>#${user.id}</span>
                            </div>
                            <div style="font-size:20px">
                                <span><i class="bi bi-person"></i></span>
                                <span>${user.name}</span>
                            </div>
                            <div style="font-size:12px">
                                <span>Status: </span>
                                <span class="active">${user.role}</span>
                            </div>
                            <div style="font-size:12px">
                                <span>Permananet:</span>
                                <span class="${isActive}">${isActiveValue}</span>
                            </div>
                            <div style="font-size:12px">
                                <span>Shift:</span>
                                <span class="active">${shiftValue}</span>
                            </div>
                        </li>
                        </ul>
`
            }
            if(getEmployee.innerHTML == ""){
                getEmployee.innerHTML = "User Not Found";
                getEmployee.style.fontSize = 30+"px";
            }
        })

    } else {
        getEmployee.innerHTML = "Input Error";
        getEmployee.style.fontSize = 30+"px";
    }
    if(arg==""){
        getEmployee.innerHTML = "Enter the Id number";
        getEmployee.style.fontSize = 30+"px";
    }
}
function displayShow1(elem){
    var displays = document.querySelectorAll(".display");
    displays.forEach(e=>{
        e.style.display = "none"
    })
    elem.style.display = "flex"
    elem.style.animation = "none"
    elem.offsetHeight;
    elem.style.animation = "moveUp ease-in 0.7s"
}
function displayShow2(elem){
    var displays = document.querySelectorAll(".display");
    displays.forEach(e=>{
        e.style.display = "none"
    })
    elem.style.display = "flex"
    elem.style.animation = "none"
    elem.offsetHeight;
    elem.style.animation = "moveUp ease-in 0.7s"
}
function displayShow3(elem){
    var displays = document.querySelectorAll(".display");
    displays.forEach(e=>{
        e.style.display = "none"
    })
    elem.style.display = "flex"
    elem.style.animation = "none"
    elem.offsetHeight;
    elem.style.animation = "moveUp ease-in 0.7s"
}
function displayShow4(elem){
    var displays = document.querySelectorAll(".display");
    displays.forEach(e=>{
        e.style.display = "none"
    })
    elem.style.display = "flex"
    elem.style.animation = "none"
    elem.offsetHeight;
    elem.style.animation = "moveUp ease-in 0.7s"
}
function addItem(){
   var checkBoxAddEmployee = document.querySelector(".addPerma").value;
   console.log(checkBoxAddEmployee) 
}