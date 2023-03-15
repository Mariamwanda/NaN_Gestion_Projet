
    let nom = document.querySelector('#nom')
    let prenom = document.querySelector('#prenom')
    let email = document.querySelector('#email')
    let genre = document.querySelector('#genre');
    let date = document.querySelector('#date');
    let heure = document.querySelector('#time');

    function recuper(){
        recu = localStorage.getItem('users')
        if (recu === null) {
                return []
        } else {
            return JSON.parse(recu)
        }
    }

    function ajout(conatct){
            // let recupere = recuper();
            let recupere =  [];
            recupere.push(conatct)
            localStorage.setItem('users',JSON.stringify(recupere))
    }
    const btn = document.querySelector('#valider')
    btn.addEventListener('click',function(){
        const infos = {
            nom:nom.value,
            prenom:prenom.value,
            email:email.value,
            genre:genre.value,
            date:date.value,
            heure:heure.value 
        }
          
        
          ajout(infos)

          document.location.href="../HTML/dashboard.html";
    

    });

//    function formulaire (){ 
//         let userN = localStorage.setItem("nom");
//         let userP = localStorage.setItem("prenom");
//         let userM = localStorage.setItem("Email");
//         let userG = localStorage.setItem("genre");
//         let userD = localStorage.setItem("date");
//         let userH = localStorage.setItem("heure");
//     if(inpU == userN && inpP == userP &&  inpM == userM && inpG == userG && inpD == userD && inpH == userH){
//        Window.Location.assign("NAN_GESTION_PROJET/index.html")
//     }
//     else{
//        document.getElementById('error').style.display='block';
//        document.getElementById('error').innerHTML="Incorrect Incorrect";
//     }
//    }

//    let send = document.querySelector('#valider');
//    send.addEventListener('click',(e) =>{
//        e.preventDefault()
//        let nom = document.querySelector('#nom').value;
//        let prenom = document.querySelector('#prenom').value;
//        let email = document.querySelector('#email').value;
//        let genre = document.querySelector('#genre').value;
//        let date = document.querySelector('#date').value;
//        let heure = document.querySelector('#heure')
//        let use = JSON.parse(localStorage.getItem("nom"));
//        let prnam = JSON.parse(localStorage.getItem("prenom"));
//        let mail = JSON.parse(localStorage.getItem("email"));
//        let sexe = JSON.parse(localStorage.getItem("genre"));
//        let jour = JSON.parse(localStorage.getItem("date"));
//        let time = JSON.parse(localStorage.getItem("heure"));
       
//        console.log(use);
//        if ((nom === localStorage.getItem("nom")) && prenom === localStorage.getItem("prenom") &&
//         email === localStorage.getItem("email") && genre === localStorage.getItem("genre") 
//         && date === localStorage.getItem("date") && heure  === localStorage.getItem("heure")){
//            document.querySelector('#nom').value = JSON.parse(localStorage.getItem('user'));
//            document.querySelector('#prenom').value = JSON.parse(localStorage.getItem('pass'));
//            document.querySelector('#email').value = JSON.parse(localStorage.getItem('user'));
//            document.querySelector('#genre').value = JSON.parse(localStorage.getItem('pass'));
//            document.querySelector('#date').value = JSON.parse(localStorage.getItem('user'));
//            document.querySelector('#time').value = JSON.parse(localStorage.getItem('pass'));
//        }
//        else{
//            document.location.href="../HTML/dashboard.html";
//        }
//    });