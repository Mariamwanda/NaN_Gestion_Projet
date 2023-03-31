
    let nom = document.querySelector('#nom');
    let prenom = document.querySelector('#prenom');
    let email = document.querySelector('#email')
    let genre = document.querySelector('#genre');
    let date = document.querySelector('#date');
    let heure = document.querySelector('#time');
    let tache = document.querySelector('#tache');
    let description = document.querySelector('#description');

   
     function ajout(conatct){
         localStorage.setItem('users',JSON.stringify(conatct))
        }
        
        tab =  JSON.parse(localStorage.getItem('users')) || []

    
    

    const btn = document.querySelector('#valider')
    btn.addEventListener('click',function(e){
        e.preventDefault()
        if(nom.value === '' || prenom.value === ''  || email.value === '' ||  genre.value === ''||  date.value === '' || heure.value === '' || tache.value === ''){
            alert('Veuillez Rempli Tout Les Champs Vides')
        }else{
                infos = {
                nom:nom.value,
                prenom:prenom.value,
                email:email.value,
                genre:genre.value,
                date:date.value,
                heure:heure.value,
                tache:tache.value,
                description:description.value,
            }

          tab.push(infos)
          ajout(tab) 
          window.location.href = "./dashboard.html"

        }
    });


