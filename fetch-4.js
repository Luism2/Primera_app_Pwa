//https://reqres.in/api/users

let img = document.querySelector('img');

fetch('utt_logo_ver_6.png')
.then(resp => resp.blob())
.then (imagen => {
    var imgPath = URL.createObjectURL(imagen);
    img.src = imgPath;
});