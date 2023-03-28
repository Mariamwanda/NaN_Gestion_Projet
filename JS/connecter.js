


document.getElementById("connection").addEventListener("click",connection)
function connection(){
    let conEmail = document.getElementById("Email")
    let conPassWor = document.getElementById("passe")
    if(conEmail.value.replaceAll(" ","")!=""){
        if(conPassWor.value.replaceAll(" ","")!=""){
            if(localStorage.getItem("SuperAdmin")){
                const DataAdmin = JSON.parse(localStorage.getItem("admin"))
                if(conEmail.value == DataSuperAdmin.email && conPassWor.value == DataSuperAdmin.passe){
                    const DataSession = {
                        email : conEmail.value,
                        passe : conPassWor.value,
                    }
                    alert("je suis un SuperAdmin simple")

                    sessionStorage.setItem("sessionAdmin",JSON.stringify(DataSession))
                    window.location.href = "../HTML/SuperAdmin.html"
                }else if((conEmail.value != DataSuperAdmin.email && conPassWor.value != DataSuperAdmin.passe)&& (DataAdmin.find(key=>key.email==conEmail.value && key.passe==conPassWor.value))){
                    alert("je suis un Admin simple")
                    window.location.href = "../HTML/dashboard.html"
                }else{
                    alert("Mot de passe ou Email incorrecte");
                   
                }
            }else{
                alert("ce compte n'existe pas.cliquez sur OK pour creer un compte")
            }
            
        }
    }
}
