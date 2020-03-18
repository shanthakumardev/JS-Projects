var students =[];

if(window.localStorage.getItem('students')) {
    //convert string to Object
    students = JSON.parse(window.localStorage.getItem('students'));
    displayData();
}

function addStudent(e) {
    if(e) {
      e.preventDefault();
    }
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;

    // var student = {
    //     name: name,
    //     address: address
    // }

    var student = {
        name,
        address
    }
    console.log('student', student);
    students.push(student);
    // convert objec to string and set the value in local storage
    window.localStorage.setItem('students', JSON.stringify(students));

    addData(student);
    document.contact-form.submit();
    document.contact-form.reset();
}

function addData(student) {
    var parentDiv = document.createElement('div');
    // used to create an element
    // var nameSpan = document.createElement('span');
    // nameSpan.innerHTML = student.name;
    // nameSpan.setAttribute('class','content');
    // parentDiv.appendChild(nameSpan);

    createElem('span',student, 'name', parentDiv);

    // var addressSpan = document.createElement('span');
    // addressSpan.innerHTML = student.address;
    // addressSpan.setAttribute('class', 'content');
    // parentDiv.appendChild(addressSpan);

    createElem('span', student, 'address', parentDiv);

    document.getElementById('studentDetails').appendChild(parentDiv);
}

function displayData() {
    document.contact-form.submit();
    document.contact-form.reset();
    for(var i =0; i< students.length; i++) {
        var parentDiv = document.createElement('div');

        // var nameSpan = document.createElement('span');
        // nameSpan.innerHTML = students[i].name;
        // nameSpan.setAttribute('class','content');
        // parentDiv.appendChild(nameSpan);
        createElem('span',students[i], 'name', parentDiv);

        // var addressSpan = document.createElement('span');
        // addressSpan.innerHTML = students[i].address;
        // addressSpan.setAttribute('class', 'content');
        // parentDiv.appendChild(addressSpan);

        createElem('span', students[i], 'address', parentDiv);

        document.getElementById('studentDetails').appendChild(parentDiv);
    }   
}

function createElem(element, obj, prop, parent) {
    var ele = document.createElement(element);   //document.createElement('span');
    ele.innerHTML = obj[prop];
    ele.setAttribute('class', 'content');
    parent.appendChild(ele);
}
