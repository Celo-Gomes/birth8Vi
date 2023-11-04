

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
        <h2 style="font-family: 'VT323', monospace;font-size:30px; font-weight:bolder;text-shadow: 2px 2px black; color: white;"> LOREM </h1>
        <p style="font-family: 'VT323', monospace;font-size:24px; font-weight:bolder; text-shadow: 2px 2px black; color: white;" >LOREM IPSUM dolor sit amet, consectetur adipisicing elit. Ducimus non, ipsam quaerat eligendi autem laborum commodi esse nemo quis accusantium nostrum earum fuga laboriosam! Voluptate amet consectetur nemo alias facilis.</p>
        <br>
        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;👆<strong style="font-family: 'VT323', monospace;font-size:24px; font-weight:bolder; text-shadow: 2px 2px black; color: white;">Go Back</strong>👆</p>
    `;
    invitation.addEventListener('click',()=>{
        invitation.classList.remove('invitation');
        invitation.innerHTML="";
    });

}  


