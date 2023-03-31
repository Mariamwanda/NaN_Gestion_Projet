
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



const dashbord = document.querySelector('.dashbord')
let users = JSON.parse(localStorage.getItem('users'));
console.log(dashbord);
console.log(users);
let tbody = document.createElement('tbody');



users.forEach((lem)=>{
      dom = ` 
      <tr id="${lem.email}">
          <td>${lem.nom}</td>
          <td>${lem.prenom}</td>
          <td>${lem.email}</td>
          <td>${lem.genre}</td>
          <td>${lem.date}</td>
          <td>${lem.heure}</td>
          <td>${lem.tache}</td>
          <td>${lem.description}</td>
          <td><button class="delete-btn" contactphone="${lem.email}">Supprimer</button></td>
      </tr>
      
      `

      tbody.innerHTML += dom
      dashbord.appendChild(tbody)
})


const btn = document.querySelectorAll('.delete-btn')

btn.forEach((div)=>{
    div.addEventListener('click',function(e){
        let parent = e.target.closest("tr")
        console.log(parent.id);
        tbody.removeChild(parent)

        filter = users.filter((id)=> id.email !== parent.id )
        console.log(filter)

            localStorage.setItem('users', JSON.stringify(filter))


    })
})


console.log(btn);



