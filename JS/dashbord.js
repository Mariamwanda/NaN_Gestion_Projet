// let arr = [1,2,3];
// let art = "mariam";
// let arrt = "sra"
// localStorage.setItem("key", JSON.stringify(arr));
// localStorage.setItem("key", JSON.stringify(art));
// localStorage.setItem("key", JSON.stringify(arrt));


const dashbord = document.querySelector('.dashbord')
users = JSON.parse(localStorage.getItem('users'));
console.log(dashbord);
console.log(users);
let tbody = document.createElement('tbody');


function createTable() {
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




