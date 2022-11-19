let banderas = document.getElementsByTagName('article');

function mostrarBandera(){
  let bandera = document.getElementById('bandera').value;
  if(bandera == 'guatemala'){
    ocultarBanderas();
    banderas[0].style.display = 'block';
  }
  else if(bandera == 'india'){
    ocultarBanderas();
    banderas[1].style.display = 'block';
  }
  else if(bandera == 'bajos'){
    ocultarBanderas();
    banderas[2].style.display = 'block';
  }
  else if(bandera == 'suecia'){
    ocultarBanderas();
    banderas[3].style.display = 'block';
  }
  else if(bandera == 'suiza'){
    ocultarBanderas();
    banderas[4].style.display = 'block';
  }
}

function ocultarBanderas(){
  banderas[0].style.display = 'none';
  banderas[1].style.display = 'none';
  banderas[2].style.display = 'none';
  banderas[3].style.display = 'none';
  banderas[4].style.display = 'none';
}