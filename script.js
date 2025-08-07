function gerarBotao() {
    const idadeInput = document.getElementById('idadeInput');
    const idade = parseInt(idadeInput.value);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpa o conteúdo anterior
