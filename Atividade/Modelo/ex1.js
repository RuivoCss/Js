function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date();
  //var hora = data.getHours();
  var hora = 22;
  msg.innerHTML = `agora são ${hora} horas.`
  if (hora >= 0 && hora < 12){
    //bom dia
    img.src = 'Foto 2.png'
    document.body.style.background = '#e3cd9f'
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'Foto 3.png';  
    document.body.style.background = '#b9846f'
  //Boa tarde
   }else {
    img.src = 'Foto1.png'
    document.body.style.background = '#515154'
  //Boa noite
   }
}