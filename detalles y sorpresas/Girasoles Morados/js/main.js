document.body.classList.remove('not-loaded');
    // Botón para ti: al hacer clic, reproduce música y muestra el resto
    document.getElementById('btn-para-ti').onclick = function() {
      var audio = document.getElementById('audio-para-ti');
      audio.currentTime = 0;
      audio.play();
      // Oculta pantalla inicial y muestra contenido principal
      document.getElementById('pantalla-inicial').style.display = 'none';
      document.getElementById('contenido-principal').style.display = '';
      // Espera a que terminen las animaciones de los tulipanes (~2.5s)
      setTimeout(function() {
        document.querySelector('.ramo').classList.add('ramo--visible');
      }, 2500);
    };