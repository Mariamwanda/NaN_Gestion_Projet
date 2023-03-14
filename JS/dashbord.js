// let arr = [1,2,3];
// let art = "mariam";
// let arrt = "sra"
// localStorage.setItem("key", JSON.stringify(arr));
// localStorage.setItem("key", JSON.stringify(art));
// localStorage.setItem("key", JSON.stringify(arrt));


const dashbord = document.querySelector('.dashbord')
users = JSON.parse(localStorage.getItem('users'));
console.log(dashbord);
let table = document.querySelector('dashbord')
let tbody = document.createElement('tbody');

function ajoutTD(){
    for(let i = 0 ; i< users.length ; i++){
        console.log(users[i])
        for(let j = 0 ; j < Object.keys(users[i]).length;j++){
            console.log(Object.values(users[i])[j]);


            let TD = document.createElement('TD'); 
            let context = document.createTextNode(Object.values(users[i])[j]);
            console.log(context);
        }
    }
   
}
ajoutTD();

// console.log(tbody);
// console.log(users)
// console.log(Object.values(users[0]))
// console.log(Object.keys(users[0]))

