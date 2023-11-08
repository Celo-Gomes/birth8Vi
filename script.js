

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
        <h2 style="font-family: 'VT323', monospace;font-size:30px; font-weight:bolder;text-shadow: 2px 2px black; color: white;"> 
            START  Player: 🕹️ VICENTE
        </h2>
        <br>
        <p style=" font-weight:bolder; text-shadow: 2px 2px black; color: white;" >
            OLÁ, VOU COMPLETAR MAIS UMA FASE E QUERO VOCÊ PARA COMEMORAR COMIGO.<br>
            DATA: 18/11/2023 a partir das 11:00h<br>
            END: ESPAÇO FESTAS CALIFÓRNIA - próximo à Ramos e Veiga - Rua Beira Rio, nº 453 Entrada na, R. Júlio Alves de Amorim - Jardim California, Nova Friburgo
        </p>
        <br>

        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;🕹️👆<strong style="font-family: 'VT323', monospace;font-size:24px; font-weight:bolder; text-shadow: 2px 2px black; color: white;">VOLTAR</strong>👆🕹️ </p>
    `;
    invitation.addEventListener('click',()=>{
        invitation.classList.remove('invitation');
        invitation.innerHTML="";
    });

}  


