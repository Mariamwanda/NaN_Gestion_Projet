if(localStorage.getItem("admin")){
  const numberAdd = JSON.parse(localStorage.admin).filter(key=>key.statut != 0 &&  key.admin == false).length;
  document.getElementById('numberAdmin').textContent = numberAdd;
}else{
  document.getElementById('numberAdmin').textContent = 0;
}

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

document.getElementById('submit').addEventListener("click",function(e){
  saveAdmin()
  window.location.reload()
})
function saveAdmin(){
  const saveNom = document.getElementById('nom')
  const savePrenom = document.getElementById('prenom')
  const saveEmail = document.getElementById('email')
  const savePoste = document.getElementById('poste')
  const tbody = document.getElementById('tbody')
  const Data = [];
  
  if(saveNom.value.replaceAll((" ","")!="")){
    if(savePrenom.value.replaceAll((" ","")!="")){
      if(saveEmail.value.replaceAll((" ","")!="")){
        if(savePoste.value.replaceAll((" ","")!="")){
          const NewAdmin = {
            id : "",
            nom : saveNom.value,
            prenom : savePrenom.value,
            email : saveEmail.value,
            poste : savePoste.value,
            admin : false,
            statut : 1,
          };
          
          if(localStorage.getItem("admin")){
            const bigData = JSON.parse(localStorage.getItem("admin"));
            NewAdmin.id = bigData.length+1;
            bigData.push(NewAdmin);
            localStorage.setItem("admin",JSON.stringify(bigData));
          }else{
            NewAdmin.id = 1;
            Data.push(NewAdmin);
            localStorage.setItem("admin",JSON.stringify(Data))
          }

          const tr = document.createElement('tr');
          const tdId = document.createElement('td')
          tdId.textContent = NewAdmin.id;

          const tdName = document.createElement('td')
          tdName.textContent = NewAdmin.nom;

          const tdPrenm = document.createElement('td')
          tdPrenm.textContent = NewAdmin.prenom;

          const tdEmail = document.createElement('td')
          tdEmail.textContent = NewAdmin.email;

          const tdPoste = document.createElement('td')
          tdPoste.textContent = NewAdmin.poste;

          const btnSupp = document.createElement('td')
          let BtnSUp = document.createElement('button')
          BtnSUp.id = NewAdmin.id;
          BtnSUp.textContent = "Supprimer"
          btnSupp.appendChild(BtnSUp)

          const btnModif = document.createElement('td')
          let BtnModif = document.createElement('button')
          BtnModif.id = NewAdmin.id;
           BtnModif.textContent = "Modifier";
           btnModif.appendChild(BtnModif)
            
          tr.append(tdId);
          tr.append(tdName);
          tr.append(tdPrenm);
          tr.append(tdEmail);
          tr.append(tdPoste);
          tr.append(btnSupp)
          tr.append(btnModif)
          tbody.append(tr);
          
          saveNom.value = "";
          savePrenom.value ="";
          saveEmail.value ="";
          savePoste.value = "";

        }else{
          savePoste.focus()
        }
      }else{
        saveEmail.focus()
      }
    }else{
      savePrenom.focus()
    }
  }else{
    saveNom.focus()
  }
}
const requette = JSON.parse(localStorage.getItem("admin")).filter(key=>key.statut != 0 &&  key.admin == false);
function  afficheAdmin(AllAdmin){
  const content = document.getElementById('tbody')
  if(Array.isArray(AllAdmin)){
    AllAdmin.forEach(key=>{
      const tr = document.createElement('tr');
      tr.id= "tr-"+key.id;
          const tdId = document.createElement('td');

          tdId.textContent = key.id;

          const tdName = document.createElement('td')
          tdName.textContent = key.nom;
          tdName.id = "nom-"+key.id

          const tdPrenm = document.createElement('td')
          tdPrenm.textContent = key.prenom;
          tdPrenm.id = "prenom-"+key.id

          const tdEmail = document.createElement('td')
          tdEmail.textContent = key.email;
          tdEmail.id = "email-"+key.id

          const tdPoste = document.createElement('td')
          tdPoste.textContent = key.poste;
          tdPoste.id = "poste-"+key.id

          const tdModif = document.createElement('td')
          let BtnModif = document.createElement('button')
          BtnModif.id = "Mod-"+key.id;
          BtnModif.addEventListener("click", modifierAdmin);
          
          BtnModif.textContent = "Modifier";
          tdModif.appendChild(BtnModif)

          const tdSupp = document.createElement('td')
          let BtnSUp = document.createElement('button')
          BtnSUp.id = "Sup-"+key.id;
          BtnSUp.textContent = "Supprimer";
          BtnSUp.addEventListener("click", supprimerAdmin);
          tdSupp.appendChild(BtnSUp)

          tr.append(tdId);
          tr.append(tdName);
          tr.append(tdPrenm);
          tr.append(tdEmail);
          tr.append(tdPoste);
          tr.append(tdModif);
          tr.append(tdSupp);
          
          content.append(tr);
    })
  }
}
afficheAdmin(requette)

