
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

const btn = document.querySelector("#connection");
btn.addEventListener("click",function(e){
    e.preventDefault();
    const Email = document.querySelector("#Email").value
    const passe = document.querySelector("#passe").value
    console.log(Email, passe)
    if(Email==SuperAdmin.SupEmail && passe == SuperAdmin.SupPasse){
        window.location.href = "./SuperAdmin.html"
    }else if(Email==Admin.AdmEmail && passe==Admin.AdmPasse){
        window.location.href = "./dashboard.html"
    } else{
        document.querySelector("#error").innerHTML="Erreur"
    }

})



