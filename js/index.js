let banderas = document.getElementsByClassName('bandera');

function mostrarBandera(){
  let bandera = document.getElementById('bandera').value;
  ocultarBanderas();
  if(bandera == 'guatemala'){
    banderas[0].style.display = 'block';
  }
  else if(bandera == 'india'){
    banderas[1].style.display = 'block';
  }
  else if(bandera == 'bajos'){
    banderas[2].style.display = 'block';
  }
  else if(bandera == 'suecia'){
    banderas[3].style.display = 'block';
  }
  else if(bandera == 'suiza'){
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