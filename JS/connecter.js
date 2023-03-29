
// const btn = document.querySelector('#connection')
// btn.addEventListener('click',function(){})

// document.getElementById("connection").addEventListener("click",connection)
// // function connection(){
//     let conEmail = document.getElementById("Email")
//     let conPassWor = document.getElementById("passe")
//     if(conEmail.value.replaceAll(" ","")!=""){
//         if(conPassWor.value.replaceAll(" ","")!=""){
//             if(localStorage.getItem("SuperAdmin")){
//                 const DataAdmin = JSON.parse(localStorage.getItem("admin"))
//                 if(conEmail.value == DataSuperAdmin.email && conPassWor.value == DataSuperAdmin.passe){
//                     const DataSession = {
//                         email : conEmail.value,
//                         passe : conPassWor.value,
//                     }
//                     console.log(DataSession);
//                     alert("je suis un SuperAdmin simple")
//                     sessionStorage.setItem("sessionAdmin",JSON.stringify(DataSession))
//                     window.location.href = "../HTML/SuperAdmin.html"
//                 }else if((conEmail.value != DataSuperAdmin.email && conPassWor.value != DataSuperAdmin.passe)&& (DataAdmin.find(key=>key.email==conEmail.value && key.passe==conPassWor.value))){
//                     alert("je suis un Admin simple")
//                     window.location.href = "../HTML/dashboard.html"
//                 }
//             }
            
//         }
//     }
// // }


const Admin = {
    AdmEmail : 'mariamwandaogo7@gmail.com',
    AdmPasse : 'oooo'
}
localStorage.setItem('Admin', JSON.stringify(Admin));
console.log(Admin);

const SuperAdmin = {
    SupEmail : 'Samirawandaogo7@gmail.com',
    SupPasse : 'aaa'
}
localStorage.setItem('SuperAdmin', JSON.stringify(SuperAdmin));
console.log(SuperAdmin);

const connection = document.querySelector('#connection')
connection.addEventListener('connection',function)

