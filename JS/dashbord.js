
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
users = JSON.parse(localStorage.getItem('users'));
console.log(dashbord);
console.log(users);
let tbody = document.createElement('tbody');


function createTable(){
  for (let index = 0; index < users.length; index++) {
    let row = document.createElement("tr");
    // creer le button de supression
    let buttonCell = document.createElement("td");
    let buttonCel = document.createElement("td");
    let deleteButton = document.createElement("button");
    let buttonText = document.createTextNode("Supprimer");
    deleteButton.setAttribute("class", "delete-btn");
    deleteButton.appendChild(buttonText);

    for ( 
      let element = 0;
      element < Object.keys(users[index]).length;
      element++
    ) {
        
        console.log(element)

      // ajouter les td
      const cell = document.createElement("td");

      const cellText = document.createTextNode( Object.values(users[index])[element]
      );
      console.log(cellText);
      console.log(cell);
      deleteButton.setAttribute("contactPhone", users[index].telephone);
      deleteButton.setAttribute("contactPhone", users[index].telephone);
      buttonCell.appendChild(deleteButton);
      cell.appendChild(cellText);
      row.appendChild(cell);
      row.appendChild(buttonCell);
      row.setAttribute("id", users[index].telephone);

      // console.log( Object.keys(contacts[0]));
    }
    console.log('tets',row)
    tbody.appendChild(row);
  }
  dashbord.appendChild(tbody);
}

createTable();




