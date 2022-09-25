//https://reqres.in/api/users

let img = document.querySelector('img');

fetch('PWA/utt:png')
.then(resp => resp.blob())
.then (imagen => {

    var imgPath = URL.createObjectURL(imagen);
    img.src = imgPath;
});