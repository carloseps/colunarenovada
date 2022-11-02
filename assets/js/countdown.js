const futuro = new Date().getTime() + 987654;

const countdown = () => {
    const agora = new Date().getTime();
    const dataLimite = futuro - agora;

    const segundo = 1000;
    const minuto = segundo * 60;
    const hora = minuto * 60;
    const dia = hora * 24;

    const textoDia = Math.floor(dataLimite / dia);
    const textoHora = Math.floor((dataLimite % dia) / hora);
    const textoMinuto = Math.floor((dataLimite % hora) / minuto);
    const textoSegundo = Math.floor((dataLimite % minuto) / segundo);

    document.querySelector(".minutos").innerText = textoMinuto;
    document.querySelector(".segundos").innerText = textoSegundo;

    futuro = futuro - 1000;
};

setInterval(countdown, 1000);
