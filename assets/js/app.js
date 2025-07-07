var totalEmployee = document.getElementById("totalEmployee");

var users = [
    { id: 1, name: "Chryste Grave", parmananet: true, status: "Senior Editor", shift: false },
    { id: 2, name: "Huntlee Broddle", parmananet: true, status: "Account Coordinator", shift: true },
    { id: 3, name: "Candy Danielsky", parmananet: false, status: "Accounting Assistant IV", shift: true },
    { id: 4, name: "Kimmi Vicarey", parmananet: false, status: "Paralegal", shift: false },
    { id: 5, name: "Arden De Avenell", parmananet: true, status: "VP Marketing", shift: true },
    { id: 6, name: "Lonni Howey", parmananet: true, status: "VP Accounting", shift: true },
    { id: 7, name: "Juanita Doe", parmananet: false, status: "Marketing Manager", shift: true },
    { id: 8, name: "Chancey Kilbey", parmananet: false, status: "Chemical Engineer", shift: true },
    { id: 9, name: "Valry Ledgley", parmananet: true, status: "Design Engineer", shift: false },
    { id: 10, name: "Darci Pregel", parmananet: false, status: "Statistician II", shift: true }
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
                var isActive = user.parmananet == true ? "active" : "non-active";
                var isActiveValue = user.parmananet ? "Done" : "Pending";
                var shiftValue = user.shift ? "Morning" : "Evening"
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
                                <span class="active">${user.status}</span>
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
            if (getEmployee.innerHTML == "") {
                getEmployee.innerHTML = "User Not Found";
                getEmployee.style.fontSize = 30 + "px";
            }
        })

    } else {
        getEmployee.innerHTML = "Input Error";
        getEmployee.style.fontSize = 30 + "px";
    }
    if (arg == "") {
        getEmployee.innerHTML = "Enter the Id number";
        getEmployee.style.fontSize = 30 + "px";
    }
    clearInput();
}
function displayShow1(elem) {
    var displays = document.querySelectorAll(".display");
    displays.forEach(e => {
        e.style.display = "none"
    })
    elem.style.display = "flex"
    elem.style.animation = "none"
    elem.offsetHeight;
    elem.style.animation = "moveUp ease-in 0.7s"
}
function displayShow2(elem) {
    var displays = document.querySelectorAll(".display");
    displays.forEach(e => {
        e.style.display = "none"
    })
    elem.style.display = "flex"
    elem.style.animation = "none"
    elem.offsetHeight;
    elem.style.animation = "moveUp ease-in 0.7s"
}
function displayShow3(elem) {
    var displays = document.querySelectorAll(".display");
    displays.forEach(e => {
        e.style.display = "none"
    })
    elem.style.display = "flex"
    elem.style.animation = "none"
    elem.offsetHeight;
    elem.style.animation = "moveUp ease-in 0.7s"
}
function displayShow4(elem) {
    var displays = document.querySelectorAll(".display");
    displays.forEach(e => {
        e.style.display = "none"
    })
    elem.style.display = "flex"
    elem.style.animation = "none"
    elem.offsetHeight;
    elem.style.animation = "moveUp ease-in 0.7s"
}
function clearInput(){
    for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
        document.getElementsByTagName("input")[i].value = "";
    }
}
function addItem(name, status, perma = "no", shift = "no") {
    if (name != "" && status != "" && perma != "" && shift != "") {
        var schema = {
            id: users.length + 1,
            name: name,
            parmananet: perma == "yes" || perma == "Yes" ? true : false,
            status: status,
            shift: shift == "yes" || shift == "Yes" ? true : false
        };
        users.push(schema);
        errorPara(document.querySelector(".errorAddPara"), "Your employee was added");
        showTotalEmployee();
        setTimeout(() => {
            errorPara(document.querySelector(".errorAddPara"), "")
        }, 2000);
        clearInput()
    } else {
        errorPara(document.querySelector(".errorAddPara"), "please enter the input field...");
        setTimeout(() => {
            errorPara(document.querySelector(".errorAddPara"), "")
        }, 2000);
    }
}
function showTotalEmployee() {
    totalEmployee.innerHTML = "";

    var headingEl = document.createElement("h2");
    var bodyDiv = document.createElement("div");

    bodyDiv.setAttribute("class", "show");
    headingEl.appendChild(document.createTextNode("Total Employes"));
    totalEmployee.appendChild(headingEl);

    for (let k = 0; k < users.length; k++) {
        var indentifyEmployeeEl = document.createElement("div");
        var idEmpEl = document.createElement("div");
        var nameEmp = document.createElement("div");
        var contentEmp = document.createElement("div");
        var div4El = document.createElement("div");
        var span_1 = document.createElement("span");
        var span_2 = document.createElement("span");
        var span_3 = document.createElement("span");
        var span_4 = document.createElement("span");
        var span_5 = document.createElement("span");
        var h2El = document.createElement("h2");

        var shiftValue = users[k].shift ? "Morning" : "Evening"
        var permaValue = users[k].parmananet ? "Done" : "Pending"
        var td1Text = document.createTextNode("ID: " + users[k].id);
        var td2Text = document.createTextNode(users[k].name);
        var td3Text = document.createTextNode(permaValue);
        var td4Text = document.createTextNode(users[k].status);
        var td5Text = document.createTextNode(shiftValue);
        var isActive = users[k].parmananet ? "active" : "non-active";
        var isUnActive = users[k].shift ? "active" : "unactive";

        indentifyEmployeeEl.setAttribute("class", "identify")
        idEmpEl.setAttribute("class", "idEmp");
        nameEmp.setAttribute("class", "nameEmp");
        contentEmp.setAttribute("class", "contentEmp");
        span_2.setAttribute("class", isUnActive);
        span_5.setAttribute("class", isActive);
        span_1.appendChild(td1Text);
        span_2.appendChild(td5Text);

        h2El.appendChild(td2Text);

        span_3.appendChild(td4Text);

        span_4.appendChild(document.createTextNode("Parmananet: "));
        span_5.appendChild(td3Text);

        idEmpEl.appendChild(span_1);
        idEmpEl.appendChild(span_2);
        nameEmp.appendChild(h2El);
        contentEmp.appendChild(span_3);
        div4El.appendChild(span_4);
        div4El.appendChild(span_5);

        indentifyEmployeeEl.appendChild(idEmpEl);
        indentifyEmployeeEl.appendChild(nameEmp);
        indentifyEmployeeEl.appendChild(contentEmp);
        indentifyEmployeeEl.appendChild(div4El);
        bodyDiv.appendChild(indentifyEmployeeEl);
    }
    totalEmployee.appendChild(bodyDiv);
}
showTotalEmployee()
function errorPara(elem, mess) {
    elem.innerHTML = mess;
}
function removeEmployee(arg) {
    var errorParag = document.getElementById("errorPara");
    if (arg !== "") {
        var removeId = checkNumber(arg);
        if (!removeId) {
            if (users.find(c => {
                if (c.id == arg) {
                    return true;
                } else {
                    return false;
                }
            })) {
                users.splice(users.indexOf(users.find(u => {
                    if (u.id == arg) {
                        return u.name;
                    } else {
                        return undefined;
                    }
                })), 1);
                errorPara(errorParag, "your Item was deleted..")
            } else {
                errorPara(errorParag, "your Item was not found..")
            }
            showTotalEmployee();
        } else {
            console.log("user issus");
        }
    } else {
        errorPara(errorParag, "enter your field...")
        console.log("enter the input")
    }
    setTimeout(() => {
        errorPara(errorParag, "")
    }, 2000)
    clearInput()
}