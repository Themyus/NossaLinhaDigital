const dataInicio = new Date('2025-04-08T03:32:00');

    function atualizarContador() {
      const agora = new Date();
      const diferenca = agora - dataInicio;

      const segundosTotais = Math.floor(diferenca / 1000);
      const dias = Math.floor(segundosTotais / (60 * 60 * 24));
      const horas = Math.floor((segundosTotais % (60 * 60 * 24)) / (60 * 60));
      const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
      const segundos = segundosTotais % 60;

      const contador = document.getElementById('contador');
      contador.textContent = `Estamos juntos há: ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
    }

    setInterval(atualizarContador, 1000);
    atualizarContador();