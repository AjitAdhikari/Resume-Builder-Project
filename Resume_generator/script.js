// alert("loading");
function  addNewWEField(){
    // console.log("adding new field");
    
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we")
    let weaddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weaddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("aq")
    let aqaddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqaddButtonOb);

}

// Generiting CV
function generateCV(){
    // console.log("generate CV")
    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1")

    nameT1.innerHTML = nameField;

    let nameT2=document.getElementById("nameT2");
    nameT2.innerHTML = nameField;

    // // Contact
    document.getElementById("ContactT").innerHTML = document.getElementById("contactField").value;

    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    //facebook link
    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkT").innerHTML = document.getElementById("linkedinField").value;

    //Objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    //Work Experience
    let wes =document.getElementsByClassName("weField");
    let str = "";

    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
        
    }
    document.getElementById("weT").innerHTML = str;

    // acedemic qualification
    let aqs = document.getElementsByClassName("eqField");
    let str1 =" ";

    for (let e of aqs){
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = str1;

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";

    // img
    let file = document.getElementById("imgField").files[0];
console.log(file);

let reader = new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);

// set the image to template

reader.onloadend = function(){
    document.getElementById("imgTemplate").src = reader.result;
};

    document.getElementById("imgTemplate").src = reader.result;

}
// print cv
function printCV()
{
    window.print();
}
