var form = `<div>
   <div class="group">
   <label for="">Nom:</label>
   <input type="text" id="nom"><br>
   </div>
   <div class="group">
   <label for="">Prenom:</label>
   <input type="text" style="margin-left: -26px;" id="prenom">
   </div>
   <div class="group">
   <label for="">Email:</label>
   <input type="email" style="margin-left: -9px;" id="email" ><br>
   </div>
   <div class="group">
   <label for="">Genre:</label>
   <input type="radio" name="Femme" class="none"><label for="" id="femme">Femme</label>
   <input type="radio" name="Femme" class="none"><label for="">Homme</label>
   </div>
   <div class="group">
   <label for="">Date:</label>
   <input type="date" placeholder="jj//mm//aa" id="date"><br>
   </div>
   <div class="group">
   <label for="">Heure:</label>
   <input type="time" style="margin-left: -10px;" id="time"><br>
   </div>
   <button id="valider" type= "submit" onclick = "Ajouter()" >Ajouter</button>
</div>`

function table(){
   let table = `<table class="table">
         <thead>
         <tr>
            <td>No</td>
            <td>Nom</td>
            <td>Prénom</td>
            <td>Mail</td>
            <td>genre</td>
            <td>Date</td>
            <td>Time</td>
            <td>Modifier</td>
            <td>Supprimer</td>
         </tr>
      </thead>
      <tbody>`
      for( let i = 0; i < details.length;i++){
         table = table + `   <tr>
         <td>${details[i].nom}</td>
         <td>${details[i].prenom}</td>
         <td>${details[i].email}</td>
         <td>${details[i].femme}</td>
         td>${details[i].date}</td>
         <td>${details[i].time}</td>
         <td>Modifier</td>
         <td>Supprimer</td>
      </tr>`
      }
      table = table + ` </tbody>`
     
   }
      


details = [];
function Ajouter(){
   let nom = document.getElementById("nom");
   let prenom = document.getElementById("prenom")
   let email = document.getElementById("email")
   let femme = document.getElementById("femme")
   let date = document.getElementById("date")
   let time = document.getElementById("time")
   

   let data ={
      nom : nom.value,
      prenom : prenom.value,
      email : email.value,
      femme : femme.value,
      date : date.value,
      time : time.value,
   };
   details.push(data);
   console.log(details);
   table();
   // console.log(prenom.value);
   // console.log(email.value);
   // console.log(femme.value);
   // console.log(date.value);
   // console.log(time.value);
}

document.getElementById('form') .innerHTML = form ;