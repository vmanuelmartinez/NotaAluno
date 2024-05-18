function verificaNota() {

    let nota1 = parseInt(document.getElementById("n1").value);
    let nota2 = parseInt(document.getElementById("n2").value);
    let nota3 = parseInt(document.getElementById("n3").value);
    let mediaNotas = (nota1 + nota2 + nota3) / 3;
    let text = "";

    if (mediaNotas < 6) {
        text = "Você está reprovado";
    } else {
        text = `Você foi aprovado e sua media foi de ${mediaNotas.toFixed(2)}`;
    }

    document.getElementById("media").innerHTML = `Sua media foi de ${mediaNotas.toFixed(2)}`;
    document.getElementById("resp").innerHTML = text;
    document.getElementById("end").innerHTML = "Fin do programa :)"
}

// ToFixed me ajudou a converter a exibicao do resultado, exemplo se a media foi de 3.4566666,exibirá provavelmente 3.46