let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach(item =>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}


list.forEach(item => item.addEventListener("mouseover",activeLink));

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}
 

 
 var selectedRow = null;
 function onFormSubmit(){
    event.preventDefault(e);
    var formData = readFormData();
    if(selectedRow == null){
      insertNewRecord(formData)
    }
 }

 function readFormData(){
    var formData = {};
    formData["nom"] = document.getElementById("nom").value;
    formData["prenom"] = document.getElementById("prenom").value;
    formData["email"] = document.getElementById("email").value;
    formData["poste"] = document.getElementById("poste").value;

    return formData;
 }

 function insertNewRecord(data){
   var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
   var newRow = table.insertRow(table.length);
   var cell1 = newRow.insertCell(0);
     cell1.innerHTML = data.nom;
    var cell2 = newRow.insertCell(1);
     cell2.innerHTML = data.prenom;
    var cell3 = newRow.insertCell(2);
     cell3.innerHTML = data.email;
    var cell4 = newRow.insertCell(3);
     cell4.innerHTML = data.poste;
    var cell5 = newRow.insertCell(4);
     cell5.innerHTML = `<button>Modifier</button> <button>Supprimer</button>`
 }

