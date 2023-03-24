
function ConnecteFunc(){

    let userN = localStorage.setItem("username");
    let userP = localStorage.setItem("password");
 

 if(inpU == userN && inpP == userP){
    Window.Location.assign("PROJET FEVRIER/index.html")
 }else{
    document.getElementById('error').style.display='block';
    document.getElementById('error').innerHTML="Incorrect Incorrect";
 }
}

let send = document.querySelector('.envoyer');
send.addEventListener('click',(e) =>{
    e.preventDefault()
    let name = document.querySelector('#user').value;
    let passWord = document.querySelector('#pass').value;
    let use = JSON.parse(localStorage.getItem("username"));
    let word = JSON.parse(localStorage.getItem("password"));
    console.log(use);
    if ((name === localStorage.getItem("username")) && passWord === localStorage.getItem("password")){
        document.querySelector('#user').value = JSON.parse(localStorage.getItem('user'));
        document.querySelector('#pass').value = JSON.parse(localStorage.getItem('pass'));

    }
    else{
       return console.error('use');
    }
});