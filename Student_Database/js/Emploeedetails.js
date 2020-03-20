 var companies = [];
 if (window.localStorage.getItem(companies)) {
     companies = JSON.parse(window.localStorage.getItem('companies'));
     displayData();
 }


 function textValidation(textBox, errorElt) {
     var inputEltVal = document.forms['form'][textBox].value;
     console.log('inputElt', inputEltVal);
     if (inputEltVal !== "") {
         document.getElementById(errorElt).style.display = 'none';
         document.forms["form"][textBox].style.border = '1px solid black';
     }
 }

 

 //Page won't refresh
 function addemployee(e) {
     if (e) {
         e.preventDefault();
     }
     //Getting element 

     //var name=document.getElementById('name').value;

     var formsd = document.forms["form"]["name"].value;
     if (formsd == "") {
         document.getElementById('errorMsg').style.display = 'inline-block';
         document.forms["form"]["name"].style.border = '1px solid red';
         return false;
     }


     //var designation = document.getElementById('designation').value;

     var formdes = document.forms["form"]["designation"].value;
     if (formdes == "") {
         document.getElementById('errorMsgdes').style.display = 'inline-block';
         document.forms["form"]["designation"].style.border = '1px solid red';
         return false;
     }
     var drpdwn = document.getElementById('myList');
     var drpdwntxt = drpdwn.options[drpdwn.selectedIndex].text;



     var choices = [];
     var tech = document.getElementsByName('technology');
     for (var i = 0; i < tech.length; i++) {
         if (tech[i].checked) {
             choices.push(tech[i].value);
         }
     }
     var qualification;
     var radio = document.getElementsByName('qual');
     for (i = 0; i < radio.length; i++) {
         if (radio[i].checked) {
             qualification = radio[i].value;
         }
     }

     //storing in objects
     var company = {
         formsd: formsd,
         designation: formdes,
         salary: drpdwntxt,
         technology: choices,
         qualification: qualification
     }
     //pushing objects in array
     console.log('company', company);
     companies.push(company);

     window.localStorage.setItem('companies', JSON.stringify(companies));

     addData(company);
     newFunction();


 }

 function addData(company) {

     // var parentdiv=document.createElement('div');

     // parentdiv.innerHTML = '<input type="checkBox">';


     // var childspan=document.createElement('span');
     // childspan.innerHTML=company.name;
     // childspan.setAttribute('class','cont');
     // parentdiv.appendChild(childspan);

     // var childaddspan=document.createElement('span');
     // childaddspan.innerHTML=company.designation;
     // childaddspan.setAttribute('class','cont');
     // parentdiv.appendChild(childaddspan);
     // document.getElementById('studnetdetails').appendChild(parentdiv);

     // var drp=document.createElement('span')
     // drp.innerHTML=company.salary;
     // drp.setAttribute('class','cont');
     // parentdiv.appendChild(drp);

     // var chbox=document.createElement('span')
     // chbox.innerHTML=JSON.stringify(company.technology);
     // chbox.setAttribute('class','cont');
     // parentdiv.appendChild(chbox);

     // var rdbtn=document.createElement('span');
     // rdbtn.innerHTML=company.qualification;
     // rdbtn.setAttribute('class','cont');
     // parentdiv.appendChild(rdbtn);
     // a = a + b  => a += b



     //es6-template string - `

     document.getElementById('studentDetails').innerHTML +=
         `<div>
         <span class="cont">${company.formsd}</span>
         <span class="cont">${company.designation}</span>
        <span class="cont">${company.salary}</span>
        <span class="cont">${company.technology}</span>
        <span class="cont">${company.qualification}</span>
        </div>`;

 }


 function displayData() {
     for (var i = 0; i <= companies.length; i++) {

         var parentdiv = document.createElement('div');
         var childspan = document.createElement('span');
         childspan.innerHTML = company.name;
         childspan.setAttribute('class', 'cont');
         parentdiv.appendChild(childspan);

         var childaddspan = document.createElement('span');
         childaddspan.innerHTML = company.designation;
         childaddspan.setAttribute('class', 'cont');
         parentdiv.appendChild(childaddspan);

         var delBtn = document.createElement('button');
         delBtn.innerHTML = 'Delete';
         parentdiv.appendChild(delBtn);

         var drp = document.createElement('span')
         drp.innerHTML = company.salary;
         drp.setAttribute('class', 'cont');
         parentdiv.appendChild(drp);

         var chbox = document.createElement('span')
         chbox.innerHTML = JSON.stringify(company.technology);
         chbox.setAttribute('class', 'cont');
         parentdiv.appendChild(chbox);

         var rdbtn = document.createElement('span');
         rdbtn.innerHTML = company.qualification;
         rdbtn.setAttribute('class', 'cont');
         parentdiv.appendChild(rdbtn);



         document.getElementById('studentDetails').appendChild(parentdiv);

     }


 }


 function resetForm() {
     document.getElementById('form').reset;
 }