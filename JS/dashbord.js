// let arr = [1,2,3];
// let art = "mariam";
// let arrt = "sra"
// localStorage.setItem("key", JSON.stringify(arr));
// localStorage.setItem("key", JSON.stringify(art));
// localStorage.setItem("key", JSON.stringify(arrt));


const dashbord = document.querySelector('.dashbord')
users = JSON.parse(localStorage.getItem('users'));
console.log(dashbord);
let tbody = document.createElement('tbody');

// function ajoutTD(){
//     for(let i = 0 ; i< users.length ; i++){
//         console.log(users[i])
//         for(let j = 0 ; j < Object.keys(users[i]).length;j++){
//             console.log(Object.values(users[i])[0]);


//             let TD = document.createElement('TD'); 
//             let context = document.createTextNode(Object.values(users[i])[j]);
//             console.log(context);
//         }
//     }
   
// }
// ajoutTD();

// console.log(users);
// users.forEach(element => {
//     console.log(element.nom);
//     console.log(element.prenom);
//     console.log(element.email);
//     console.log(element.genre);
//     console.log(element.date);
//     console.log(element.heure);
//     row = `<tr>
//     <td>${element.nom}</td>
//     <td>${element.prenom}</td>
//     <td>${element.email}</td>
//     <td>${element.genre}</td>
//     <td>${element.date}</td>
//     <td>${element.heure}</td>
//      </tr>`

           
// });

// table.appendChild(tbody)

// let contacts = getContacts();

function createTable() {
  for (let index = 0; index < users.length; index++) {
    let row = document.createElement("tr");
    // creer le button de supression
    let buttonCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    let buttonText = document.createTextNode("terminer");
    // deleteButton.setAttribute("class", "delete-btn");
    deleteButton.appendChild(buttonText);

    for (
      let element = 0;
      element < Object.keys(users[0]).length;
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
