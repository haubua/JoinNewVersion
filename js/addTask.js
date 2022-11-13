setURL('https://robert-hahn.developerakademie.net/smallest_backend_ever-master');
let categorys = ['Sales', 'Backoffice', 'Sales', 'Backoffice', 'Sales', 'Backoffice'];
let categoryColor = ['#FC71FF', '#1FD7C1']
let newTaskCategory = [];
let prioStatus = [];

//  category, assignetTo, , prio, subtasks 

async function addTask() {
    let title = document.getElementById('addTaskTitle').value;
    let description = document.getElementById('addTaskDescription').value;
    let category = newTaskCategory;
    // let assignetTo = document.getElementById('addTaskAssignetTo').value;
    let dueDate = document.getElementById('addTaskDueDate').value;
    let prio = prioStatus[0];
    // let subtasks = document.getElementById('addTaskSubtasks').value;
    let newTask = { title, description, dueDate, category, prio}
    tasks.push(newTask)
    await backend.setItem('tasks', JSON.stringify(tasks));
}


function showCategorys() {
    let dropdown = document.getElementById('categoryDropdown');
    dropdown.removeAttribute("onclick");
    dropdown.innerHTML = `
        <div onclick="closeCategorys()" class="dorpdownRow categoryPadding">Select task category <img src="/img/downIcon.svg" alt=""></div>
        <div class="dropdownContainer">
            <div class="categoryPadding category">New category</div>
            <div id="savedCategorys"></div>
        </div>
        `
    renderSavedCategorys();
}

function renderSavedCategorys() {
    for (let i = 0; i < categorys.length; i++) {
        document.getElementById('savedCategorys').innerHTML += `
        <div onclick="addCategory(${i})" class="categoryPadding category">${categorys[i]}<div class="catColor" style="background-color: ${categoryColor[i]}"></div></div>
    `
    }
}

function closeCategorys() {
    let dropdown = document.getElementById('categoryDropdown');
    if (newTaskCategory.length == 0) {
        dropdown.innerHTML = `
        <div onclick="showCategorys()" class="dorpdownRow categoryPadding">Select task category<img src="/img/downIcon.svg" alt=""></div>
    `} else {
        dropdown.innerHTML = `
        <div onclick="showCategorys()" class="dorpdownRow categoryPadding">${newTaskCategory[0]}</div>
    `
    }

}

function addCategory(i) {
    if (newTaskCategory.indexOf(categorys[i]) >= 0) {
        newTaskCategory.splice(0, 2)
    } else {
        newTaskCategory.splice(0, 2)
        newTaskCategory.push(categorys[i], categoryColor[i])
        showSelectedCat();
    }
}


function showSelectedCat() {
    let dropdown = document.getElementById('categoryDropdown');
    dropdown.innerHTML = `
        <div onclick="showCategorys()" class="category categoryPadding">${newTaskCategory[0]}<div class="catColor" style="background-color: ${newTaskCategory[1]}"></div></div>
    `
}


function prioUrgent() {
        document.getElementById('prioUrgent').classList.add('prioUrgent');
        document.getElementById('prioUrgentIcon').classList.add('prioIconFilter');
        clearPrioLow();
        clearPrioMedium();
        document.getElementById('prioUrgent').onclick = clearPrioUrgent;
        prioStatus.push('Urgent')
}


function prioMedium() {
        document.getElementById('prioMedium').classList.add('prioMedium');
        document.getElementById('prioMediumIcon').classList.add('prioIconFilter');
        clearPrioLow();
        clearPrioUrgent();
        document.getElementById('prioMedium').onclick = clearPrioMedium;
        prioStatus.push('Medium')
}


function prioLow() {
        document.getElementById('prioLow').classList.add('prioLow');
        document.getElementById('prioLowIcon').classList.add('prioIconFilter');
        clearPrioUrgent();
        clearPrioMedium();
        document.getElementById('prioLow').onclick = clearPrioLow;
        prioStatus.push('Low')
}


function clearPrioUrgent() {
    document.getElementById('prioUrgent').classList.remove('prioUrgent');
    document.getElementById('prioUrgentIcon').classList.remove('prioIconFilter');
    document.getElementById('prioUrgent').onclick = prioUrgent;
    prioStatus.splice(0,1)
}


function clearPrioMedium() {
    document.getElementById('prioMedium').classList.remove('prioMedium');
    document.getElementById('prioMediumIcon').classList.remove('prioIconFilter');
    document.getElementById('prioMedium').onclick = prioMedium;
    prioStatus.splice(0,1)
}


function clearPrioLow() {
    document.getElementById('prioLow').classList.remove('prioLow');
    document.getElementById('prioLowIcon').classList.remove('prioIconFilter');
    document.getElementById('prioLow').onclick = prioLow;
    prioStatus.splice(0,1)
}