function modifierAdmin(event){
const inputnom = document.getElementById("nom");  
const inputprenom = document.getElementById("prenom");
const inputemail = document.getElementById("email");
const inputposte = document.getElementById("poste");
const inputaction = document.getElementById("submit");
const ed = document.querySelector("button[reference='edite']")

const nom = document.getElementById(event.target.id.replace("Mod", "nom"))
const prenom = document.getElementById(event.target.id.replace("Mod", "prenom"))
const email = document.getElementById(event.target.id.replace("Mod", "email"))
const poste = document.getElementById(event.target.id.replace("Mod", "poste"))

inputnom.value = nom.textContent;
inputnom.setAttribute("reference", event.target.id.replace("Mod-", ""))
inputprenom.value = prenom.textContent;
inputemail.value = email.textContent;
inputposte.value = poste.textContent;

if(inputaction){
  inputaction.remove();
}

if(ed){
  ed.remove();
}
const newAction = document.createElement("button");
newAction.type = "button";
newAction.id = "edit";
newAction.setAttribute("reference", "edite")
newAction.addEventListener("click", edite);
newAction.textContent = "Editer";

document.getElementById("action").append(newAction);
}

function edite(){
  const inputnom = document.getElementById("nom");  
  const inputprenom = document.getElementById("prenom");
  const inputemail = document.getElementById("email");
  const inputposte = document.getElementById("poste");

  if(inputnom.value.replaceAll(" ", "")!= ""){
    if(inputprenom.value.replaceAll(" ", "")!= ""){
      if(inputemail.value.replaceAll(" ", "")!= ""){
        if(inputposte.value.replaceAll(" ", "")!= ""){
          const idAdmin = inputnom.getAttribute("reference");
          const requette = JSON.parse(localStorage.admin);
          const element = requette.find(cle => cle.id == idAdmin);
          const indece = requette.indexOf(element);
          element.nom = inputnom.value;
          element.prenom = inputprenom.value;
          element.email = inputemail.value;
          element.poste = inputposte.value;

          requette[indece] = element;
          localStorage.setItem("admin", JSON.stringify(requette));
          alert("MODIFICATION EFFECTUÉ AVEC SUCCÈS!!!");
          location.reload();
        }
      }
    }
  }
}

function supprimerAdmin(event){
  if(confirm("VALIDER MA SUPPRESSION!!!")){
    const idAdmin = event.target.id.replace("Sup-", "");
    const requette = JSON.parse(localStorage.admin);
    const element = requette.find(cle =>cle.id == idAdmin);
    const indece = requette.indexOf(element);
    element.statut = 0;
    requette[indece] = element;
    localStorage.setItem("admin", JSON.stringify(requette));
    location.reload()
  }
}



