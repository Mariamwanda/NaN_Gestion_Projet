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

document.getElementById('submit').addEventListener("click",saveAdmin)
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
          BtnSUp.textContent = "Supprimer"
          btnSupp.appendChild(BtnSUp)

          const btnModif = document.createElement('td')
          let BtnModif = document.createElement('button')
           BtnModif.textContent = "Modifier"
           btnModif.appendChild(BtnModif)

          tr.append(tdId);
          tr.append(tdName);
          tr.append(tdPrenm);
          tr.append(tdEmail);
          tr.append(tdPoste);
          tr.append(btnSupp)
          tr.append(btnModif)
          tbody.append(tr);
          
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
          const tdId = document.createElement('td')
          tdId.textContent = key.id;

          const tdName = document.createElement('td')
          tdName.textContent = key.nom;

          const tdPrenm = document.createElement('td')
          tdPrenm.textContent = key.prenom;

          const tdEmail = document.createElement('td')
          tdEmail.textContent = key.email;

          const tdPoste = document.createElement('td')
          tdPoste.textContent = key.poste;

          tr.append(tdId);
          tr.append(tdName);
          tr.append(tdPrenm);
          tr.append(tdEmail);
          tr.append(tdPoste);
          content.append(tr);
    })
  }
}
afficheAdmin(requette)





const tbody = document.getElementById('tbody')
const button = document.querySelectorAll('button')
console.log(tbody)


button.forEach((supp)=>{
    supp.addEventListener('click',function(e){
        let racine = e.target.closest("td")
        console.log(racine.id);
        tbody.removeChild(racine);

        filter = admin.filter((id)=> id.email !== racine.id )
          console.log(filter)

            localStorage.setItem('admin', JSON.stringify(filter))



    })
})



