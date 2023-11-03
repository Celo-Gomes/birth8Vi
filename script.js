

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


