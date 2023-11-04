

let button = document.querySelector('#switch');

button.onclick=()=>{
    const html = document.documentElement;
    let photo = document.querySelector('#profile img')
    html.classList.toggle('light')

    if(html.classList.contains('light')){
        photo.setAttribute('src', './assets/AVTday.webp')
    } 
    else{
        photo.setAttribute('src', './assets/AVTnight1.webp')
    }
}

function showInvite(){
    let container = document.querySelector("#container");
    let invitation = document.createElement('div');
    invitation.classList.add('invitation');
    container.appendChild(invitation);
    invitation.innerHTML =`
        
    `;
    invitation.addEventListener('click',()=>{
        invitation.classList.remove('invitation');
        invitation.innerHTML="";
    });

}  


