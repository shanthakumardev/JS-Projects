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
}

function addData(student) {
    var parentDiv = document.createElement('div');

    var nameSpan = document.createElement('span');
    nameSpan.innerHTML = student.name;
    nameSpan.setAttribute('class','content');
    parentDiv.appendChild(nameSpan);

    var addressSpan = document.createElement('span');
    addressSpan.innerHTML = student.address;
    addressSpan.setAttribute('class', 'content');
    parentDiv.appendChild(addressSpan);

    document.getElementById('studentDetails').appendChild(parentDiv);
}

function displayData() {

    for(var i =0; i< students.length; i++) {
        var parentDiv = document.createElement('div');

        var nameSpan = document.createElement('span');
        nameSpan.innerHTML = students[i].name;
        nameSpan.setAttribute('class','content');
        parentDiv.appendChild(nameSpan);

        var addressSpan = document.createElement('span');
        addressSpan.innerHTML = students[i].address;
        addressSpan.setAttribute('class', 'content');
        parentDiv.appendChild(addressSpan);

        document.getElementById('studentDetails').appendChild(parentDiv);
    }   
}
