function addNewWEField()
{
  let newNode =document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('weField');
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",3);
  newNode.setAttribute('placeholder','Enter Here')

  let weOb = document.getElementById("we");
  let weAddButtonOb=document.getElementById("weAddButton");

  weOb.insertBefore(newNode,weAddButtonOb);

}

function addNewAQField()
{
  let newNode =document.createElement('textarea');
  newNode.classList.add('form-control');
  newNode.classList.add('eqField');
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows",3);
  newNode.setAttribute('placeholder','Enter Here')

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb=document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode,aqAddButtonOb);
}

//generating

function generateCV()
{
  let nameField=document.getElementById("namefield").value;
  let nameT1=document.getElementById('nameT1');
  nameT1.innerHTML=nameField;



  document.getElementById('nameT2').innerHTML=nameField;

 document.getElementById('ContactT').innerHTML=document.getElementById('ContactField').value;


 document.getElementById('addressT').innerHTML=document.getElementById('Address').value;



 
 document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;



 
 document.getElementById('instaT').innerHTML=document.getElementById('instaFeild').value;


 
 document.getElementById('linkedT').innerHTML=document.getElementById('linkField').value;


 document.getElementById('ObjectiveT').innerHTML=document.getElementById('objectiveField').value;

let wes=document.getElementsByClassName('weField');

let str="";

for(let e of wes)
{
  str+= `<li> ${e.value} </li>`;
}

document.getElementById('weT').innerHTML=str;




let aqs=document.getElementsByClassName('eqField');

let str1 ="";


for(let e of aqs)
{
  str1+= `<li> ${e.value} </li>`;
}

document.getElementById('aqT').innerHTML=str1;

document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display="block";
}


function printCV()
{
  window.print(); 
}
