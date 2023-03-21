
    let nom = document.querySelector('#nom');
    let prenom = document.querySelector('#prenom');
    let email = document.querySelector('#email')
    let genre = document.querySelector('#genre');
    let date = document.querySelector('#date');
    let heure = document.querySelector('#time');
    let tache = document.querySelector('#tache');
    let description = document.querySelector('#description');

    function recuper(){
        recu = localStorage.getItem('users')
        if (recu === null) {
                return []
        } else {
            return JSON.parse(recu)
        }
    }

    function ajout(conatct){
            let recupere = recuper();
            recupere.push(conatct)
            localStorage.setItem('users',JSON.stringify(recupere))
    }
    const btn = document.querySelector('#valider')
    btn.addEventListener('click',function(){
        if(nom.value === '' || prenom.value === ''  || email.value === '' ||  genre.value === ''||  date.value === '' || heure.value === '' || tache.value === ''){
            alert('Veuillez Rempli Tout Les Champs Vides')
        }else{
            const infos = {
                nom:nom.value,
                prenom:prenom.value,
                email:email.value,
                genre:genre.value,
                date:date.value,
                heure:heure.value,
                tache:tache.value,
                description:description.value,
            }
            ajout(infos)
        }
            document.location.reload()
    });

    console.log(btn);